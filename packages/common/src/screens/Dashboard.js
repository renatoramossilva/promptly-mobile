import React, {PureComponent} from 'react';
import {withTranslation} from 'react-i18next';
import {Layout, withStyles} from '@ui-kitten/components';
import {ScrollView, AppState, SafeAreaView, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import _ from 'lodash';
import Axios, {setDefaultHeaderCommon, setBaseURL} from 'utils/axios';
import OneSignal from 'react-native-onesignal';
import {getPatient} from 'selectors/selected_patients';
import {
  getUser,
  getHealthSpaces,
  getSelectedHealthSpace,
} from 'selectors/selected_user';
import {getLinkedDevices, getSyncableDevices} from 'selectors/selected_devices';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {
  fetchUser,
  fetchAllUserDataFromHealthSpaces,
  setHealthSpace,
} from 'actions/user';
import {fetchDiseases, fetchDiseaseScores} from 'actions/diseases';
import {refreshSessionCookies} from 'actions/session';
import {fetchRecommendedArticles} from 'actions/articles';
import {fetchDevices} from 'actions/devices';
import {showToast} from 'actions/toasts';
import {
  sendBufferMeasurements,
  storeMeasurements,
  fetchDashboardMeasurements,
} from 'actions/measurements';
import {clickCoaDetail} from 'actions/datacollection';
import {getImageAbsoluteUrl} from 'utils';
import {
  getDeviceInstance,
  checkAndGetValues,
  autoConnDevice,
} from 'utils/measurements';
import StatusBanner from 'components/common/StatusBanner';
import {DashboardStyles} from 'components/dashboard/Dashboard.Styles';
import {SERVER_ERROR} from '../constants/messages';
import {bleErrors} from '../constants/bleErrors';
import MobileHeader from 'components/common/MobileHeader';
import LoadingScreen from 'components/common/LoadingScreen';
import DashboardCoaCardList from 'components/dashboard/Dashboard.CoaCard.List';
import DashboardMetrics from 'components/dashboard/Dashboard.Metrics';
import {
  getPatientRecommendedArticlesURL,
  getReadingsURLByPatient,
} from 'selectors/selected_api';
import {getRecommendedArticles} from 'selectors/selected_education';
import EducationRecommended from 'components/education/Education.Recommended';
import {hasFeature} from 'components/flag/flag';
import {getLanguage} from 'selectors/selected_settings';
import {clickOpenDrawer} from 'actions/datacollection';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getDiseases().then(() => {
      this.setState({refreshing: false});
    });
  };

  updateMeasurements = () => {
    setTimeout(() => {
      this.props.diseases.map(d =>
        this.props.fetchDashboardMeasurementsfn(
          getReadingsURLByPatient(this.props.patient.id, d.id, 'dashboard=1'),
        ),
      );
    }, 1000);
  };

  syncMeasurements = async (receivedDevices = [], silent = false) => {
    const {
      patient,
      linkedDevices,
      route,
      t,
      showToastfn,
      sendBufferMeasurementsfn,
    } = this.props;
    const {ble} = route.params;

    if (
      !patient ||
      receivedDevices.length === 0 ||
      linkedDevices.length === 0
    ) {
      return false;
    }
    try {
      const isOn = await ble.checkBleState('PoweredOn');
      if (!isOn) {
        const toast = {
          title: t('Bluetooth not connected'),
          message: t('Devices need bluetooth turned on to sync measurements'),
          image: require('../images/img-bt-off.png'),
          size: 50,
        };
        return showToastfn(toast);
      }

      const {url, jwt} = patient.measurements;
      for (const item of receivedDevices) {
        if (item.providerType !== 'bluetooth') {
          continue;
        }
        await this.getMeasurements(item, silent);
      }
      await sendBufferMeasurementsfn(linkedDevices, url, jwt, silent);
      this.updateMeasurements();
    } catch (error) {
      !silent &&
        showToastfn({
          title: t(bleErrors[error].title),
          message: t(bleErrors[error].message),
          type: 'error',
        });
    }
  };

  getMeasurements = async (activeItem, silent = false) => {
    const {route, showToastfn, t, storeMeasurementsfn} = this.props;
    const {ble} = route.params;
    try {
      const deviceInstance = await getDeviceInstance(
        activeItem,
        ble,
        showToastfn,
        t,
        bleErrors,
        silent,
      );

      const result = await checkAndGetValues(
        activeItem,
        deviceInstance,
        ble,
        showToastfn,
        t,
        silent,
      );

      await storeMeasurementsfn(activeItem, result);
    } catch (error) {
      !silent &&
        showToastfn({
          title: t(bleErrors[error].title),
          message: t(bleErrors[error].message),
          type: 'error',
        });

      autoConnDevice(ble, activeItem)
        .then(async result => {
          await storeMeasurementsfn(activeItem, result);
          this.syncMeasurements(activeItem, silent);
        })
        .catch(err => {
          !silent &&
            showToastfn({
              title: t(bleErrors[err].title),
              message: t(bleErrors[err].message),
              type: 'error',
            });
        });
    }
  };

  handleAppStateChange = nextAppState => {
    const {syncableDevices} = this.props;
    if (nextAppState === 'active') {
      if (syncableDevices.length === 0) {
        return false;
      }
      this.syncMeasurements(syncableDevices, true);
    }
  };

  getDiseases = async () => {
    const {
      patient,
      fetchDiseasesFn,
      fetchDevicesFn,
      t,
      showToastFn,
      fetchRecommendedArticlesFn,
      recommendedArticlesURL,
    } = this.props;
    try {
      if (
        !patient.id ||
        !patient.diseases_url ||
        !patient.oauth_providers_url
      ) {
        return;
      }
      await fetchDiseasesFn(patient.diseases_url, patient.id);
      await fetchDevicesFn(patient.oauth_providers_url);
      await fetchRecommendedArticlesFn(recommendedArticlesURL);
    } catch (error) {
      showToastFn({
        title: t(bleErrors[error].title),
        message: t(bleErrors[error].message),
      });
    }
  };

  getDiseaseScores = () => {
    const {patient, diseases, fetchDiseaseScoresfn} = this.props;
    if (!patient.id) {
      return;
    }
    diseases.map(pdisease => {
      fetchDiseaseScoresfn(patient, pdisease, 'SINGLE_SCORE');
    });
  };

  getPatientData = async () => {
    try {
      const {
        healthSpaces,
        fetchAllUserDataFromHealthSpacesFn,
        language,
      } = this.props;

      if (language) {
        setDefaultHeaderCommon('Accept-Language', language.toLowerCase());
        await this.props.i18n.getAndChangeLanguage(language);
      }

      if (healthSpaces) {
        await fetchAllUserDataFromHealthSpacesFn(healthSpaces);
      }
    } catch (error) {
      this.props.showToastfn(SERVER_ERROR);
    }
  };

  componentDidMount() {
    const {navigation} = this.props;
    OneSignal.addTrigger('screen', 'dashboard');

    this.appStateEvent = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );

    this._unsubscribe = navigation.addListener('focus', () => {
      this.props.fetchUserFn();
      this.getDiseaseScores();
      if (this.props.patient.oauth_providers_url) {
        this.props.fetchDevicesFn(this.props.patient.oauth_providers_url);
      }
    });

    //first request
    this.props.onRefreshSessionCookies();

    AsyncStorage.getItem('@cookies').then(result => {
      if (result !== null) {
        const cookies = JSON.parse(result);
        Axios.defaults.headers.common['X-CSRFToken'] = cookies.csrftoken.value;
        Axios.defaults.headers.common.referer = Config.WEBVIEW_URL;
        this.props.fetchUserFn();
      }
    });
  }

  componentDidUpdate(prevProps) {
    const {
      user,
      patient,
      diseases,
      healthSpaces,
      setHealthSpaceFn,
      syncableDevices,
      language,
    } = this.props;
    if (user.healthSpaces?.length > 0 && !user.selectedHealthSpace) {
      // set current seleted health scape and patient
      const selectedHS = healthSpaces.find(hs => hs.patient);
      if (selectedHS) {
        setHealthSpaceFn(selectedHS);
        const {url} = selectedHS;
        setBaseURL(url);
      }
    }
    if (
      !prevProps.user ||
      user.length !== prevProps.user.length ||
      user.healthSpaces?.length !== prevProps.user.healthSpaces?.length ||
      language !== prevProps.language
    ) {
      this.getPatientData();
    }

    if (
      prevProps.patient.id !== patient.id ||
      language !== prevProps.language
    ) {
      this.getDiseases();
    }

    if (!_.isEqual(prevProps.diseases, diseases)) {
      this.getDiseaseScores();
    }
    if (
      prevProps.syncableDevices !== syncableDevices &&
      syncableDevices.length > 0
    ) {
      this.syncMeasurements(syncableDevices, true);
    }
  }

  componentWillUnmount() {
    this._unsubscribe();
    this.appStateEvent.remove();
  }

  render() {
    const {
      t,
      user,
      patient,
      diseases,
      navigation,
      linkedDevices,
      recommendedArticles,
      eva,
      onClickOpenDrawer,
      onClickCoaDetail,
    } = this.props;

    const illustration = {
      image: require('../images/home.png'),
      title: t('Hello, {{user}}', {user: user.privateData.name}),
      subtitle: t('How do you feel today?'),
    };

    const {theme} = eva;

    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: theme['color-primary-500']}}>
        <Layout style={{flex: 1}}>
          {patient.id ? (
            <>
              <MobileHeader
                name={user.privateData.name}
                avatar={user.privateData.avatar_url}
                imgSrc={getImageAbsoluteUrl(
                  patient?.selectedInstitution?.branding?.logo_url,
                )}
                onPress={() => {
                  onClickOpenDrawer();
                  navigation.toggleDrawer();
                }}
              />
              <ScrollView
                keyboardShouldPersistTaps="handled"
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }>
                <StatusBanner
                  status={illustration}
                  innerStyles={{
                    textContainer: DashboardStyles.illustration,
                    title: {fontSize: 24, textAlign: 'left'},
                    subtitle: {fontSize: 18, textAlign: 'left'},
                  }}
                />
                <DashboardCoaCardList
                  diseases={diseases}
                  onClickCoaDetail={onClickCoaDetail}
                />
                {hasFeature(patient?.selectedInstitution, 'metrics') && (
                  <DashboardMetrics
                    devices={linkedDevices}
                    syncMeasurements={this.syncMeasurements}
                    updateMeasurements={this.updateMeasurements}
                  />
                )}
                <EducationRecommended articles={recommendedArticles} />
              </ScrollView>
            </>
          ) : (
            <LoadingScreen />
          )}
        </Layout>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: getUser,
  patient: getPatient,
  diseases: getDiseaseItems,
  linkedDevices: getLinkedDevices,
  syncableDevices: getSyncableDevices,
  healthSpaces: getHealthSpaces,
  selectedHealthSpace: getSelectedHealthSpace,
  recommendedArticlesURL: getPatientRecommendedArticlesURL,
  recommendedArticles: getRecommendedArticles,
  language: getLanguage,
});

const mapDispatchToProps = {
  onRefreshSessionCookies: refreshSessionCookies,
  fetchUserFn: fetchUser,
  fetchAllUserDataFromHealthSpacesFn: fetchAllUserDataFromHealthSpaces,
  fetchDiseasesFn: fetchDiseases,
  fetchDevicesFn: fetchDevices,
  setHealthSpaceFn: setHealthSpace,
  showToastfn: showToast,
  sendBufferMeasurementsfn: sendBufferMeasurements,
  storeMeasurementsfn: storeMeasurements,
  fetchDiseaseScoresfn: fetchDiseaseScores,
  fetchRecommendedArticlesFn: fetchRecommendedArticles,
  fetchDashboardMeasurementsfn: fetchDashboardMeasurements,
  onClickOpenDrawer: clickOpenDrawer,
  onClickCoaDetail: clickCoaDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(withStyles(Dashboard)));

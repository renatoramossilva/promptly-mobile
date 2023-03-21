import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTranslation} from 'react-i18next';
import {List, Layout, Text} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import {fetchDevices, disconnectProvider} from 'actions/devices';
import {storeMeasurements, sendBufferMeasurements} from 'actions/measurements';
import {
  clickAddDevice,
  clickDeviceItemDetail,
  clickDeviceItemAction,
} from 'actions/datacollection';
import {showToast} from 'actions/toasts';
import DevicesItem from './Devices.Item';
import {DevicesStyles} from './Devices.Styles';
import StatusBanner from '../common/StatusBanner';
import Button from '../common/Button';
import LoadingScreen from '../common/LoadingScreen';
import Modal from '../common/Modal';
import {bleErrors} from '../../constants/bleErrors';
import {getDeviceInstance, checkAndGetValues} from 'utils/measurements';

class Devices extends Component {
  constructor(props) {
    super(props);
    this.ble = props.route.params.ble;
    this.state = {
      modalVisible: false,
      activeItem: undefined,
      activeItemStorage: undefined,
      activeItemInstance: [],
    };
  }

  componentDidUpdate() {
    const params = this.props.route ? this.props.route.params : undefined;
    if (params && params.reload) {
      this.props.fetchDevices(this.props.patient.oauth_providers_url);
      if (params.toast) {
        this.props.showToast(params.toast);
      }
      this.props.navigation.setParams({toast: null, reload: null});
    }
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.fetchDevices(this.props.patient.oauth_providers_url);
    }
  }

  getMeasurements = async activeItem => {
    const {t} = this.props;
    try {
      const deviceInstance = await getDeviceInstance(
        activeItem,
        this.ble,
        this.props.showToast,
        t,
        bleErrors,
      );

      const result = await checkAndGetValues(
        activeItem,
        deviceInstance,
        this.ble,
        this.props.showToast,
        t,
      );

      await this.props.storeMeasurements(activeItem, result);

      const {url, jwt} = this.props.patient.measurements;
      await this.props.sendBufferMeasurements([activeItem], url, jwt);
    } catch (error) {
      this.props.showToast({
        title: t(bleErrors[error].title),
        message: t(bleErrors[error].message),
      });
    }
  };

  render() {
    if (this.props.loading) {
      return <LoadingScreen />;
    }

    const {t, navigation} = this.props;

    const resetModal = () => {
      this.setState({
        modalVisible: false,
        activeItem: undefined,
        activeItemStorage: undefined,
      });
    };

    const disconnectDevice = url =>
      this.props.disconnectProvider(url).then(() => {
        resetModal();
        this.props.fetchDevices(this.props.patient.oauth_providers_url);
      });

    const openModal = async item => {
      const jsonMeasurements = await AsyncStorage.getItem(
        `@measurements-${item.id}`,
      );
      this.setState({
        modalVisible: true,
        activeItem: item,
        activeItemStorage:
          jsonMeasurements !== null && JSON.parse(jsonMeasurements).length > 0,
      });
    };

    const renderItem = ({item}) => (
      <DevicesItem
        device={item}
        navigation={navigation}
        itemPress={() => {
          this.props.clickDeviceItemDetail({deviceName: item?.name});
          openModal(item);
        }}
      />
    );

    const renderList = () => {
      if (this.props.linked.length > 0) {
        return (
          <List
            style={DevicesStyles.devicesList}
            contentContainerStyle={DevicesStyles.devicesListContainer}
            data={this.props.linked}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        );
      }

      const status = {
        image: require('../../images/bg-empty-state-devices.png'),
        imageFull: true,
        title: t('Add a device'),
        subtitle: t('Start monitoring your health'),
      };

      return (
        <StatusBanner status={status} style={{backgroundColor: '#EEF6FF'}} />
      );
    };

    const renderModalContent = () => {
      if (!this.state.activeItem) {
        return null;
      }

      const {name, description, providerType, history} = this.state.activeItem;

      return (
        <>
          <Layout>
            <Text category="h3">{name}</Text>
            <Text category="h5">{description}</Text>
          </Layout>
          {this.state.activeItemStorage && (
            <Button
              onPress={async () => {
                this.props.clickDeviceItemAction({
                  deviceName: name,
                  deviceAction: 'sync_measurements',
                });
                try {
                  const {url, jwt} = this.props.patient.measurements;
                  await this.props.sendBufferMeasurements(
                    [this.state.activeItem],
                    url,
                    jwt,
                  );
                  resetModal();
                } catch (error) {
                  resetModal();
                }
              }}>
              {t('Sync measurements')}
            </Button>
          )}
          {providerType === 'bluetooth' && !history && (
            <Button
              onPress={() => {
                resetModal();
                this.props.clickDeviceItemAction({
                  deviceName: name,
                  deviceAction: 'measure_height',
                });
                navigation.navigate('DevicesInstantWeightReading', {
                  item: this.state.activeItem,
                });
              }}>
              {t('Measure weight')}
            </Button>
          )}
          {providerType === 'bluetooth' && history && (
            <Button
              onPress={() => {
                resetModal();
                this.props.clickDeviceItemAction({
                  deviceName: name,
                  deviceAction: 'get_measurements',
                });
                this.getMeasurements(this.state.activeItem);
              }}>
              {t('Get measurements')}
            </Button>
          )}
          <Button
            status="danger"
            onPress={() => {
              this.props.clickDeviceItemAction({
                deviceName: name,
                deviceAction: 'remove_device',
              });
              disconnectDevice(this.state.activeItem.disconnectUrl);
            }}>
            {t('Remove device')}
          </Button>
        </>
      );
    };

    try {
      return (
        <Layout
          style={
            this.props.linked.length > 0
              ? {}
              : {
                  backgroundColor: '#EEF6FF',
                  height: '100%',
                }
          }>
          {renderList()}
          {this.props.available.length > 0 && (
            <Button
              accessibilityLabel={t('Add device')}
              onPress={() => {
                this.props.clickAddDevice();
                navigation.navigate('DevicesAvailable');
              }}
              style={{marginHorizontal: 10}}
              status="primary">
              {t('Add device')}
            </Button>
          )}
          <Modal
            modalVisible={this.state.modalVisible}
            hideModal={() => {
              this.setState({modalVisible: false});
            }}>
            {renderModalContent()}
          </Modal>
        </Layout>
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
const mapStateToProps = ({user, patient, devices}) => {
  const {result, loading} = devices;
  const {linked, available} = result;
  return {user, patient, linked, available, loading};
};

const mapDispatchToProps = {
  fetchDevices,
  showToast,
  disconnectProvider,
  sendBufferMeasurements,
  storeMeasurements,
  clickAddDevice,
  clickDeviceItemDetail,
  clickDeviceItemAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Devices));

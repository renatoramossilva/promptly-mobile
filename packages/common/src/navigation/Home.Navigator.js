import React, {useEffect} from 'react';
import {AppState} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuDrawer from 'components/menuDrawer/MenuDrawer';
import {getPatient} from 'selectors/selected_patients';
import {fetchClinicalTrials} from 'actions/settings';
import {getUnagreedClinicalTrials} from 'selectors/selected_settings';
import BottomNavigator from './Bottom.Navigator';

const Drawer = createDrawerNavigator();

const HomeNavigator = ({
  route,
  unagreedClinicalTrials,
  patient,
  goFetchClinicalTrials,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!patient.id) {
      return;
    }
    getPatientIdAndFetchCT();
    const appStateEvent = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      appStateEvent.remove();
    };
  }, [patient]);

  useEffect(() => {
    if (unagreedClinicalTrials.length > 0) {
      navigation.navigate('Consents');
    }
  }, [unagreedClinicalTrials]);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      getPatientIdAndFetchCT();
    }
  };

  const getPatientIdAndFetchCT = () => {
    const {id} = patient;
    goFetchClinicalTrials(id);
  };

  return (
    <Drawer.Navigator
      screenOptions={{gestureEnabled: true}}
      drawerStyle={{width: '90%'}}
      drawerContent={props => <MenuDrawer {...props} />}>
      <Drawer.Screen
        name="HomeTab"
        component={BottomNavigator}
        initialParams={{ble: route.params.ble}}
      />
    </Drawer.Navigator>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  unagreedClinicalTrials: getUnagreedClinicalTrials,
});

const mapDispatchToProps = {
  goFetchClinicalTrials: fetchClinicalTrials,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);

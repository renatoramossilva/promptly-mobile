import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {useTheme} from '@ui-kitten/components';
import {setInstitutionPatient} from 'actions/user';
import {clickDrawerItem} from 'actions/datacollection';
import {
  getPatientSelectedInstitution,
  getPatientInstitutions,
} from 'selectors/selected_patients';
import {
  getUser,
  getUserPrivateData,
  getHelpScoutConfig,
} from 'selectors/selected_user';
import MenuDrawerLogo from './MenuDrawer.Logo';
import MenuDrawerUser from './MenuDrawer.User';
import MenuDrawerNav from './MenuDrawer.Nav';
import MenuDrawerHealthSpaces from './MenuDrawer.HealthSpaces';
import {MenuDrawerStyles} from './MenuDrawer.Styles';

const Drawer = props => {
  const {
    navigation,
    privateData,
    user,
    selectedInstitution,
    institutions,
    setInstitutionPatientFn,
    helpScoutConfig,
    onClickDrawerItem,
  } = props;

  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        MenuDrawerStyles.wrapper,
        {backgroundColor: theme['promptly-blue-500']},
      ]}>
      <MenuDrawerLogo />
      <MenuDrawerUser
        user={user}
        userName={privateData.name}
        userAvatar={privateData.avatar_url}
      />
      <MenuDrawerHealthSpaces
        setInstitutionPatient={setInstitutionPatientFn}
        selectedInstitution={selectedInstitution}
        institutions={institutions}
      />
      <MenuDrawerNav
        selectedInstitution={selectedInstitution}
        navigation={navigation}
        user={user}
        helpScoutConfig={helpScoutConfig}
        onClickDrawerItem={onClickDrawerItem}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  privateData: getUserPrivateData(state),
  institutions: getPatientInstitutions(state),
  selectedInstitution: getPatientSelectedInstitution(state),
  helpScoutConfig: getHelpScoutConfig(state),
});

export default connect(mapStateToProps, {
  setInstitutionPatientFn: setInstitutionPatient,
  onClickDrawerItem: clickDrawerItem,
})(Drawer);

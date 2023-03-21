import React from 'react';
import {
  CAREGIVER_SECTION,
  COMPLEMENTARY_INFO_SECTION,
  PRIVACY_SECTION,
  PREFERENCES_SECTION,
  GENERAL_INFO_SECTION,
  ABOUT_PROMPTLY,
} from '../../constants/myAccount';
import MyAccountCaregiver from './caregiver/MyAccount.Caregiver';
import MyAccountComplementaryInfo from './complementaryInfo/MyAccount.ComplementaryInfo';
import MyAccountPrivacy from './privacy/MyAccount.Privacy';
import MyAccountPreferences from './preferences/MyAccount.Preferences';
import MyAccountGeneralInfo from './generalInfo/MyAccount.GeneralInfo';
import MyAccountAbout from './about/MyAccount.About';

const MyAccountTabContent = ({activeSection}) => {
  switch (activeSection) {
    case GENERAL_INFO_SECTION:
      return <MyAccountGeneralInfo />;
    case PREFERENCES_SECTION:
      return <MyAccountPreferences />;
    case PRIVACY_SECTION:
      return <MyAccountPrivacy />;
    case CAREGIVER_SECTION:
      return <MyAccountCaregiver />;
    case COMPLEMENTARY_INFO_SECTION:
      return <MyAccountComplementaryInfo />;
    case ABOUT_PROMPTLY:
      return <MyAccountAbout />;
    default:
      return <MyAccountGeneralInfo />;
  }
};
export default MyAccountTabContent;

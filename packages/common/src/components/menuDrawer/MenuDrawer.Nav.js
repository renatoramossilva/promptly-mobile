import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';
import {hasFeature, hasFeatureWaffle} from '../flag/flag';
import MenuDrawerNavItem from './MenuDrawer.Nav.Item';
import {MenuDrawerNavStyles} from './MenuDrawer.Styles';
import HelpScout from 'utils/helpscout';

const MenuDrawerNav = ({
  selectedInstitution,
  navigation,
  user,
  helpScoutConfig,
  onClickDrawerItem,
}) => {
  const {t} = useTranslation();

  const [helpScoutInitiated, setHelpScoutInitiated] = useState(false);
  const helpScoutRole = Config.HELPSCOUT_ROLE;

  if (
    hasFeatureWaffle('helpscoutEnabled') &&
    selectedInstitution?.id &&
    user &&
    helpScoutConfig &&
    !helpScoutInitiated &&
    helpScoutConfig.enabled
  ) {
    HelpScout.init(
      helpScoutConfig.mappings,
      selectedInstitution.id,
      helpScoutRole,
    );
    HelpScout.identify({
      user: user,
      signatures: helpScoutConfig.signatures,
      role: helpScoutRole,
      institution: selectedInstitution.id,
    });
    setHelpScoutInitiated(true);
  }

  const goToScreen = target => {
    onClickDrawerItem({name: target});
    navigation.toggleDrawer();
    navigation.navigate(target);
  };

  const goToUrl = target => {
    navigation.toggleDrawer();
    navigation.navigate('Webview', {
      url: target,
    });
  };

  return (
    <Layout style={MenuDrawerNavStyles.wrapper}>
      <MenuDrawerNavItem
        title={t('My account')}
        icon="user"
        handleClick={() => {
          goToScreen('MyAccount');
        }}
      />
      {hasFeature(selectedInstitution, 'metrics') && (
        <MenuDrawerNavItem
          title={t('Devices')}
          icon="icon-device"
          handleClick={() => {
            goToScreen('Devices');
          }}
        />
      )}
      {hasFeatureWaffle('helpscoutEnabled') && helpScoutConfig.enabled && (
        <MenuDrawerNavItem
          title={t('Help and support')}
          icon="icon-support"
          handleClick={() => {
            onClickDrawerItem({name: 'Support'});
            HelpScout.open();
          }}
        />
      )}
      <MenuDrawerNavItem
        title={t('Logout')}
        icon="logout"
        handleClick={() => {
          onClickDrawerItem({name: 'Logout'});
          goToUrl(`${Config.WEBVIEW_URL}/logout`);
        }}
      />
    </Layout>
  );
};

export default MenuDrawerNav;

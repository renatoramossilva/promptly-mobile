import React from 'react';
import {BackHandler, Linking, ScrollView, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import StatusBanner from '../common/StatusBanner';
import {UpdateScreenStyles} from './updateScreen.Styles';
import Config from 'react-native-config';

const UpdateScreen = () => {
  const {t} = useTranslation();
  const storeLink =
    Platform.OS === 'android' ? Config.STORE_ANDROID : Config.STORE_IOS;

  BackHandler.addEventListener('hardwareBackPress', () => true);

  const gotoStore = () => {
    Linking.openURL(storeLink);
  };

  const status = {
    image: require('../../images/bg-update-app.png'),
    imageFull: true,
    title: t('New update available'),
    subtitle: t('Please update your app'),
    button: storeLink
      ? {
          label: t('Update'),
          action: gotoStore,
        }
      : null,
  };

  return (
    <ScrollView style={UpdateScreenStyles.container}>
      <StatusBanner status={status} style={UpdateScreenStyles.banner} />
    </ScrollView>
  );
};

export default UpdateScreen;

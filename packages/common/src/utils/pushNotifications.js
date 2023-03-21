import OneSignal from 'react-native-onesignal';
import {Platform} from 'react-native';

class PushNotifications {
  static init = id => {
    OneSignal.setAppId(id);
    OneSignal.setRequiresUserPrivacyConsent(false);

    Platform.OS !== 'android' &&
      OneSignal.promptForPushNotificationsWithUserResponse(() => {
        return true;
      });
  };

  static setNotificationWillShowInForegroundHandler = event => {
    OneSignal.setNotificationWillShowInForegroundHandler(event);
  };
  static setNotificationOpenedHandler = event => {
    OneSignal.setNotificationOpenedHandler(event);
  };
  static addSubscriptionObserver = event => {
    OneSignal.addSubscriptionObserver(event);
  };
  static getDeviceState = () => OneSignal.getDeviceState();
}

export default PushNotifications;

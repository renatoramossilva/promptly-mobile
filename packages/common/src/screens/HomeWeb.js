import React, {Component} from 'react';
import {View, Linking, StatusBar, Platform, AppState} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import Webviewer from 'components/webviewer/Webviewer';
import Config from 'react-native-config';
import PushNotifications from 'utils/pushNotifications';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceId: '',
    };
    this.startURL = '/app/';
    this.navigation = props.navigation;
  }

  async getOneSignalDevice() {
    PushNotifications.addSubscriptionObserver(event => {
      this.setState({deviceId: event.to.userId});
    });
    const deviceState = await PushNotifications.getDeviceState();
    this.setState({
      deviceId: deviceState?.userId,
    });
  }

  async componentDidMount() {
    RNBootSplash.hide({duration: 250});
    StatusBar.setBarStyle('light-content', true);

    Platform.OS !== 'ios' && StatusBar.setBackgroundColor(Config.STATUS_COLOR);

    Linking.getInitialURL().then(url => {
      this.handleOpenURL({
        url,
      });
    });

    this.urlStateEvent = Linking.addEventListener('url', event => {
      this.handleOpenURL(event);
    });

    this.appStateEvent = AppState.addEventListener(
      'change',
      this.handleAppStateChange,
    );
    await this.getOneSignalDevice();
  }

  handleAppStateChange = nextAppState => {
    if (nextAppState === 'background') {
      this.navigation.navigate('WebviewDetached', {
        url: this.startURL,
      });
    }
  };

  componentWillUnmount() {
    this.appStateEvent.remove();
    this.urlStateEvent.remove();
  }

  onIds(device) {
    this.setState({
      deviceId: device.userId,
    });
  }

  handleOpenURL(event) {
    const {url} = event;
    const appDomain = Config.WEBVIEW_HOST;
    const appSchema = Config.APP_SCHEMA;
    const urlSchema = url?.split('://')[0];
    const urlDomain = url?.split('://')[1]?.split('/')[0];
    const exceptionURLs = ['/tle/'];
    const urlIsExeption = exceptionURLs.some(item => url?.includes(item));

    if (
      url &&
      !urlIsExeption &&
      (appDomain === urlDomain || appSchema === urlSchema)
    ) {
      return this.navigation.navigate('WebviewDetached', {
        url: url,
      });
    }
    return url ? Linking.openURL(url) : false;
  }

  render() {
    try {
      const {deviceId} = this.state;
      let webviewUrl = this.props.route.params.url || this.startURL;

      if (webviewUrl.startsWith('/')) {
        webviewUrl = `${Config.WEBVIEW_URL}${webviewUrl}`;
      }

      return (
        <View
          testID="main-container"
          style={{flex: 1, backgroundColor: Config.STATUS_COLOR}}>
          <Webviewer
            url={webviewUrl}
            tabBarVisible={this.props.route.params.tabBarVisible}
            time={new Date()}
            deviceId={deviceId}
            navigation={this.navigation}
            ble={this.props.route.params.ble}
          />
        </View>
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

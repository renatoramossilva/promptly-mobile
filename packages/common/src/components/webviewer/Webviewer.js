import React, {Component} from 'react';
import {BackHandler, ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';
import {connect} from 'react-redux';
import CookieManager from '@react-native-community/cookies';
import AsyncStorage from '@react-native-community/async-storage';
import {Layout} from '@ui-kitten/components';
import {withTranslation} from 'react-i18next';
import {URL} from 'react-native-url-polyfill';
import {createStructuredSelector} from 'reselect';
import {getVersion} from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import {resetSession, setSessionCookies} from 'actions/session';
import {getURLPath, deviceHasNotch, isAndroid} from '../../utils';
import {getSessionCookies} from 'selectors/selected_session';
import StatusBanner from '../common/StatusBanner';
import LoadingScreen from '../common/LoadingScreen';
import {
  NETWORK_UNREACHABLE_REMOTE,
  NETWORK_UNREACHABLE_LOCAL,
} from '../../constants/messages';
import {WebviewerStyles} from './Webviewer.Styles';

class Webviewer extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
    this.canGoBack = false;
    this.internalRedirects = ['/app/devices#', '/app/devices/weight#'];
    this.appSchema = `${Config.APP_SCHEMA}://`;
    this.appVersion = getVersion();
    this.screenHeight = Dimensions.get('window').height - 56;
    this.state = {
      lastReload: false,
      showMenuHeader: false,
      currentUrl: undefined,
      url: undefined,
      time: new Date(),
      webviewState: undefined,
      networkUnreachable: undefined,
      webviewLoading: true,
    };
  }

  async componentDidMount() {
    this.props.navigation.setOptions({
      tabBarVisible: this.props.tabBarVisible || false,
    });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.canGoBack && this.WEBVIEW_REF) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
    return false;
  };

  isInternalRedirect = (url) => {
    const path = getURLPath(url);
    return this.internalRedirects.includes(path) ? true : false;
  };

  getCompleteURI() {
    const {deviceId, url} = this.props;

    const preURI =
      url && url.includes(this.appSchema)
        ? `${Config.WEBVIEW_URL}/app/notifications?uri=${url}`
        : url;

    const joiner = preURI && preURI.includes('?') ? '&' : '?';
    const result = `${preURI}${joiner}device_uid=${deviceId}&t=${this.state.lastReload}`;
    return result;
  }

  checkAndReloadWebview() {
    const urlPath = getURLPath(this.state.webviewState?.url);
    if (urlPath === '/app/') {
      this.setState({
        lastReload: Date.now(),
      });
    }
  }

  checkNetwork() {
    NetInfo.fetch().then(state => {
      const {isConnected} = state;
      if (!isConnected) {
        this.setState({networkUnreachable: 'local'});
      }
    });
  }

  componentDidUpdate(prevProps) {
    this.checkNetwork();
    // compare and set url for force reload
    const currentPath = this.state.currentUrl
      ? new URL(this.state.currentUrl).pathname
      : this.state.currentUrl;
    const urlPath = this.props.url
      ? new URL(this.props.url).pathname
      : this.props.url;

    const timeJoiner = this.props.url.includes(this.appSchema) ? '&t=' : '?t=';

    if (
      urlPath !== undefined &&
      currentPath !== urlPath &&
      this.props.time !== prevProps.time
    ) {
      this.setState({
        url: this.props.url + timeJoiner + this.props.time,
        time: this.props.time,
      });
    }
  }

  handleNativeEvent = (event) => {
    if (event?.nativeEvent?.data === undefined) {
      return;
    }

    const {navigation} = this.props;
    const {action, payload, url} = JSON.parse(event.nativeEvent.data);
    switch (action) {
      // case 'getMeasurement':
      //   if (payload === 'scale') {
      //     navigation.navigate('DevicesInstantWeightReading', {
      //       item: new Device(this.props.devices.scale[0]),
      //     });
      //   } else {
      //     this.syncMeasurements([this.props[payload][0]]);
      //   }
      //   break;
      case 'menu':
        this.setState({
          showMenuHeader: payload === 'showHeader',
          currentUrl: url.href,
        });
        break;
      case 'tabMenu':
        navigation.setOptions({
          tabBarVisible: payload === 'showTabs',
        });
        break;
      case 'navigateTo':
        navigation.navigate(payload || 'Home');
        break;
      default:
        break;
    }
  };

  render() {
    let navigation = this.props.navigation;
    const jsCode = `window.reactnativeapp=true; window.reactnativeappversion='${this.appVersion}'`;

    if (this.state.networkUnreachable) {
      const status = {
        remote: {
          ...NETWORK_UNREACHABLE_REMOTE,
          button: {
            label: 'Retry',
            action: () => {
              this.setState({networkUnreachable: undefined});
            },
          },
        },
        local: {
          ...NETWORK_UNREACHABLE_LOCAL,
          button: {
            label: 'Retry',
            action: () => {
              this.setState({networkUnreachable: undefined});
            },
          },
        },
      };

      return (
        <ScrollView>
          <StatusBanner
            status={status[this.state.networkUnreachable]}
            style={[
              WebviewerStyles.statusContainer,
              {height: this.screenHeight},
            ]}
          />
        </ScrollView>
      );
    }

    return (
      <Layout style={{flex: 1}}>
        {this.state.webviewLoading && (
          <Layout style={{height: this.screenHeight}}>
            <LoadingScreen />
          </Layout>
        )}
        <WebView
          testID="main-webview"
          originWhitelist={['*']}
          onLoad={() => this.setState({webviewLoading: false})}
          onError={() => this.setState({networkUnreachable: 'remote'})}
          sharedCookiesEnabled
          source={{
            uri: this.getCompleteURI(),
          }}
          style={{
            marginTop: deviceHasNotch() ? 33 : 0,
          }}
          ref={this.WEBVIEW_REF}
          injectedJavaScriptBeforeContentLoaded={jsCode}
          injectedJavaScript={jsCode}
          onMessage={(event) => this.handleNativeEvent(event)}
          onNavigationStateChange={(navState) => {
            if (navState.loading) {
              return;
            }
            this.setState({
              webviewState: navState,
            });
            if (getURLPath(navState.url) === '/login') {
              AsyncStorage.clear();
              this.props.resetSession();
            }
            if (getURLPath(navState.url) === '/app/') {
              if (!this.props.cookies || !this.props.cookies.PWAID) {
                if (!isAndroid()) {
                  CookieManager.getAll(true).then((cookies) => {
                    this.props.setSessionCookies(cookies);
                  });
                } else {
                  CookieManager.get(navState.url).then((cookies) => {
                    this.props.setSessionCookies(cookies);
                  });
                }
              } else {
                navigation.navigate('Home');
              }
            }
            if (this.isInternalRedirect(navState.url)) {
              // if (getURLPath(navState.url) === '/app/devices/weight#') {
              //   navigation.navigate('DevicesInstantWeightReading', {
              //     item: new Device(this.props.devices.scale[0]),
              //   });
              // } else 
              if (getURLPath(navState.url) === '/app/devices#') {
                navigation.navigate('Devices');
              }
            } else {
              this.canGoBack = false;
            }
          }}
        />
      </Layout>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  cookies: getSessionCookies,
});

const mapDispatchToProps = {
  resetSession,
  setSessionCookies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Webviewer));

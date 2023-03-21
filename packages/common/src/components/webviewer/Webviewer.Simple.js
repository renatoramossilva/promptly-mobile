import React, {useEffect, useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {Layout} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {getVersion} from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import {getCompleteNotificationsURI} from 'utils';
import StatusBanner from '../common/StatusBanner';
import LoadingScreen from '../common/LoadingScreen';
import {
  NETWORK_UNREACHABLE_REMOTE,
  NETWORK_UNREACHABLE_LOCAL,
} from '../../constants/messages';
import {WebviewerStyles} from './Webviewer.Styles';

const WebviewerSimple = ({route}) => {
  const navigation = useNavigation();
  const {url, headerShown, title} = route.params;
  const appVersion = getVersion();
  const [networkUnreachable, setNetworkUnreachable] = useState();
  const [webviewLoading, setWebviewLoading] = useState(true);
  const screenHeight = Dimensions.get('window').height - 56;

  const handleNativeEvent = event => {
    if (event?.nativeEvent?.data === undefined) {
      return;
    }

    const {action, payload} = JSON.parse(event.nativeEvent.data);
    switch (action) {
      case 'tabMenu':
        navigation.setOptions({
          tabBarVisible: payload === 'showTabs',
        });
        break;
      case 'navigateTo':
        navigation.navigate(payload || 'Home');
        break;
      case 'goBack':
        navigation.goBack();
        break;
      default:
        break;
    }
  };

  const checkNetwork = () => {
    NetInfo.fetch().then(state => {
      const {isConnected} = state;
      if (!isConnected) {
        setNetworkUnreachable('local');
      }
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerShown,
    });
    checkNetwork();
  }, []);

  const jsCode = `window.reactnativeapp=true; window.reactnativeappversion='${appVersion}'`;

  if (networkUnreachable) {
    const status = {
      remote: {
        ...NETWORK_UNREACHABLE_REMOTE,
        button: {
          label: 'Retry',
          action: () => {
            setNetworkUnreachable();
          },
        },
      },
      local: {
        ...NETWORK_UNREACHABLE_LOCAL,
        button: {
          label: 'Retry',
          action: () => {
            setNetworkUnreachable();
          },
        },
      },
    };

    return (
      <ScrollView>
        <StatusBanner
          status={status[networkUnreachable]}
          style={[WebviewerStyles.statusContainer, {height: screenHeight}]}
        />
      </ScrollView>
    );
  }

  return (
    <Layout style={{flex: 1}}>
      {webviewLoading && (
        <Layout style={{height: screenHeight}}>
          <LoadingScreen />
        </Layout>
      )}
      <WebView
        onLoad={() => setWebviewLoading(false)}
        source={{uri: getCompleteNotificationsURI(url)}}
        onMessage={event => handleNativeEvent(event)}
        onError={() => setNetworkUnreachable('remote')}
        injectedJavaScriptBeforeContentLoaded={jsCode}
        injectedJavaScript={jsCode}
      />
    </Layout>
  );
};

export default WebviewerSimple;

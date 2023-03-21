import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {WebView} from 'react-native-webview';
import {getURLPath} from '../../utils';
import {PROVIDER_CONNECTED_SUCCESS} from '../../constants/messages';
import {NavigatorStyles} from '../../navigation/Navigator.Styles';

const ProviderOauth = (props) => {
  const {item} = props.route.params;
  const {url} = item;
  const WEBVIEW_REF = useRef();
  useEffect(() => {
    props.navigation.setOptions({
      title: <Text style={NavigatorStyles.title}>{item.name}</Text>,
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <WebView
        testID="webconnect-webview"
        originWhitelist={['*']}
        sharedCookiesEnabled
        source={{
          uri: url,
        }}
        ref={WEBVIEW_REF}
        onNavigationStateChange={(navState) => {
          if (getURLPath(navState.url) === '/app/account') {
            props.navigation.navigate('Devices', {
              reload: true,
              toast: PROVIDER_CONNECTED_SUCCESS,
            });
          }
        }}
      />
    </View>
  );
};

export default ProviderOauth;

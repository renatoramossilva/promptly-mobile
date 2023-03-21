import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {useTranslation} from 'react-i18next';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Text} from '@ui-kitten/components';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import {createStructuredSelector} from 'reselect';
import AsyncStorage from '@react-native-community/async-storage';
import CookieManager from '@react-native-community/cookies';
import {getVersion} from 'react-native-device-info';
import './i18n';
import rootReducer from './reducers';
import {fetchSessionCookies, setSessionCookies} from 'actions/session';
import {clickNotification} from 'actions/datacollection';
import {getPatientBrandingColor} from 'selectors/selected_patients';
import {
  getSessionCookies,
  getSessionState,
  resetSession,
} from 'selectors/selected_session';
import {isAndroid} from 'utils';
import Axios from 'utils/axios';
import Ble from 'utils/ble';
import {shadedTheme} from 'utils/color';
import PushNotifications from 'utils/pushNotifications';
import {default as mapping} from './mapping.json';
import Devices from './components/devices/Devices';
import DevicesAvailable from './components/devices/Devices.Available';
import ToastMessages from './components/toast/Toast.Messages';
import DevicesConnect from './components/devices/Devices.Connect';
import DevicesInstantWeightReading from './components/devices/Devices.InstantWeightReading';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import WebviewerSimple from './components/webviewer/Webviewer.Simple';
import HomeNavigator from './navigation/Home.Navigator';
import UpdateScreen from './components/updateScreen/updateScreen';
import HomeWeb from './screens/HomeWeb';
import MyAccount from './screens/MyAccount';
import Consents from './screens/Consents';
import {mixpanelMiddleware} from './middleware/mixpanel';
import {NavigatorStyles} from './navigation/Navigator.Styles';
import LoadingScreen from './components/common/LoadingScreen';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk, mixpanelMiddleware())),
);

const ble = new Ble();

const Stack = createStackNavigator();

const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

Sentry.init({
  dsn: Config.SENTRY_DNS,
  environment: Config.SENTRY_ENVIRONMENT,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: [Config.WEBVIEW_HOST, /^\//, /^https:\/\//],
      routingInstrumentation,
    }),
  ],
});

const getTheme = (color) => {
  return {
    ...eva.light,
    ...shadedTheme(color),
  };
};

const BundleHOC = ({
  color,
  cookies,
  fetchSessionCookiesfn,
  doResetSession,
  onClickNotification,
  cookiesLoading,
}) => {
  const [isUpToDate, setIsUpToDate] = useState(true);
  const {t} = useTranslation();
  const themeColor = color || '#0E416C';

  const updateAxiosSetup = (cookiesObj) => {
    const appVersion = getVersion();
    Axios.defaults.headers.common[
      'X-Promptly-Version'
    ] = `mobile-app/${appVersion}`;

    if (cookiesObj && Object.keys(cookiesObj).length !== 0) {
      let cookiesArr = [];
      Object.keys(cookiesObj).forEach(function (cookie) {
        cookiesArr.push(
          `${cookiesObj[cookie].name}=${cookiesObj[cookie].value}`,
        );
      });

      const preCookie = !isAndroid() ? '; ' : '';
      const cookiesStr = preCookie + cookiesArr.join('; ');

      Axios.defaults.headers.common.cookie = cookiesStr;
    }
  };

  const initialAxiosSetup = () => {
    const resetState = () => {
      resetSession();
      AsyncStorage.clear();
      CookieManager.clearAll();
    };

    Axios.interceptors.response.use(
      (response) => response,
      (error) => {
        Sentry.setExtra('error', error);
        Sentry.captureException(error);
        if (error && error.response) {
          switch (error.response.status) {
            case 403:
              resetState();
              break;
            case 401:
              resetState();
              break;
            case 420:
              setIsUpToDate(false);
              break;
            default:
              break;
          }
        }
        return Promise.reject(error);
      },
    );
  };

  const renderRouter = () => {
    if (cookiesLoading !== false) {
      return (
        <Stack.Screen
          name="loadingScreen"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
      );
    }

    return cookies && cookies.PWAID && cookies.csrftoken ? (
      <>
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerShown: false,
            animationTypeForReplace: 'pop',
          }}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="WebviewSimple"
          options={{
            headerShown: false,
            animationTypeForReplace: 'pop',
          }}
          component={WebviewerSimple}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="Webview"
          component={HomeWeb}
          options={{
            headerShown: false,
          }}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="Devices"
          options={{
            title: <Text style={NavigatorStyles.title}>{t('Devices')}</Text>,
            headerTitleAlign: 'center',
          }}
          component={Devices}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="DevicesAvailable"
          options={{
            title: (
              <Text style={NavigatorStyles.title}>
                {t('Available devices')}
              </Text>
            ),
          }}
          component={DevicesAvailable}
        />
        <Stack.Screen
          name="DevicesConnect"
          options={{
            title: (
              <Text style={NavigatorStyles.title}>{t('Connect device')}</Text>
            ),
          }}
          component={DevicesConnect}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="DevicesInstantWeightReading"
          options={{
            title: t('Get readings'),
          }}
          component={DevicesInstantWeightReading}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="MyAccount"
          options={{
            title: <Text style={NavigatorStyles.title}>{t('Account')}</Text>,
          }}
          component={MyAccount}
          initialParams={{ble: ble}}
        />
        <Stack.Screen
          name="Consents"
          options={{
            title: <Text style={NavigatorStyles.title}>{t('Consents')}</Text>,
            headerLeft: null,
            gestureEnabled: false,
          }}
          component={Consents}
        />
      </>
    ) : (
      <Stack.Screen
        name="WebviewDetached"
        component={HomeWeb}
        options={{
          headerShown: false,
        }}
        initialParams={{url: '/login'}}
      />
    );
  };

  const pushNotificationsSetup = () => {
    PushNotifications.init(Config.ONESIGNAL_ID);
    PushNotifications.setNotificationOpenedHandler(event => {
      onClickNotification({
        origin: 'push',
        category: event?.notification?.additionalData?.category,
      });
    });
  };

  useEffect(() => {
    fetchSessionCookiesfn();
    initialAxiosSetup();
    pushNotificationsSetup();
  }, []);

  useEffect(() => {
    updateAxiosSetup(cookies);
  }, [cookies]);

  return (
    <ApplicationProvider
      {...eva}
      theme={getTheme(themeColor)}
      customMapping={mapping}>
      <ErrorBoundary t={t}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: {
                backgroundColor: themeColor,
              },
              headerBackTitleVisible: false,
              headerTintColor: '#fff',
              cardStyle: {backgroundColor: 'white'},
            }}>
            {isUpToDate ? (
              renderRouter()
            ) : (
              <Stack.Screen
                name="UpdateApp"
                options={{
                  headerShown: false,
                  header: null,
                }}
                component={UpdateScreen}
                initialParams={{ble: ble}}
              />
            )}
          </Stack.Navigator>
          <ToastMessages ble={ble} />
        </NavigationContainer>
      </ErrorBoundary>
    </ApplicationProvider>
  );
};

const checkAppVersion = () => {
  Axios.get(
    `${Config.WEBVIEW_SCHEMA}://${Config.WEBVIEW_HOST}/api/client-app-config/check-version`,
  ).catch(function (error) {
    console.log(error);
  });
};

const Router = () => {
  useEffect(() => {
    checkAppVersion();
  }, []);

  return (
    <Provider store={store}>
      <ComposedHoc />
    </Provider>
  );
};

const mapStateToProps = createStructuredSelector({
  color: getPatientBrandingColor,
  cookies: getSessionCookies,
  cookiesLoading: getSessionState,
});

const ComposedHoc = connect(mapStateToProps, {
  fetchSessionCookiesfn: fetchSessionCookies,
  setSessionCookiesfn: setSessionCookies,
  onClickNotification: clickNotification,
  doResetSession: resetSession,
})(BundleHOC);

export default Router;

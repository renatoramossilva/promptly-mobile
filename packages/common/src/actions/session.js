import AsyncStorage from '@react-native-community/async-storage';
import {SESSION_COOKIES, RESET_STATE} from './types';
import Config from 'react-native-config';
import {networkRequest} from 'utils';
import Axios from 'utils/axios';

export const refreshSessionCookies = () => dispatch => {
  const options = {
    method: 'get',
    url: `${Config.WEBVIEW_URL}/me`,
    cache: false,
  };

  let cookiesObj;

  const onlineFn = () => {
    Axios(options).then(response => {
      const pwaidVal = response.headers['set-cookie'][0];
      cookiesObj.PWAID.value = pwaidVal.split('; ')[0].replace('PWAID=', '');

      AsyncStorage.setItem('@cookies', JSON.stringify(cookiesObj)).then(() => {
        dispatch({
          type: SESSION_COOKIES,
          payload: cookiesObj,
        });
      });
    });
  };

  const offlineFn = () => {
    return false;
  };

  AsyncStorage.getItem('@cookies').then(data => {
    cookiesObj = JSON.parse(data);
    networkRequest(onlineFn, offlineFn);
  });
};

export const setSessionCookies = data => dispatch => {
  AsyncStorage.setItem('@cookies', JSON.stringify(data)).then(() => {
    dispatch({
      type: SESSION_COOKIES,
      payload: data,
    });
  });
};

export const resetSession = () => ({
  type: RESET_STATE,
});

export const fetchSessionCookies = () => dispatch => {
  AsyncStorage.getItem('@cookies').then(data => {
    dispatch({
      type: SESSION_COOKIES,
      payload: JSON.parse(data) || {},
    });
  });
};

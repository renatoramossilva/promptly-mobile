import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {networkRequest} from '../utils/';
import {FETCH_NOTIFICATIONS, LOADING_NOTIFICATIONS, ADD_TOAST} from './types';
import {SERVER_ERROR, CONNECTION_ERROR} from '../constants/messages';
import {
  NOTIFICATIONS_OPEN_URL,
  NOTIFICATIONS_URL,
} from 'selectors/selected_api';

export const fetchNotifications = () => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: NOTIFICATIONS_URL,
      cancelToken: new CancelToken((func) => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then((response) => {
          const data = response.data;
          if (data && Array.isArray(data)) {
            AsyncStorage.setItem('@notifications', JSON.stringify(data))
              .then(() => dispatch(fetchNotificationsSuccess(data)))
              .catch(() => fetchNotificationsFallBack(dispatch, true));
          } else {
            fetchNotificationsFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchNotificationsFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchNotificationsFallBack(dispatch, false);
    };

    dispatch({
      type: LOADING_NOTIFICATIONS,
    });
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchNotificationsFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@notifications')
    .then((result) => {
      if (result !== null) {
        dispatch(fetchNotificationsSuccess(JSON.parse(result)));
      } else if (isConnected) {
        dispatch(noResultsAvailable);
      } else {
        dispatch(noInternetConnection);
      }
    })
    .catch(() => {
      dispatch(noResultsAvailable);
    });
};

const fetchNotificationsSuccess = (response) => ({
  type: FETCH_NOTIFICATIONS,
  payload: response,
});

const noResultsAvailable = {
  type: ADD_TOAST,
  payload: SERVER_ERROR,
};

const noInternetConnection = {
  type: ADD_TOAST,
  payload: CONNECTION_ERROR,
};

export const markNotificationsAsOpen = (ids) => (dispatch) => {
  return Axios.put(NOTIFICATIONS_OPEN_URL, {ids})
    .then((data) => data)
    .catch(() => {
      dispatch({
        type: ADD_TOAST,
        payload: SERVER_ERROR,
      });
    });
};

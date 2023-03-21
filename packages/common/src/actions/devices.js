import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {networkRequest} from '../utils/';
import {QUERY_DEVICES, FETCH_DEVICES, ADD_TOAST} from './types';
import {
  SERVER_ERROR,
  CONNECTION_ERROR,
  PROVIDER_DISCONNECTED_SUCCESS,
} from '../constants/messages';

export const fetchDevices = (url) => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: url,
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
          if (data && Array.isArray(data) && Object.keys(data).length > 0) {
            AsyncStorage.setItem('@devices', JSON.stringify(data))
              .then(() => fetchDevicesSuccess(dispatch, data))
              .catch(() => fetchDevicesFallBack(dispatch, true));
          } else {
            fetchDevicesFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchDevicesFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchDevicesFallBack(dispatch, false);
    };

    dispatch({type: QUERY_DEVICES});
    networkRequest(onlineFn, offlineFn);
  };
};

const fetchDevicesFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@devices')
    .then((result) => {
      if (result !== null) {
        fetchDevicesSuccess(dispatch, JSON.parse(result));
      } else if (isConnected) {
        noResultsAvailable(dispatch);
      } else {
        noInternetConnection(dispatch);
      }
    })
    .catch(() => {
      return noResultsAvailable(dispatch);
    });
};

const fetchDevicesSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_DEVICES,
    payload: response,
  });
};

const noResultsAvailable = (dispatch) => {
  dispatch({
    type: ADD_TOAST,
    payload: SERVER_ERROR,
  });
};

const noInternetConnection = (dispatch) => {
  dispatch({
    type: ADD_TOAST,
    payload: CONNECTION_ERROR,
  });
};

export const disconnectProvider = (url) => (dispatch) =>
  Axios.delete(url)
    .then((response) => {
      dispatch({
        type: ADD_TOAST,
        payload: PROVIDER_DISCONNECTED_SUCCESS,
      });
      return response;
    })
    .catch(() => {
      dispatch({
        type: ADD_TOAST,
        payload: SERVER_ERROR,
      });
    });

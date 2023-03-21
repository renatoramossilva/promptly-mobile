import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import WebAppApi from '../api/webapp';
import {networkRequest} from '../utils/';
import {
  FETCH_USER_DATA,
  FETCH_PATIENT_DATA,
  FETCH_ALL_USER_DATA_FROM_HEALTH_SPACES,
  ADD_TOAST,
  SELECT_PATIENT_INSTITUTION,
  ENHANCE_HEALTH_SPACE_DATA,
  SET_PATIENT_INSTITUTIONS,
  SET_HEALTH_SPACE,
  CHANGE_REGIONAL_PREF,
  MEASUREMENTS_JWT,
  USER_UPDATE_DATA_BEGINS,
  USER_UPDATE_DATA_SUCCESS,
  USER_UPDATE_DATA_ERROR,
  USER_AVATAR_CHANGE,
} from './types';
import {
  SERVER_ERROR,
  CONNECTION_ERROR,
  SERVER_ACTION_SUCCESS_UPDATE,
  SUCCESS_UPLOAD_USER_AVATAR,
  ERROR_UPLOAD_USER_AVATAR,
  UPLOAD_USER_AVATAR_CONNECTION_ERROR,
} from '../constants/messages';
import {getUserUpdateURL} from '../selectors/selected_user';
import {getUserAvatarURL} from '../selectors/selected_api';

export const fetchUser = () => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `${Config.WEBVIEW_URL}/me`,
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
          const {data} = response;
          if (data && data.user !== undefined) {
            AsyncStorage.setItem('@user', JSON.stringify(data))
              .then(() => fetchUserSuccess(dispatch, data))
              .catch(() => fetchUserFallBack(dispatch, true));
          } else {
            fetchUserFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchUserFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchUserFallBack(dispatch, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchUserFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@user')
    .then((result) => {
      if (result !== null) {
        fetchUserSuccess(dispatch, JSON.parse(result));
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

const fetchUserSuccess = (dispatch, data) => {
  dispatch({
    type: FETCH_USER_DATA,
    payload: {
      ...data.user,
      notifications: data.notifications,
      health_spaces: [...data.user.health_spaces],
      helpscout: data.help_scout,
    },
  });

  const {language, timezone} = data.user.preferences.regional;

  dispatch({
    type: CHANGE_REGIONAL_PREF,
    payload: {
      language,
      timeZone: timezone,
    },
  });
};

const userUpdateBegins = () => ({
  type: USER_UPDATE_DATA_BEGINS,
});

const addToastAction = (type) => ({
  type: ADD_TOAST,
  payload: type,
});

const addUserUpdateDataErrorAction = (type) => ({
  type: USER_UPDATE_DATA_ERROR,
  payload: type,
});

export const updateUserData = (user) => async (dispatch, getState) => {
  const url = getUserUpdateURL(getState());
  dispatch(userUpdateBegins());
  return Axios.patch(url, user)
    .then((response) => {
      dispatch(addToastAction(SERVER_ACTION_SUCCESS_UPDATE));
      dispatch({
        type: USER_UPDATE_DATA_SUCCESS,
        payload: response.data,
      });
      return response;
    })
    .catch((error) => {
      dispatch(addToastAction(SERVER_ERROR));
      if (error.response.status === 400) {
        dispatch(addUserUpdateDataErrorAction(error.response.data || {}));
      } else {
        dispatch(addUserUpdateDataErrorAction({}));
      }
      return error.response;
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

export const setInstitutionPatient = (institutionID) => (dispatch) => {
  dispatch({
    type: SELECT_PATIENT_INSTITUTION,
    payload: institutionID,
  });
};

export const fetchAllUserDataFromHealthSpaces = (healthSpaces) => async (
  dispatch,
) => {
  const response = await Promise.all(
    healthSpaces.map((hs) => fetchHealthSpaceUserData(hs)(dispatch)),
  );
  dispatch({
    type: FETCH_ALL_USER_DATA_FROM_HEALTH_SPACES,
    payload: response,
  });
};

export const fetchHealthSpaceUserData = (healthSpace) => async (dispatch) => {
  const {
    data: {patient},
  } = await WebAppApi.fetchHealthSpaceMe(healthSpace);

  if (patient) {
    const {
      data: {data: institutions},
    } = await WebAppApi.fetchHealthSpaceInstitutions(healthSpace, patient);

    const userData = {
      healthSpace,
      patient,
      institutions,
    };

    dispatch({
      type: ENHANCE_HEALTH_SPACE_DATA,
      payload: userData,
    });

    return userData;
  }
};

export const setHealthSpace = (healthSpace, institutionId = null) => (
  dispatch,
) => {
  // update selected patient
  dispatch({
    type: FETCH_PATIENT_DATA,
    payload: healthSpace.patient,
  });

  // set institutions that belongs to patient in health space
  dispatch({
    type: SET_PATIENT_INSTITUTIONS,
    payload: {
      institutions: healthSpace.institutions,
      selected:
        healthSpace.institutions.find((i) => i.id === institutionId) ||
        healthSpace.institutions[0],
    },
  });

  // set current measurament url
  const {measurements} = healthSpace.patient || {};
  dispatch({
    type: MEASUREMENTS_JWT,
    payload: {
      url: measurements ? measurements.url : undefined,
      jwt: measurements ? measurements.jwt : undefined,
      renew: measurements ? measurements.renew_jwt_url : undefined,
    },
  });

  // select currrent health space
  dispatch({
    type: SET_HEALTH_SPACE,
    payload: healthSpace,
  });
};

export const uploadUserAvatar = (data) => (dispatch, getState) => {
  let cancelRequest;
  const onlineFn = () => {
    const timeout = setTimeout(
      () => cancelRequest(),
      parseInt(Config.WS_TIMEOUT, 10),
    );

    const URL = getUserAvatarURL(getState());

    return Axios.post(URL, data)
      .then((response) => {
        // dispach change user profile image with new one
        dispatch({
          type: USER_AVATAR_CHANGE,
          payload: response.data.avatar_url,
        });
        // dispach success toast
        dispatch({
          type: ADD_TOAST,
          payload: SUCCESS_UPLOAD_USER_AVATAR,
        });
        return response;
      })
      .catch((request) => {
        // dispach error toast
        dispatch({
          type: ADD_TOAST,
          payload: ERROR_UPLOAD_USER_AVATAR,
        });
        return request.response;
      })
      .finally(() => clearTimeout(timeout));
  };

  const offlineFn = () => {
    dispatch({
      type: ADD_TOAST,
      payload: UPLOAD_USER_AVATAR_CONNECTION_ERROR,
    });
  };

  return networkRequest(onlineFn, offlineFn);
};

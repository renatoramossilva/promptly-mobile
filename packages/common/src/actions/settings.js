import Axios, {setDefaultHeaderCommon} from 'utils/axios';
import * as Sentry from '@sentry/react-native';
import {languages} from '../constants/languages';
import {
  DOWNLOAD_CLINICAL_TRIAL,
  SERVER_ACTION_SUCCESS_UPDATE,
  SERVER_ERROR,
} from '../constants/messages';
import {timezoneOptions} from '../constants/preferences';
import i18n from '../i18n/index';
import {
  ADD_TOAST,
  CHANGE_REGIONAL_PREF,
  FETCH_CLINICALTRIALS_SUCCESS,
  FETCH_LANGUAGE_OPTIONS_SUCCESS,
  FETCH_TIMEZONE_OPTIONS_SUCCESS,
  UPDATE_CLINICALTRIALS_SUCCESS,
} from './types';
import {getPreferencesURL} from 'selectors/selected_api';

export const fetchClinicalTrialsBaseAction = (payload) => ({
  type: FETCH_CLINICALTRIALS_SUCCESS,
  payload,
});

export const fetchClinicalTrials = (puid) => (dispatch) =>
  Axios.get(`/api/terms/patients/${puid}/clinical-trials`)
    .then((response) => {
      dispatch(fetchClinicalTrialsBaseAction(response.data));
      return response;
    })
    .catch((e) => {
      dispatch({
        type: ADD_TOAST,
        payload: SERVER_ERROR,
      });
      return e.response;
    });

export const updateClinicalTrials = (url, agreed) => (dispatch) =>
  Axios.put(url, {agreed})
    .then((response) => {
      dispatch({
        type: UPDATE_CLINICALTRIALS_SUCCESS,
        payload: response.data.results,
      });
    })
    .catch((e) => {
      dispatch({
        type: ADD_TOAST,
        payload: SERVER_ERROR,
      });
    });

export const exportClinicalTrial = () => (dispatch) => {
  dispatch({
    type: ADD_TOAST,
    payload: DOWNLOAD_CLINICAL_TRIAL,
  });
};

export const fetchTimeZoneOptions = () => ({
  type: FETCH_TIMEZONE_OPTIONS_SUCCESS,
  payload: timezoneOptions,
});

export const fetchLanguageOptionsAction = () => ({
  type: FETCH_LANGUAGE_OPTIONS_SUCCESS,
  payload: {languages},
});

const addToastAction = (message) => ({
  type: ADD_TOAST,
  payload: message,
});

const changeRegionalPreferencesAction = (language, timeZone) => ({
  type: CHANGE_REGIONAL_PREF,
  payload: {
    language,
    timeZone,
  },
});

export const changeRegionalPreferences = (language, timezone) => (
  dispatch,
  getState,
) => {
  // send to server
  const data = {
    regional: {
      language,
      timezone,
    },
  };

  const url = getPreferencesURL(getState());

  return Axios.patch(url, data)
    .then((response) => {
      // try apply language to i18n
      try {
        setDefaultHeaderCommon('Accept-Language', language.toLowerCase());
        i18n.getAndChangeLanguage(language);
      } catch (e) {
        Sentry.setExtra('error', e);
        Sentry.captureException(e);
      }

      dispatch(changeRegionalPreferencesAction(language, timezone));

      setTimeout(() => {
        dispatch(addToastAction(SERVER_ACTION_SUCCESS_UPDATE));
      }, 100);
      return response;
    })
    .catch((response) => {
      dispatch(addToastAction(SERVER_ERROR));
      return response;
    });
};

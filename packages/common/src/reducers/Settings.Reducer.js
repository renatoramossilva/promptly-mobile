import {moment} from 'utils/dates';
import {
  CHANGE_REGIONAL_PREF,
  FETCH_CLINICALTRIALS_SUCCESS,
  FETCH_LANGUAGE_OPTIONS_SUCCESS,
  FETCH_TIMEZONE_OPTIONS_SUCCESS,
  UPDATE_CLINICALTRIALS_SUCCESS,
  RESET_STATE,
} from '../actions/types';

export const INITIAL_STATE = {
  notifications: {},
  regional: {
    timeZone: '',
    language: undefined,
  },
  languageOptions: [],
  timeZoneOptions: [],
  loading: false,
  errors: {},
  lastStatusRequest: undefined,
  clinicalTrials: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_REGIONAL_PREF: {
      const {language, timeZone} = action.payload;

      moment.locale(language);
      const {L: localeDateFormat} = moment.localeData()._longDateFormat;

      return {
        ...state,
        regional: {
          ...state.regional,
          language: language || state.regional.language,
          timeZone: timeZone || state.regional.timeZone,
          dateFormat: localeDateFormat,
        },
      };
    }

    case FETCH_CLINICALTRIALS_SUCCESS:
      return {
        ...state,
        clinicalTrials: action.payload,
      };

    case UPDATE_CLINICALTRIALS_SUCCESS:
      return {
        ...state,
        clinicalTrials: action.payload,
      };

    case FETCH_LANGUAGE_OPTIONS_SUCCESS:
      const {languages} = action.payload;
      return {
        ...state,
        languageOptions: languages,
        lastStatusRequest: 200,
      };

    case FETCH_TIMEZONE_OPTIONS_SUCCESS:
      return {
        ...state,
        timeZoneOptions: action.payload,
        lastStatusRequest: 200,
      };

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

import {
  FETCH_USER_DATA,
  SET_HEALTH_SPACE,
  ENHANCE_HEALTH_SPACE_DATA,
  USER_UPDATE_DATA_SUCCESS,
  USER_UPDATE_DATA_ERROR,
  USER_AVATAR_CHANGE,
  RESET_STATE,
} from '../actions/types';
import {getShortName, isAndroid} from '../utils';
import HealthSpace from '../models/HealthSpace';

export const INITIAL_STATE = {
  uuid: '',
  email: '',
  phone: '',
  phoneCountry: '',
  is_active: false,
  dateJoined: undefined,
  privateData: {},
  shortName: '',
  role: undefined,
  errors: {},
  lastStatusRequest: undefined,
  healthSpaces: [],
  loading: false,
  tours: {},
  preferences: {},
  helpscout: {mappings: {}, signatures: {}, enabled: true},
  settings: {},
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case FETCH_USER_DATA:
      const {
        health_spaces: healthSpaces = [],
        uuid,
        email,
        phone,
        phone_country,
        is_active,
        date_joined,
        private_data,
        tours,
        preferences,
        helpscout,
      } = payload;

      return {
        ...state,
        uuid,
        email,
        phone,
        phoneCountry: phone_country,
        isActive: is_active,
        dateJoined: date_joined,
        privateData: private_data,
        tours,
        preferences,
        healthSpaces: healthSpaces.map((hs) => new HealthSpace(hs)),
        shortName: getShortName(payload.private_data.name),
        helpscout: {
          mappings: helpscout?.mappings || {},
          signatures: helpscout?.signatures || {},
          enabled: !(isAndroid() && !email),
        },
        settings: {
          ...state.settings,
          regional: {
            ...state.regional,
            language: preferences?.regional?.language,
            timeZone: preferences?.regional?.timezone,
          },
        },
      };

    case USER_UPDATE_DATA_SUCCESS: {
      const {
        email: newEmail,
        phone: newPhone,
        phone_country: newPhoneCountry,
        preferences: newPreferences,
        private_data: newPrivateData,
      } = payload;

      return {
        ...state,
        privateData: newPrivateData,
        shortName: getShortName(newPrivateData.name),
        loading: false,
        errors: {},
        lastStatusRequest: 200,
        email: newEmail,
        phone: newPhone,
        phoneCountry: newPhoneCountry,
        preferences: newPreferences,
      };
    }

    case USER_UPDATE_DATA_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
        lastStatusRequest: 400,
      };

    case USER_AVATAR_CHANGE:
      return {
        ...state,
        privateData: {
          ...state.privateData,
          avatar_url: payload,
        },
      };

    case SET_HEALTH_SPACE: {
      const selected = state.healthSpaces.find(
        (hs) => hs.url === action.payload.url,
      );
      if (!selected) {
        return state;
      }

      return {
        ...state,
        selectedHealthSpace: selected,
      };
    }

    case ENHANCE_HEALTH_SPACE_DATA: {
      const {healthSpace, patient, institutions} = action.payload;
      return {
        ...state,
        healthSpaces: (state.healthSpaces || []).map((hs) => {
          if (hs.url === healthSpace.url) {
            return {
              ...hs,
              patient,
              institutions,
            };
          }
          return hs;
        }),
      };
    }

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

import {
  FETCH_NOTIFICATIONS,
  LOADING_NOTIFICATIONS,
  RESET_STATE,
} from '../actions/types';

const INITIAL_STATE = {
  error: '',
  loading: true,
  result: '',
};

export default function (state = null, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...INITIAL_STATE,
        result: payload,
        loading: false,
      };

    case LOADING_NOTIFICATIONS:
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

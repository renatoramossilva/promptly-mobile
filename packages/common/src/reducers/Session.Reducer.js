import {SESSION_COOKIES, RESET_STATE} from '../actions/types';

export const INITIAL_STATE = {
  loading: true,
  cookies: undefined,
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;

  switch (type) {
    case SESSION_COOKIES: {
      return {
        ...state,
        loading: false,
        cookies: payload,
      };
    }

    case RESET_STATE: {
      return {
        ...INITIAL_STATE,
        loading: false,
      };
    }

    default:
      return state;
  }
}

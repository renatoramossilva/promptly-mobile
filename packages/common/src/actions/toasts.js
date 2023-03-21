import {ADD_TOAST} from './types';

export const showToast = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TOAST,
      payload: payload,
    });
  };
};

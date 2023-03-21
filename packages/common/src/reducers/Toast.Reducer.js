import {ADD_TOAST} from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case ADD_TOAST:
      return {...action.payload} || state;

    default:
      return state;
  }
}

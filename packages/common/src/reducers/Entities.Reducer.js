import {
  FETCH_GEOLOCATIONS,
  FETCH_INSURANCES_SUCCESS,
  RESET_STATE,
} from '../actions/types';

export const INITIAL_STATE = {
  insurances: {
    items: [],
  },
  nationalities: [],
  countries: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INSURANCES_SUCCESS:
      return {
        ...state,
        insurances: {
          items: action.payload,
        },
      };

    case FETCH_GEOLOCATIONS: {
      const {geoLocations} = action.payload;
      return {
        ...state,
        nationalities: geoLocations.reduce((p, n) => {
          p.push({
            value: n.iso,
            label: n.nationality,
          });
          return p;
        }, []),
        countries: geoLocations.reduce((p, n) => {
          p.push({
            value: n.iso,
            label: n.name,
          });
          return p;
        }, []),
      };
    }

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

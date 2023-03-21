import {
  FETCH_INSURANCES_SUCCESS,
  FETCH_GEOLOCATIONS,
  RESET_STATE,
} from 'actions/types';
import reducer, {INITIAL_STATE} from '../Entities.Reducer';

const START_STATE = {
  insurances: {
    items: [],
  },
  nationalities: ['portuguese', 'french'],
  countries: ['portugal', 'france'],
};

describe('user can fetch insurance data', () => {
  const payload = [{id: 1, name: 'Multicare'}];

  it('gets insurance options', () => {
    const state = reducer(INITIAL_STATE, {
      type: FETCH_INSURANCES_SUCCESS,
      payload,
    });

    expect(state.insurances).toEqual({
      items: payload,
    });
  });

  it('gets geo locations', () => {
    const state = reducer(INITIAL_STATE, {
      type: FETCH_GEOLOCATIONS,
      payload: {
        geoLocations: [
          {
            iso: 'pt',
            name: 'Portugal',
            nationality: 'Portuguese',
          },
        ],
      },
    });

    expect(state).toEqual({
      ...state,
      nationalities: [{value: 'pt', label: 'Portuguese'}],
      countries: [{value: 'pt', label: 'Portugal'}],
    });
  });
});

describe('app is reset', () => {
  it('reset entities', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});

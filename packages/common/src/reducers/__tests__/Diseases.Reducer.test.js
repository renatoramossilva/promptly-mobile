import {
  FETCH_DISEASES,
  FETCH_DISEASE_BY_ID,
  FETCH_READINGS_RANGES,
  RESET_STATE,
} from 'actions/types';
import {START_STATE} from '../../__mocks__/diseases';
import reducer, {INITIAL_STATE} from '../Diseases.Reducer';

describe('diseases reducer', () => {
  it('default state', () => {
    expect(
      reducer(null, {
        type: undefined,
        payload: {},
      }),
    ).toEqual(null);
  });

  it('fetch diseases for user', () => {
    expect(
      reducer(null, {
        type: FETCH_DISEASES,
        payload: START_STATE,
      }),
    ).toEqual({
      items: START_STATE,
      treatmentsOptions: [],
      selectedTreatmentEvents: [],
      selectedEvents: [],
    });
  });

  it('fetch disease by id for user', () => {
    expect(
      reducer(null, {
        type: FETCH_DISEASE_BY_ID,
        payload: {
          pdisease: START_STATE[0],
          update: false,
        },
      }),
    ).toEqual({
      items: [START_STATE[0]],
      selected: START_STATE[0],
      treatmentsOptions: [],
      selectedTreatmentEvents: [],
      selectedEvents: [],
    });
  });

  it('fetch readings ranges', () => {
    expect(
      reducer(null, {
        type: FETCH_READINGS_RANGES,
        payload: [
          {
            title: 'some range',
          },
        ],
      }),
    ).toEqual({
      ranges: [
        {
          title: 'some range',
        },
      ],
    });
  });

  it('reset diseases', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});

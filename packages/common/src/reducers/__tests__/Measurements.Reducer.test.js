import '../../__mocks__/global';
import {
  FETCH_MEASUREMENTS,
  MEASUREMENTS_JWT,
  FETCH_ALL_READINGS,
  FETCH_TIMELINE,
  RESET_STATE,
} from 'actions/types';
import {
  measurements,
  allReadings,
  timelineReadings,
  storedMeasurements,
} from '../../__mocks__/measurements';
import reducer, {INITIAL_STATE} from '../Measurements.Reducer';
import {GLUCOSE_CATEGORY} from '../../constants/metrics';

describe('Test Measurements reducer', () => {
  it('create Dashboard Measurments', () => {
    const {items} = reducer(INITIAL_STATE, {
      type: FETCH_MEASUREMENTS,
      payload: [measurements[0]],
    }).dashboard;

    expect(items[0].category).toBe('15074-8');
    expect(items[0].display).toBe('{0}%');
    expect(items[0].readOnly).toBe(false);
    expect(items[0].reading).toBe('5.38%');
    expect(items[0].slug).toBe('glucose');
    expect(items[0].description).toBe('Last Reading');
    expect(items[0].scale).toEqual(undefined);
    expect(items[0].unit).toBe('HbA1C');
    expect(items[0].values).toEqual([5.38]);
    expect(items[0].url).toBe('localhost:8000/promiot/measurements/15074-8');
  });

  it('should get a jwt token', () => {
    const payload = {
      jwt: 1234,
      url: '/test/url',
      renew: '/test/url/renew',
    };
    const {auth} = reducer(INITIAL_STATE, {
      type: MEASUREMENTS_JWT,
      payload,
    });

    expect(auth).toEqual({
      JWT: 1234,
      URL: '/test/url',
      RENEW: '/test/url/renew',
    });
  });

  it('Fetch all measurements', () => {
    const result = reducer(INITIAL_STATE, {
      type: FETCH_ALL_READINGS,
      payload: {
        data: {results: [allReadings.results[0]]},
        code: GLUCOSE_CATEGORY,
      },
    }).readings;

    expect(result[GLUCOSE_CATEGORY].items[0].category).toBe('glucose-pre-meal');
    expect(result[GLUCOSE_CATEGORY].items[0].value).toBe('40');
    expect(result[GLUCOSE_CATEGORY].items[0].date).toBe(
      '2021-09-01T09:38:15.085000Z',
    );
  });

  it('Fetch timeline measurements', () => {
    const result = reducer(INITIAL_STATE, {
      type: FETCH_TIMELINE,
      payload: {
        data: {results: [timelineReadings.results[0]]},
        category: GLUCOSE_CATEGORY,
      },
    }).timelines;

    expect(result[GLUCOSE_CATEGORY].items[0].category).toBe('glucose-pre-meal');
    expect(result[GLUCOSE_CATEGORY].items[0].value).toBe('40');
    expect(result[GLUCOSE_CATEGORY].items[0].color).toBe('#CA1930');
    expect(result[GLUCOSE_CATEGORY].items[0].date).toBe(
      '2021-09-01T09:38:15.085000Z',
    );
  });

  it('reset measurements', () => {
    const state = reducer(storedMeasurements, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});

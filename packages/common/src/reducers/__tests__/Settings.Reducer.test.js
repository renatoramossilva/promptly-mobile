import {
  CHANGE_REGIONAL_PREF,
  FETCH_CLINICALTRIALS_SUCCESS,
  UPDATE_CLINICALTRIALS_SUCCESS,
  RESET_STATE,
} from 'actions/types';
import reducer, {INITIAL_STATE} from '../Settings.Reducer';

const START_STATE = {
  notifications: {},
  regional: {
    timeZone: 'US/Arizona',
    language: 'en',
  },
  languageOptions: [],
  timeZoneOptions: [],
  loading: false,
  errors: {},
  lastStatusRequest: undefined,
  clinicalTrials: [],
};

describe('user can change regional settings', () => {
  it('Changes timeZone and language', () => {
    const state = reducer(START_STATE, {
      type: CHANGE_REGIONAL_PREF,
      payload: {
        language: 'pt',
        timeZone: 'Europe/Lisbon',
      },
    });

    expect(state.regional).toEqual({
      dateFormat: 'DD/MM/YYYY',
      language: 'pt',
      timeZone: 'Europe/Lisbon',
    });
  });

  it('Changes only language', () => {
    const state = reducer(START_STATE, {
      type: CHANGE_REGIONAL_PREF,
      payload: {
        language: 'pt',
      },
    });

    expect(state.regional).toEqual({
      dateFormat: 'DD/MM/YYYY',
      language: 'pt',
      timeZone: 'US/Arizona',
    });
  });

  it('Changes only timeZone and keep current language', () => {
    const state = reducer(START_STATE, {
      type: CHANGE_REGIONAL_PREF,
      payload: {
        language: 'pt',
      },
    });

    expect(state.regional).toEqual({
      dateFormat: 'DD/MM/YYYY',
      language: 'pt',
      timeZone: 'US/Arizona',
    });

    const newState = reducer(state, {
      type: CHANGE_REGIONAL_PREF,
      payload: {
        timeZone: 'Europe/Lisbon',
      },
    });

    expect(newState.regional).toEqual({
      dateFormat: 'DD/MM/YYYY',
      language: 'pt',
      timeZone: 'Europe/Lisbon',
    });
  });
});

describe('tests fetch clinical trials', () => {
  it('Should get clinical trials', () => {
    const state = reducer(START_STATE, {
      type: FETCH_CLINICALTRIALS_SUCCESS,
      payload: {
        id: 1,
        display: 'CUF Value Based Healthcare - Cataract',
        patient_disease: {},
        agreed: true,
        agreed_at: '2021-08-31T13:16:44.043609Z',
        refused_at: null,
      },
    });

    expect(state.clinicalTrials).toEqual({
      id: 1,
      display: 'CUF Value Based Healthcare - Cataract',
      patient_disease: {},
      agreed: true,
      agreed_at: '2021-08-31T13:16:44.043609Z',
      refused_at: null,
    });
  });

  it('Should update clinical trials', () => {
    const state = reducer(START_STATE, {
      type: UPDATE_CLINICALTRIALS_SUCCESS,
      payload: {
        id: 1,
        display: 'CUF Value Based Healthcare - Cataract',
        patient_disease: {},
        agreed: true,
        agreed_at: '2021-08-31T13:16:44.043609Z',
        refused_at: null,
      },
    });

    expect(state.clinicalTrials).toEqual({
      id: 1,
      display: 'CUF Value Based Healthcare - Cataract',
      patient_disease: {},
      agreed: true,
      agreed_at: '2021-08-31T13:16:44.043609Z',
      refused_at: null,
    });
  });
});

describe('app is reset', () => {
  it('reset settings', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});

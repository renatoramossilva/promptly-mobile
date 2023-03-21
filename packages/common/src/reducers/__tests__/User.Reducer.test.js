import '../../__mocks__/global';
import {
  FETCH_USER_DATA,
  ENHANCE_HEALTH_SPACE_DATA,
  SET_HEALTH_SPACE,
  USER_UPDATE_DATA_SUCCESS,
  USER_UPDATE_DATA_ERROR,
  RESET_STATE,
} from 'actions/types';
import reducer, {INITIAL_STATE} from '../User.Reducer';

const payload = {
  uuid: 'c3d8525e-fa05-46e2-9a04-69041a160b4f',
  email: 'type-2-diabetes-cuf@email.com',
  phone: null,
  phone_country: 'pt',
  is_active: true,
  date_joined: '2021-02-02T10:19:49.319918Z',
  private_data: {
    avatar_url: '',
    name: 'Paciente Diabetes',
    gender: 'M',
    birthdate: '1992-08-25',
    country: '',
    state: '',
    city: '',
    nationality: 'pt',
    national_id: 'nid123456789',
    nhs_id: '123abc456def',
    vat_number: '',
    complementary_info: {},
    caregiver: {},
  },
  preferences: {
    regional: {
      language: 'pt',
      timezone: 'Europe/Lisbon',
    },
    notifications: {},
  },
  tours: {
    list: 'https://127.0.0.1:8000/api/tours',
    update:
      'https://127.0.0.1:8000/users/c3d8525e-fa05-46e2-9a04-69041a160b4f/tours',
    user_state: {
      'first-disease': {
        steps: ['step1', 'step2'],
        status: 'skiped',
      },
      'patient-dashboard': {
        steps: ['step1'],
        status: 'completed',
      },
    },
  },
  helpscout: {mappings: {}, signatures: {}},
};

const START_STATE = {
  loading: false,
  errors: {},
  lastStatusRequest: undefined,
  uuid: 'c3d8525e-fa05-46e2-9a04-69041a160b4f',
  email: 'type-2-diabetes-cuf@email.com',
  phone: null,
  phoneCountry: 'pt',
  isActive: true,
  dateJoined: '2021-02-02T10:19:49.319918Z',
  shortName: 'Paciente Diabetes',
  role: undefined,
  privateData: {
    avatar_url: '',
    name: 'Paciente Diabetes',
    gender: 'M',
    birthdate: '1992-08-25',
    country: '',
    state: '',
    city: '',
    nationality: 'pt',
    national_id: 'nid123456789',
    nhs_id: '123abc456def',
    vat_number: '',
    complementary_info: {},
    caregiver: {},
  },
  preferences: {
    regional: {
      language: 'pt',
      timezone: 'Europe/Lisbon',
    },
    notifications: {},
  },
  healthSpaces: [],
  tours: {
    list: 'https://127.0.0.1:8000/api/tours',
    update:
      'https://127.0.0.1:8000/users/c3d8525e-fa05-46e2-9a04-69041a160b4f/tours',
    user_state: {
      'first-disease': {
        steps: ['step1', 'step2'],
        status: 'skiped',
      },
      'patient-dashboard': {
        steps: ['step1'],
        status: 'completed',
      },
    },
  },
  helpscout: {mappings: {}, signatures: {}, enabled: true},
  settings: {
    regional: {
      language: 'pt',
      timeZone: 'Europe/Lisbon',
    },
  },
};

describe('user reducer', () => {
  it('fetch user data in list', () => {
    expect(
      reducer(START_STATE, {
        type: FETCH_USER_DATA,
        payload,
      }),
    ).toEqual(START_STATE);
  });

  it('reset user', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual(INITIAL_STATE);
  });
});

describe('User health spaces tests suite', () => {
  test('if is possible to store health space information for user', () => {
    const data = {
      healthSpace: {
        url: 'my.domain',
      },
      patient: {
        name: 'Manel',
      },
      institutions: [{name: 'cuf'}],
    };

    const state = reducer(
      {healthSpaces: [data.healthSpace]},
      {
        type: ENHANCE_HEALTH_SPACE_DATA,
        payload: data,
      },
    );

    expect(state.healthSpaces).toEqual([
      {
        ...data.healthSpace,
        patient: data.patient,
        institutions: data.institutions,
      },
    ]);
  });

  test('if dont set health space if domain dont exist in list', () => {
    const data = {
      healthSpace: {
        url: 'my.domain',
      },
      patient: {
        name: 'Manel',
      },
      institutions: [{name: 'cuf'}],
    };

    const state = reducer(
      {healthSpaces: []},
      {
        type: ENHANCE_HEALTH_SPACE_DATA,
        payload: data,
      },
    );

    expect(state.healthSpaces).toEqual([]);
  });

  test('if user can select an health space', () => {
    const data = {
      url: 'my.domain',

      patient: {
        name: 'Manel',
      },
      institutions: [{name: 'cuf'}],
    };

    const state = reducer(
      {
        healthSpaces: [data],
      },
      {
        type: SET_HEALTH_SPACE,
        payload: data,
      },
    );

    expect(state.selectedHealthSpace).toEqual(data);
  });

  test('if user selects an health space that dont exist in list, dont select nothing', () => {
    const data = {
      url: 'my.domain',

      patient: {
        name: 'Manel',
      },
      institutions: [{name: 'cuf'}],
    };

    const state = reducer(
      {
        healthSpaces: [],
      },
      {
        type: SET_HEALTH_SPACE,
        payload: data,
      },
    );

    expect(state.selectedHealthSpace).toBe(undefined);
  });

  test('user updates data', () => {
    const data = {
      private_data: {
        name: 'Horácio',
      },
    };

    const state = reducer(START_STATE, {
      type: USER_UPDATE_DATA_SUCCESS,
      payload: data,
    });

    expect(state.privateData.name).toBe('Horácio');
    expect(state.shortName).toBe('Horácio');
    expect(state.loading).toBe(false);
    expect(state.errors).toStrictEqual({});
    expect(state.lastStatusRequest).toBe(200);
  });

  test('user updates data with errors', () => {
    const data = {
      private_data_error: 'ERROR!',
    };

    const state = reducer(START_STATE, {
      type: USER_UPDATE_DATA_ERROR,
      payload: data,
    });

    expect(state.loading).toBe(false);
    expect(state.errors).toStrictEqual(data);
    expect(state.lastStatusRequest).toBe(400);
  });
});

import {SESSION_COOKIES, RESET_STATE} from 'actions/types';
import reducer, {INITIAL_STATE} from '../Session.Reducer';

const START_STATE = {
  loading: true,
  cookies: {
    PWAID: {
      domain: '0.0.0.0',
      expires: '2023-02-02T20:18:06.000Z',
      httpOnly: false,
      name: 'PWAID',
      path: '/',
      secure: false,
      value:
        'dlksamdlkasmdlkamd:1nFM4t:Dy9lgF6UHOcnDR4U-vFsVPfl-8FpaMOuT0A0He3nT1U',
      version: '1',
    },
    csrftoken: {
      domain: '0.0.0.0',
      expires: '2023-02-01T20:18:06.000Z',
      httpOnly: true,
      name: 'csrftoken',
      path: '/',
      secure: false,
      value: 'dlksamdlksamdlkas',
      version: '1',
    },
  },
};

describe('Test Session reducer', () => {
  it('fetch session', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: SESSION_COOKIES,
        payload: START_STATE.cookies,
      }),
    ).toEqual({
      loading: false,
      cookies: START_STATE.cookies,
    });
  });

  it('reset session', () => {
    const state = reducer(START_STATE, {
      type: RESET_STATE,
    });

    expect(state).toStrictEqual({...INITIAL_STATE, loading: false});
  });
});

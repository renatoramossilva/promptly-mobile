import {getSession, getSessionCookies} from '../selected_session';

const state = {
  session: {
    cookies: {
      PWAID: {
        domain: null,
        httpOnly: false,
        name: 'PWAID',
        path: null,
        secure: false,
        value: '123123:1m0Rq1:dL5kRSK_op15U_9H-WW40tq_dh0',
      },
      csrftoken: {
        domain: null,
        httpOnly: false,
        name: 'csrftoken',
        path: null,
        secure: false,
        value: 'lkamsdlkmas',
      },
    },
  },
};

describe('test session selectors', () => {
  test('getSession', () => {
    expect(getSession(state)).toEqual(state.session);
  });

  test('empty getSession', () => {
    expect(getSession({})).toEqual({});
  });

  test('getSessionCookies', () => {
    expect(getSessionCookies(state)).toEqual(state.session.cookies);
  });

  test('empty getSessionCookies', () => {
    expect(getSessionCookies({session: {}})).toEqual(undefined);
  });
});

import {createSelector} from 'reselect';

export const getSession = state => (state.session ? state.session : {});

export const getSessionCookies = createSelector([getSession], session => {
  return session.cookies ? session.cookies : undefined;
});

export const getSessionState = createSelector([getSession], session => {
  return session.loading;
});

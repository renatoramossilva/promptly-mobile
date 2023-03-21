import {createSelector} from 'reselect';

export const getUser = (state) => (state.user ? state.user : {});

export const getUserTours = createSelector([getUser], (user) =>
  user && user.tours ? user.tours.user_state : {},
);

export const getUserPrivateData = createSelector([getUser], (user) =>
  user.privateData ? user.privateData : {},
);

export const getUserCaregiver = createSelector([getUserPrivateData], (data) =>
  data.caregiver ? data.caregiver : {},
);

export const getUserComplementaryInfo = createSelector(
  [getUserPrivateData],
  (data) => (data.complementary_info ? data.complementary_info : {}),
);

export const getUserUpdateURL = createSelector([getUser], (user) =>
  user ? `/users/${user.uuid}` : '',
);

export const getUserOauthProviderURL = createSelector(
  [getUser],
  (user) => user.oauth_providers_url,
);

export const getAvatar = createSelector([getUser], (user) => ({
  name: user.privateData.name,
  src: user.privateData.avatar_url,
}));

export const getHealthSpaces = createSelector([getUser], (user) =>
  user ? user.healthSpaces : [],
);

export const getSelectedHealthSpace = createSelector([getUser], (user) =>
  user ? user.selectedHealthSpace : undefined,
);

export const getAvatarUrl = createSelector(
  [getUser],
  (user) => user.privateData.avatar_url || '',
);

export const getHelpScoutConfig = createSelector(
  [getUser],
  (user) => user.helpscout,
);

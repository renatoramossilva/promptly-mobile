jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key) => key}),
}));

jest.mock('i18next', () => ({
  use: () => ({
    init: jest.fn(),
  }),
  t: () => {},
  getAndChangeLanguage: () => ({t: (key) => key}),
}));

jest.mock('@react-native-community/netinfo', () => {
  return {
    fetch: () => jest.fn(),
  };
});

jest.mock('react-native-device-info', () => {
  return {
    hasNotch: () => jest.fn(),
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        syncMeasurements: jest.fn(),
      },
    }),
  };
});

jest.mock('@react-native-community/async-storage', () => {
  return {
    setItem: jest.fn(),
  };
});

jest.mock('@sentry/react-native', () => ({
  Sentry: {
    setExtra: jest.fn(),
    captureException: jest.fn(),
  },
}));

import {settings, clinicalTrials} from '../../__mocks__/settings';
import {
  getSettings,
  getRegionalSettings,
  getLanguageOptions,
  getLanguage,
  getTimeZone,
  getUnagreedClinicalTrials,
} from '../selected_settings';

describe('test settings selectors', () => {
  test('getSettings', () => {
    expect(
      getSettings({user: {name: 'Ze'}, settings: {regional: {language: 'pt'}}}),
    ).toEqual({regional: {language: 'pt'}});
  });

  test('getRegionalSettings', () => {
    expect(
      getRegionalSettings({
        user: {name: 'Ze'},
        settings: {regional: {language: 'pt'}},
      }),
    ).toEqual({language: 'pt'});
  });

  test('getLanguageOptions', () => {
    expect(
      getLanguageOptions({
        user: {name: 'Ze'},
        settings: {
          regional: {language: 'pt'},
          languageOptions: ['pt', 'en', 'es'],
        },
      }),
    ).toEqual(['pt', 'en', 'es']);
  });

  test('getLanguage', () => {
    expect(
      getLanguage({
        user: {name: 'Ze'},
        settings: {
          regional: {language: 'pt'},
          languageOptions: ['pt', 'en', 'es'],
        },
      }),
    ).toBe('pt');
  });

  test('getTimeZone', () => {
    expect(
      getTimeZone({
        user: {name: 'Ze'},
        settings: {
          regional: {language: 'pt', timeZone: 'Europe/Lisbon'},
          languageOptions: ['pt', 'en', 'es'],
        },
      }),
    ).toBe('Europe/Lisbon');
  });

  test('getUnagreedClinicalTrials', () => {
    expect(getUnagreedClinicalTrials({settings: settings})).toEqual([
      settings.clinicalTrials[1],
    ]);
  });
});

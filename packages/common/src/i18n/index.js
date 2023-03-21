import i18n from 'i18next';
import otaClient from '@crowdin/ota-client';
import AsyncStorage from '@react-native-community/async-storage';
import {initReactI18next} from 'react-i18next';
import {Config} from 'react-native-config';
import translationsEN from '../locales/mobile/en/app.json';
import {countryToLanguageParser} from 'utils';

const resources = {
  en: {
    translation: translationsEN,
  },
};
i18n
  .use(initReactI18next)

  .init({
    nsSeparator: '::',
    keySeparator: '=>',
    resources,
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.loadTranslation = async (languageCode) => {
  const stringLanguage = await AsyncStorage.getItem(
    `@language-${languageCode}`,
  );
  const language = JSON.parse(stringLanguage);
  i18n.addResourceBundle(languageCode, 'translation', language);
  i18n.changeLanguage(languageCode);
};

i18n.getAndChangeLanguage = async (languageCode) => {
  const parsedLang = countryToLanguageParser(languageCode);
  if (parsedLang === 'en') {
    i18n.changeLanguage(parsedLang);
    return;
  }

  const hash = Config.CROWDIN_HASH;

  const client = new otaClient(hash);

  try {
    const files = await client.listFiles();
    if (files.length < 1) {
      return;
    }

    const file = files[0];
    const translations = await client.getFileTranslations(file, parsedLang);

    await AsyncStorage.setItem(
      `@language-${parsedLang}`,
      JSON.stringify(translations),
    );
    i18n.loadTranslation(parsedLang);
  } catch (error) {
    throw error;
  }
};

export default i18n;

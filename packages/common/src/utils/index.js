import NetInfo from '@react-native-community/netinfo';
import {PermissionsAndroid, Platform} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import Config from 'react-native-config';
import queryString from 'query-string';
import {makeTrans} from './translations';
import i18next from 'i18next';
import {languages} from '../constants/languages';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {LANGUAGE_CODES_MAP} from '../constants/languages';

export const getURLPath = (url) => {
  const regex = /^https?:\/\/[A-Za-z0-9:.-]*([\/]{1}.*\/?)$/;
  if (!url) {
    return false;
  }
  const regUrl = regex.exec(url)[1]?.split('?')[0];
  return url === 'about:blank' || !regUrl ? '/app/' : regUrl;
};

export const networkRequest = (successFn, rejectFn) =>
  NetInfo.fetch().then((state) => {
    const {isConnected} = state;
    if (!isConnected) {
      return rejectFn();
    } else {
      return successFn();
    }
  });

export const isAndroid = () => Platform.OS === 'android';

export const deviceHasNotch = () => hasNotch();

export const getHeaderHeight = () =>
  !isAndroid() && getStatusBarHeight() > 40 ? 104 : 56;

export const checkLocationPermission = async () => {
  const locationPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  return locationPermission;
};

export const requestLocationPermission = async () => {
  const locationPermissionGranted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  return locationPermissionGranted === PermissionsAndroid.RESULTS.GRANTED;
};

export const getInitials = (userName = '') =>
  userName
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase() || '';

export const getImageAbsoluteUrl = (imageUrl) => {
  return imageUrl && imageUrl.startsWith('/static')
    ? Config.WEBVIEW_URL + imageUrl
    : imageUrl;
};

export const getFileTypeFromUrl = (url = '') => url.slice(-3);

export const getShortName = (name = '') => {
  const splitedName = name.split(' ');
  if (splitedName.length > 1) {
    return `${splitedName[0]} ${splitedName[splitedName.length - 1]}`;
  }
  return name;
};

export const getLatToString = (lat) => {
  const LAT_OPTIONS = {
    left: makeTrans('Left'),
    right: makeTrans('Right'),
    both: makeTrans('Both'),
  };
  return Object.keys(LAT_OPTIONS).includes(lat) ? LAT_OPTIONS[lat] : undefined;
};

export const getEventName = (name, lat) =>
  getLatToString(lat)
    ? `${name} - ${i18next.t(getLatToString(lat)) || getLatToString(lat)}`
    : name;

export const getSortedTabs = (list) =>
  list.sort(
    (a, b) =>
      +(a.name.toLowerCase() > b.name.toLowerCase()) ||
      +(a.name.toLowerCase() === b.name.toLowerCase()) - 1,
  );

export const getPhoneCountryCode = (lang) => {
  if (lang) {
    let selectedLang = languages.find(
      (l) => l.value.toLowerCase() === lang.toLowerCase(),
    );
    if (selectedLang) {
      return selectedLang.phoneCountryCode;
    }

    selectedLang = languages.find(
      (l) => l.value.toLowerCase() === lang.toLowerCase().slice(0, 2),
    );
    if (selectedLang) {
      return selectedLang.phoneCountryCode;
    }
  }
  return languages[0].phoneCountryCode;
};

export const getRangeText = (rangeLevels = []) =>
  rangeLevels.length ? rangeLevels[0].label : '';

// gets string with readings range values
export const getRangeValues = (readingRange, readingUnit) => {
  if (readingRange.gte && !readingRange.lte) {
    return `> ${readingRange.gte} ${readingUnit}`;
  }
  if (!readingRange.gte && readingRange.lte) {
    return `< ${readingRange.lte} ${readingUnit}`;
  }
  return `${readingRange.gte} - ${readingRange.lte} ${readingUnit}`;
};

// gets measurement category label
export const getCategory = (code, categories) => categories[code];

export const getOptionLabel = (value, list) =>
  (list.find((item) => item.value === value) || {}).label;

export const getSelectedOption = (selectedList, value, searchBy = 'value') =>
  selectedList.find(i => i[searchBy] === value) || '';

export const getCountryCode = (country, language) =>
  country !== '' && country ? country : getPhoneCountryCode(language);

export const trim = (data) => {
  if (typeof data === 'string') {
    return data.trim();
  } else if (Array.isArray(data)) {
    return data.map((text) => (typeof text === 'string' ? text.trim() : text));
  } else if (typeof data === 'object') {
    return Object.keys(data).reduce((p, k) => {
      const text = data[k];
      p[k] = typeof text === 'string' ? text.trim() : text;
      return p;
    }, {});
  }
  return data;
};

export const getParamFromURL = (url, param) =>
  queryString.parse(url?.split('?')[1])[param] || undefined;

export const getCompleteNotificationsURI = (url) => {
  const preURI =
    url && url.includes(`${Config.APP_SCHEMA}:`)
      ? `${Config.WEBVIEW_URL}/app/notifications?uri=${url}`
      : url;

  const joiner = preURI && preURI.includes('?') ? '&' : '?';
  return url ? `${preURI}${joiner}t=${Date.now()}` : undefined;
};

export const parseTextToNumber = (value) =>
  value.replace(/[^0-9.,]/gi, '').replace(/,/gm, '.');

export const normalizeSpaces = (text) => text.replace(/[\t\r ]+/g, ' ');

export const countryToLanguageParser = language =>
  LANGUAGE_CODES_MAP[language] || language;

export const noop = () => null;

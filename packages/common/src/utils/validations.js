import {parseNumber, formatNumber} from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.mobile.json';

export const withoutLetters = (phone) => !phone.match(/[a-z]/i);

export const validateSize = (phone) => phone.length >= 4 && phone.length <= 20;

export const fullNumber = (phoneData) => formatNumber(phoneData, 'E.164');

export const validatePhone = (phone, cCode = '') => {
  if (phone === undefined || phone === null) {
    return [false, {}];
  }

  if (!withoutLetters(phone) || !validateSize(phone)) {
    return [false, {}];
  }
  const foundNumber = parseNumber(phone, cCode, metadata);
  return [Object.keys(foundNumber).length > 0, foundNumber];
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

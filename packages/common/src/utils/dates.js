import momentJS from 'moment';
import 'moment-timezone';
import 'moment/locale/en-gb';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/pt';
import 'moment/locale/da';
import 'moment/locale/cs';
import 'moment/locale/pt-br';
import 'moment/locale/th';
import 'moment/locale/da';
import 'moment/locale/cs';

// Configs
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';
export const DEFAULT_TIMEZONE = 'Europe/London';

const moment = momentJS;
moment.tz.setDefault('UTC');
export {moment};

export const DATE_NOW = moment();

export const dateDiffInWords = (
  date,
  lang = 'en',
  baseDate = moment(DATE_NOW),
  timeZone = DEFAULT_TIMEZONE,
  addSuffix = true,
  upperCase = true,
) => {
  const dateLocale = moment(date).tz(timeZone);
  const timeInterval = dateLocale.locale(lang).from(baseDate, !addSuffix);
  return upperCase
    ? `${timeInterval.substr(0, 1).toLocaleUpperCase()}${timeInterval.substr(
        1,
      )}`
    : timeInterval;
};

export const sortDate = (a, b) => {
  const dateA = a.date;
  const dateB = b.date;

  const diff = new Date(dateA) - new Date(dateB);
  // if same day order by id
  if (diff === 0) {
    return b.id < a.id ? 1 : -1;
  }
  return diff;
};

export const formatedData = (date, dateFormat = 'L') =>
  moment(date).format(dateFormat);

export const CURRENT_DATE = new Date();
export const PAST = new Date(
  CURRENT_DATE.getFullYear() - 200,
  CURRENT_DATE.getMonth(),
  CURRENT_DATE.getDate(),
);

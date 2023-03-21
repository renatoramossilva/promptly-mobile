import {moment, dateDiffInWords, sortDate, DATE_NOW} from '../dates';

test('sortDate method for dates', () => {
  expect(sortDate({date: '2019-10-10'}, {date: '2018-10-10'})).toBe(
    31536000000,
  );
  expect(sortDate({date: '2018-10-10'}, {date: '2019-10-10'})).toBe(
    -31536000000,
  );
  expect(
    sortDate({date: '2019-10-10', id: 1}, {date: '2019-10-10', id: 2}),
  ).toBe(-1);
  expect(
    sortDate({date: '2019-10-10', id: 2}, {date: '2019-10-10', id: 1}),
  ).toBe(1);
});

it('shows relative diff in words according to given language', () => {
  const now = moment(DATE_NOW);
  const inHalfAnHour = moment(now).add(30, 'minutes');
  const halfAnHourAgo = moment(now).subtract(30, 'minutes');
  const tomorrow = moment(now).add(1, 'days');
  const yesterday = moment(now).subtract(1, 'days');
  const nextWeek = moment(now).add(7, 'days');
  const lastWeek = moment(now).subtract(7, 'days');
  const nextMonth = moment(now).add(31, 'days');
  const lastMonth = moment(now).subtract(31, 'days');
  const nextYear = moment(now).add(366, 'days');
  const lastYear = moment(now).subtract(366, 'days');

  // PT
  expect(dateDiffInWords(now, 'pt')).toBe('Há segundos');
  expect(dateDiffInWords(tomorrow, 'pt')).toBe('Em um dia');
  expect(dateDiffInWords(inHalfAnHour, 'pt')).toBe('Em 30 minutos');
  expect(dateDiffInWords(halfAnHourAgo, 'pt')).toBe('Há 30 minutos');
  expect(dateDiffInWords(yesterday, 'pt')).toBe('Há um dia');
  expect(dateDiffInWords(nextWeek, 'pt')).toBe('Em 7 dias');
  expect(dateDiffInWords(lastWeek, 'pt')).toBe('Há 7 dias');
  expect(dateDiffInWords(nextMonth, 'pt')).toBe('Em um mês');
  expect(dateDiffInWords(lastMonth, 'pt')).toBe('Há um mês');
  expect(dateDiffInWords(nextYear, 'pt')).toBe('Em um ano');
  expect(dateDiffInWords(lastYear, 'pt')).toBe('Há um ano');

  // FR
  expect(dateDiffInWords(now, 'fr')).toBe('Il y a quelques secondes');
  expect(dateDiffInWords(tomorrow, 'fr')).toBe('Dans un jour');
  expect(dateDiffInWords(inHalfAnHour, 'fr')).toBe('Dans 30 minutes');
  expect(dateDiffInWords(halfAnHourAgo, 'fr')).toBe('Il y a 30 minutes');
  expect(dateDiffInWords(yesterday, 'fr')).toBe('Il y a un jour');
  expect(dateDiffInWords(nextWeek, 'fr')).toBe('Dans 7 jours');
  expect(dateDiffInWords(lastWeek, 'fr')).toBe('Il y a 7 jours');
  expect(dateDiffInWords(nextMonth, 'fr')).toBe('Dans un mois');
  expect(dateDiffInWords(lastMonth, 'fr')).toBe('Il y a un mois');
  expect(dateDiffInWords(nextYear, 'fr')).toBe('Dans un an');
  expect(dateDiffInWords(lastYear, 'fr')).toBe('Il y a un an');

  // EN (default)
  expect(dateDiffInWords(now)).toBe('A few seconds ago');
  expect(dateDiffInWords(tomorrow)).toBe('In a day');
  expect(dateDiffInWords(inHalfAnHour)).toBe('In 30 minutes');
  expect(dateDiffInWords(halfAnHourAgo)).toBe('30 minutes ago');
  expect(dateDiffInWords(yesterday)).toBe('A day ago');
  expect(dateDiffInWords(nextWeek)).toBe('In 7 days');
  expect(dateDiffInWords(lastWeek)).toBe('7 days ago');
  expect(dateDiffInWords(nextMonth)).toBe('In a month');
  expect(dateDiffInWords(lastMonth)).toBe('A month ago');
  expect(dateDiffInWords(nextYear)).toBe('In a year');
  expect(dateDiffInWords(lastYear)).toBe('A year ago');
});
import {
  validateSize,
  withoutLetters,
  validateEmail,
  fullNumber,
  validatePhone,
} from '../validations';

test('>= 4 and <= 20 is valid - PT', () => {
  expect(validateSize('918969818')).toBeTruthy();
});

test('>= 4 and <= 20 is valid - US', () => {
  expect(validateSize('+12133734253')).toBeTruthy();
});

test('Invalid size < 4', () => {
  expect(validateSize('918')).toBeFalsy();
});

test('Invalid size > 20', () => {
  expect(validateSize('123456789101111213146')).toBeFalsy();
});

test('No letters in phone', () => {
  expect(withoutLetters('918969818')).toBeTruthy();
});

test('No letters and country code', () => {
  expect(withoutLetters('+351918969818')).toBeTruthy();
});

test('Invalid with letters', () => {
  expect(withoutLetters('918969818abc')).toBeFalsy();
});

test('Get E.164 phone format - PT Phone', () => {
  const testData = {phone: '918969818', country: 'PT'};
  expect(fullNumber(testData)).toEqual('+351918969818');
});

test('Get E.164 phone format - US Phone', () => {
  const testData = {phone: '2133734253', country: 'US'};
  expect(fullNumber(testData)).toEqual('+12133734253');
});

test('Get E.164 phone format - RU Phone', () => {
  const testData = {phone: '8005553535', country: 'RU'};
  expect(fullNumber(testData)).toEqual('+78005553535');
});

test('Valid phone number - +351918969818', () => {
  const [isValid, phoneData] = validatePhone('+351918969818');
  expect(isValid).toBeTruthy();
  expect(phoneData).toMatchObject({
    phone: '918969818',
    country: 'PT',
  });
});

test('Valid phone number - 2133734253', () => {
  const [isValid, phoneData] = validatePhone('2133734253', 'US');
  expect(isValid).toBeTruthy();
  expect(phoneData).toMatchObject({
    phone: '2133734253',
    country: 'US',
  });
});

test('Invalid phone number - 918969818 (US)', () => {
  const [isValid, phoneData] = validatePhone('918969818', 'US');
  expect(isValid).toBeFalsy();
  expect(phoneData).toMatchObject({});
});

test('Invalid phone number - abcdef', () => {
  const [isValid, phoneData] = validatePhone('abcdef', 'US');
  expect(isValid).toBeFalsy();
  expect(phoneData).toMatchObject({});
});

test('Valid Email - nuno.salgado@promptlyhealth.com', () => {
  expect(validateEmail('nuno.salgado@promptlyhealth.com')).toBeTruthy();
});

test('Invalid Email - nuno.salgado.com', () => {
  expect(validateEmail('nuno.salgado.com')).toBeFalsy();
});

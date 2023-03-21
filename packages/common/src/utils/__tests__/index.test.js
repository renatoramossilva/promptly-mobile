import '../../__mocks__/global';
import {
  getShortName,
  getURLPath,
  getInitials,
  getFileTypeFromUrl,
  getImageAbsoluteUrl,
  getEventName,
  getLatToString,
  getRangeText,
  getRangeValues,
  getCategory,
  getPhoneCountryCode,
  trim,
  getParamFromURL,
  getCompleteNotificationsURI,
  getHeaderHeight,
  parseTextToNumber,
  normalizeSpaces,
  getSelectedOption,
  countryToLanguageParser
} from '../index';
import {languages} from '../../__mocks__/settings';

const rangeLevels = [
  {
    lt: null,
    gt: null,
    eq: null,
    gte: 131,
    lte: null,
    color: '#A1B711',
    label: 'Light',
    code: 'glucose-fasting',
    severity_uid: 'light',
  },
  {
    lt: null,
    gt: null,
    eq: null,
    gte: 181,
    lte: 200,
    color: '#A1B711',
    label: 'Light',
    code: 'glucose-pos-meal',
    severity_uid: 'light',
  },
  {
    lt: null,
    gt: null,
    eq: null,
    gte: null,
    lte: 180,
    color: '#A1B711',
    label: 'Light',
    code: 'glucose-pre-meal',
    severity_uid: 'light',
  },
];

describe('Test getURLPath', () => {
  it('Should get url path', () => {
    expect(
      getURLPath(
        'https://127.0.0.1:8000/app/?device_uid=1f13176d-2cd7-4054-b323-55e5de376e5e&t=false',
      ),
    ).toBe('/app/');
    expect(getURLPath()).toBe(false);
  });
});

describe('Test getInitials', () => {
  it('Should name initials', () => {
    expect(getInitials('Marco Jacinto')).toBe('MJ');
    expect(getInitials()).toBe('');
  });
});

describe('Test getImageAbsoluteUrl', () => {
  it('Should name initials', () => {
    expect(getImageAbsoluteUrl('/test/image.jpg')).toBe('/test/image.jpg');
    expect(getImageAbsoluteUrl()).toBe(undefined);
  });
});

describe('Test getFileTypeFromUrl', () => {
  it('Should get correct file type', () => {
    expect(getFileTypeFromUrl('https://127.0.0.1:8000/app/test.jpg')).toBe(
      'jpg',
    );
    expect(getFileTypeFromUrl('https://127.0.0.1:8000/app/test.svg')).toBe(
      'svg',
    );
    expect(getFileTypeFromUrl()).toBe('');
  });
});

describe('Test getShortName', () => {
  it('Should correct short name', () => {
    expect(getShortName('Nuno')).toBe('Nuno');
    expect(getShortName('Nuno Andre Silva')).toBe('Nuno Silva');
    expect(getShortName('')).toBe('');
    expect(getShortName()).toBe('');
  });
});

describe('Test app getLatToString', () => {
  it('should return correct description', () => {
    expect(getLatToString('right')).toBe('Right');
    expect(getLatToString('left')).toBe('Left');
    expect(getLatToString('both')).toBe('Both');
    expect(getLatToString('ABC')).toBeUndefined();
    expect(getLatToString()).toBeUndefined();
    expect(getLatToString(2)).toBeUndefined();
  });
});

describe('Test getEventName', () => {
  it('should return correct name', () => {
    expect(getEventName('test', 'left')).toBe('test - Left');
    expect(getEventName('test')).toBe('test');
  });
});

describe('Test getRangeText', () => {
  it('should return correct range', () => {
    expect(getRangeText(rangeLevels)).toBe('Light');
  });
});

describe('Test getRangeValues', () => {
  it('should return correct range value', () => {
    expect(getRangeValues(rangeLevels[0], 'mg/dl')).toBe('> 131 mg/dl');
    expect(getRangeValues(rangeLevels[1], 'mg/dl')).toBe('181 - 200 mg/dl');
    expect(getRangeValues(rangeLevels[2], 'mg/dl')).toBe('< 180 mg/dl');
  });
});

describe('Test getCategory', () => {
  const categories = {
    'glucose-fasting': 'Fasting',
    'glucose-pre-meal': 'Before meal',
    'glucose-pos-meal': 'After meal',
  };
  it('should return correct category', () => {
    expect(getCategory('glucose-fasting', categories)).toBe('Fasting');
  });
});

describe('Test getPhoneCountryCode', () => {
  it('returns proper country code', () => {
    expect(getPhoneCountryCode('en')).toBe('GB');
    expect(getPhoneCountryCode('pt')).toBe('PT');
    expect(getPhoneCountryCode('es')).toBe('ES');
    expect(getPhoneCountryCode('pt-br')).toBe('BR');
    expect(getPhoneCountryCode('pt-PT')).toBe('PT');
    expect(getPhoneCountryCode('pt-BR')).toBe('BR');
    expect(getPhoneCountryCode(undefined)).toBe('GB');
  });
});

describe('Test trim function', () => {
  it('should return correct values checking type', () => {
    expect(trim('')).toBe('');
    expect(trim('    ')).toBe('');
    expect(trim('    abc')).toBe('abc');
    expect(trim('    abc     ')).toBe('abc');
    expect(trim(undefined)).toBe(undefined);
    expect(trim({name: '         '})).toEqual({name: ''});
    expect(trim({name: undefined})).toEqual({name: undefined});
    expect(trim({name: '       ab', test: {test: ''}})).toEqual({
      name: 'ab',
      test: {test: ''},
    });
    expect(trim(['       ', '   abc', 'abc   '])).toEqual(['', 'abc', 'abc']);
  });
});

describe('Test getParamFromURL', () => {
  it('should return correct param value', () => {
    expect(
      getParamFromURL('promptly://measurements?code=30213-02', 'code'),
    ).toBe('30213-02');
    expect(
      getParamFromURL(
        'http://promptly.health/measurements?code=30213-01',
        'code',
      ),
    ).toBe('30213-01');
  });

  it('should return undefined for non existant param', () => {
    expect(
      getParamFromURL('promptly://measurements?code=30213-02', 'area'),
    ).toBe(undefined);
  });

  it('should return undefined for url without params', () => {
    expect(getParamFromURL('promptly://measurements', 'area')).toBe(undefined);
  });

  it('should return undefined for empty url', () => {
    expect(getParamFromURL(undefined, 'area')).toBe(undefined);
    expect(getParamFromURL()).toBe(undefined);
  });
});

describe('Test getCompleteNotificationsURI', () => {
  it('should return converted url', () => {
    expect(getCompleteNotificationsURI('promptly://pdisease/3/prom')).toBe(
      `https://promptly.health/app/notifications?uri=promptly://pdisease/3/prom&t=${Date.now()}`,
    );
  });

  it('should return normal url', () => {
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => 1631810159570);
    global.Date.now = dateNowStub;
    expect(
      getCompleteNotificationsURI(
        'https://promptly.health/measurements?code=30213-02',
      ),
    ).toBe(
      'https://promptly.health/measurements?code=30213-02&t=1631810159570',
    );
    global.Date.now = realDateNow;
  });

  it('should return undefined', () => {
    expect(getCompleteNotificationsURI()).toBe(undefined);
  });
});

describe('Test getHeaderHeight', () => {
  it('Should correct default height', () => {
    expect(getHeaderHeight()).toBe(56);
  });
});

describe('Test parseTextToNumber', () => {
  it('Should return only numbers and replace , with .', () => {
    expect(parseTextToNumber('123,23')).toBe('123.23');
    expect(parseTextToNumber('adsadsa123')).toBe('123');
    expect(parseTextToNumber('123.23')).toBe('123.23');
  });
});

describe('Test normalizeSpaces', () => {
  it('Should return spaces instead of \t and \r', () => {
    expect(normalizeSpaces('word1\tword2')).toBe('word1 word2');
    expect(normalizeSpaces('word1\rword2')).toBe('word1 word2');
  });
});

describe('Test getSelectedOption', () => {
  it('Should return options list item', () => {
    expect(getSelectedOption(languages, 'pt')).toStrictEqual({
      label: 'Português',
      value: 'pt',
    });
    expect(getSelectedOption(languages, 'Dansk', 'label')).toStrictEqual({
      label: 'Dansk',
      value: 'da-dk',
    });
  });
});

describe('Test countryToLanguageParser', () => {
  it('Should return correct language code', () => {
    expect(countryToLanguageParser('pt')).toBe('pt');
    expect(countryToLanguageParser('da-dk')).toBe('da');
    expect(countryToLanguageParser('cz')).toBe('cs');
  });
});

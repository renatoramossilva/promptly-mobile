import {getTrans, makeTrans as _makeTrans} from '../translations';

describe('Test translations', () => {
  it('should return nothing', () => {
    expect(getTrans(undefined, 'title')).toBe('');
  });

  it('should translate by object', () => {
    const obj = {
      title: 'Doctor',
      i18n: {
        title_pt: 'Médico',
        'title_pt-br': 'Médico Br',
      },
    };

    expect(getTrans(obj, 'title')).toBe('Doctor');
    expect(getTrans(obj, 'title', 'pt')).toBe('Médico');
    expect(getTrans(obj, 'unknown')).toBeUndefined();
    expect(getTrans(obj, 'unknown', 'pt')).toBeUndefined();
    expect(getTrans(obj, 'unknown', 'en')).toBeUndefined();
    expect(getTrans(obj, 'title', 'us')).toBe('Doctor');
    expect(getTrans(obj, 'title', 'pt-br')).toBe('Médico Br');
  });

  it('should translate by object without i18n structure', () => {
    const obj = {
      title: 'Doctor',
    };

    expect(getTrans(obj, 'title')).toBe('Doctor');
    expect(getTrans(obj, 'title', 'pt')).toBe('Doctor');
    expect(getTrans(obj, 'unknown')).toBeUndefined();
    expect(getTrans(obj, 'unknown', 'pt')).toBeUndefined();
    expect(getTrans(obj, 'unknown', 'en')).toBeUndefined();
    expect(getTrans(obj, 'title', 'us')).toBe('Doctor');
  });

  it('should return the same string. Used for create a special trans for i18n-scanner', () => {
    expect(_makeTrans('ABC')).toBe('ABC');
    expect(_makeTrans('ABC1')).toBe('ABC1');
    expect(_makeTrans('ABC2')).toBe('ABC2');
    expect(_makeTrans('ABC3')).toBe('ABC3');
  });
});

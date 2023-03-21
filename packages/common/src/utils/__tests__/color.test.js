import {getRGBACode, shadedTheme} from '../color';

describe('test getRGBACode utils', () => {
  it('getRGBACode full opacity', () => {
    expect(getRGBACode('#0E416C')).toEqual('rgba(14,65,108,1)');
  });
  it('getRGBACode 0.5 opacity', () => {
    expect(getRGBACode('#0E416C', '0.5')).toEqual('rgba(14,65,108,0.5)');
  });
});

describe('test shadedTheme utils', () => {
  it('color-primary-200 strengh', () => {
    expect(shadedTheme('#0E416C')['color-primary-200']).toEqual('#12548c');
  });
  it('color-primary-500 strengh', () => {
    expect(shadedTheme('#0E416C')['color-primary-500']).toEqual('#0e416c');
  });
  it('color-primary-900 strengh', () => {
    expect(shadedTheme('#0E416C')['color-primary-900']).toEqual('#082740');
  });
});

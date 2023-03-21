import * as institutionsSelectors from '../selected_institutions';

describe('test institution selectors', () => {
  test('getInstitutionData', () => {
    expect(
      institutionsSelectors.getInstitutionData({
        avatar_url: '/static/avatar/inst/cuf.png',
        city: 'Porto',
        id: 'cuf',
        name: 'CUF Infante Santo',
        short_name: 'HCIS',
      }),
    ).toEqual({
      id: 'cuf',
      image: {
        name: 'CUF Infante Santo',
        src: '/static/avatar/inst/cuf.png',
      },
      short_name: 'HCIS',
      name: 'CUF Infante Santo',
      description: 'Porto',
      childrens: [],
    });
  });

  test('getInstitutionData no avatar_url', () => {
    expect(
      institutionsSelectors.getInstitutionData({
        avatar_url: undefined,
        city: 'Porto',
        id: 'cuf',
        name: 'CUF Infante Santo',
        short_name: 'HCIS',
      }),
    ).toEqual({
      id: 'cuf',
      image: {
        name: 'CUF Infante Santo',
        src: '',
      },
      short_name: 'HCIS',
      name: 'CUF Infante Santo',
      description: 'Porto',
      childrens: [],
    });
  });

  test('getInstitutionData no city', () => {
    expect(
      institutionsSelectors.getInstitutionData({
        avatar_url: undefined,
        city: undefined,
        id: 'cuf',
        name: 'CUF Infante Santo',
        short_name: 'HCIS',
      }),
    ).toEqual({
      id: 'cuf',
      image: {
        name: 'CUF Infante Santo',
        src: '',
      },
      short_name: 'HCIS',
      name: 'CUF Infante Santo',
      description: '',
      childrens: [],
    });
  });
});

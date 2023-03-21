import '../../__mocks__/global';
import {
  getPatientDiseaseEditURL,
  getPatientDiseaseURL,
  getBuildPatientDiseaseURL,
  getDiseaseTeamURL,
  getReadingsURLByPatient,
  getMeasurementsURL,
  getPatientRecommendedArticlesURL,
  getUserUrl,
  getUserAvatarURL,
} from '../selected_api';

describe('test api selectors', () => {
  test('getPatientDiseaseEditURL', () => {
    expect(
      getPatientDiseaseEditURL({
        patient: {id: 1},
        diseases: {selected: {id: 1}},
      }),
    ).toBe('/api/patients/1/diseases/1');
  });
  test('getPatientDiseaseURL', () => {
    expect(
      getPatientDiseaseURL({
        patient: {id: 1},
      }),
    ).toBe('/api/patients/1/diseases');
  });
  test('getDiseaseTeamURL', () => {
    expect(getDiseaseTeamURL({id: 1}, {id: 2})).toBe(
      '/api/patients/1/diseases/2/members',
    );
  });
  test('getBuildPatientDiseaseURL', () => {
    expect(getBuildPatientDiseaseURL(13, 2)).toBe(
      '/api/patients/13/diseases/2',
    );
  });
  test('getReadingsURLByPatient', () => {
    expect(getReadingsURLByPatient(13, 2)).toBe(
      '/api/patients/13/diseases/2/readings',
    );
  });
  test('getReadingsURLByPatient with filters', () => {
    expect(getReadingsURLByPatient(13, 2, 'dash=1')).toBe(
      '/api/patients/13/diseases/2/readings?dash=1',
    );
  });
  test('getMeasurementsURL', () => {
    expect(
      getMeasurementsURL({
        measurements: {auth: {URL: '/promiot/measurements'}},
      }),
    ).toBe('/promiot/measurements');
    expect(
      getMeasurementsURL({
        measurements: {auth: {}},
      }),
    ).toBe(undefined);
  });
  test('getUserUrl', () => {
    expect(
      getUserUrl({
        user: {uuid: 1},
      }),
    ).toBe('/users/1');
  });
  test('getPatientRecommendedArticlesURL', () => {
    expect(
      getPatientRecommendedArticlesURL({
        patient: {id: 1},
      }),
    ).toBe('/api/patients/1/articles');
  });
  test('getUserAvatarUrl', () => {
    expect(
      getUserAvatarURL({
        user: {uuid: 1},
      }),
    ).toBe('/users/1/avatar');
  });
});

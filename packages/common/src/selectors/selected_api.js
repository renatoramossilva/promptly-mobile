import {createSelector} from 'reselect';
import {getPatient} from './selected_patients';
import {getSelectedDisease} from './selected_diseases';
import {getMeasurementsData} from './selected_measurements';
import {getUser} from './selected_user';
export const NOTIFICATIONS_URL = '/api/notifications';
export const NOTIFICATIONS_OPEN_URL = `${NOTIFICATIONS_URL}/open`;

export const BasePatientURL = '/api/patients';

export const getPatientDiseaseEditURL = createSelector(
  [getPatient, getSelectedDisease],
  (patient, disease) => `/api/patients/${patient.id}/diseases/${disease.id}`,
);

export const getDiseaseTeamURL = (patient, pdisease) =>
  `/api/patients/${patient.id}/diseases/${pdisease.id}/members`;

export const getPatientDiseaseURL = createSelector(
  [getPatient],
  (patient) => `${BasePatientURL}/${patient.id}/diseases`,
);

export const getBuildPatientDiseaseURL = (patientID, diseaseID) =>
  `/api/patients/${patientID}/diseases/${diseaseID}`;

export const getReadingsURLByPatient = (patientID, diseaseID, filters = '') =>
  `${getBuildPatientDiseaseURL(patientID, diseaseID)}/readings${
    filters ? '?' + filters : ''
  }`;

export const getMeasurementsURL = createSelector(
  [getMeasurementsData],
  (measurements) => measurements.auth.URL || undefined,
);

export const getUserUrl = createSelector([getUser], (user) =>
  user ? `/users/${user.uuid}` : '',
);

export const getPreferencesURL = createSelector(
  [getUserUrl],
  (userURL) => `${userURL}/preferences`,
);

export const getPatientRecommendedArticlesURL = createSelector(
  [getPatient],
  (patient) => `/api/patients/${patient.id}/articles`,
);

export const INSURANCE_URL =
  '/api/institutions?page_size=100&type=insurance&slug=multicare';

export const getUserAvatarURL = createSelector(
  [getUserUrl],
  (userURL) => `${userURL}/avatar`,
);

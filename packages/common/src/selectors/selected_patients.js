import {createSelector} from 'reselect';
import {getInstitutionData} from './selected_institutions';

export const getPatient = (state) => {
  if (state.institutionPatient && state.institutionPatient.selected) {
    return state.institutionPatient.selected;
  }
  return state.patient;
};

export const getPatientInstitutions = createSelector(
  [getPatient],
  (patient) => {
    if (!patient || (patient && !patient.institutions)) {
      return [];
    }
    return patient.institutions.map((inst) => getInstitutionData(inst));
  },
);

export const getPatientSelectedInstitution = createSelector(
  [getPatient],
  (patient) => {
    if (Object.keys(patient.selectedInstitution).length) {
      return {
        ...patient.selectedInstitution,
        logo: patient.selectedInstitution.branding.app
          ? patient.selectedInstitution.branding.app.logo_url
          : undefined,
      };
    }
    return {};
  },
);

export const getPatientBrandingColor = createSelector(
  [getPatient],
  (patient) => {
    return patient?.selectedInstitution?.branding?.app?.colors?.primary;
  },
);

export const getPatientCoas = (state) => {
  if (
    Array.isArray(state.patient.patientScores) &&
    state.patient.patientScores.length > 0
  ) {
    return state.patient.patientScores;
  }
  return [];
};

export const getSelectedCoa = (state) => {
  if (state.patient && state.patient.selectedCoa && Object.keys(state.patient.selectedCoa).length) {
    return state.patient.selectedCoa;
  }
  return {};
};

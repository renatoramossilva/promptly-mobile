import {patientState} from '../../__mocks__/patient';
import {
  getPatient,
  getPatientInstitutions,
  getPatientSelectedInstitution,
  getPatientBrandingColor,
} from '../selected_patients';

describe('test patients selectors', () => {
  test('getPatient', () => {
    expect(getPatient(patientState)).toEqual(patientState.patient);
  });

  test('getPatientInstitutions', () => {
    expect(getPatientInstitutions(patientState)).toEqual([
      {
        id: 'cuf',
        image: {
          name: 'CUF Infante Santo ',
          src: '/static/avatar/inst/cuf.png',
        },
        short_name: 'HCIS',
        name: 'CUF Infante Santo ',
        description: 'Porto',
        childrens: [],
      },
    ]);
    expect(getPatientInstitutions({})).toEqual([]);
  });

  test('getPatientSelectedInstitution', () => {
    expect(getPatientSelectedInstitution(patientState)).toStrictEqual({
      ...patientState.patient.selectedInstitution,
      logo: patientState.patient.selectedInstitution.branding.app.logo_url,
    });
    expect(
      getPatientSelectedInstitution({patient: {selectedInstitution: {}}}),
    ).toStrictEqual({});
  });

  test('getPatientBrandingColor', () => {
    expect(getPatientBrandingColor(patientState)).toStrictEqual(
      patientState.patient.selectedInstitution.branding.app.colors.primary,
    );
  });
});

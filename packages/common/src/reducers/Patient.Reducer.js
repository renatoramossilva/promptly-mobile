import {
  FETCH_DISEASES,
  FETCH_PATIENT_DATA,
  SELECT_PATIENT_INSTITUTION,
  SET_PATIENT_INSTITUTIONS,
  FETCH_PATIENT_SCORES,
  SELECT_PATIENT_COA,
  RESET_STATE,
} from '../actions/types';
import {PatientScore} from '../models/Score';

const INITIAL_STATE = {
  institutions: [],
  selectedInstitution: {},
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_PATIENT_DATA:
      return {
        ...state,
        ...payload,
      };

    case FETCH_DISEASES: {
      const institutions = action.payload.reduce((prev, pdisease) => {
        if (pdisease.institution) {
          return [...prev, {...pdisease.institution}];
        }
        return prev;
      }, []);

      const getSelectedInstitution = () =>
        !state.selectedInstitution.id && institutions.length === 1
          ? institutions[0]
          : state.selectedInstitution.id
          ? state.selectedInstitution
          : {};

      return {
        ...state,
        institutions,
        selectedInstitution: getSelectedInstitution(),
      };
    }

    case SELECT_PATIENT_INSTITUTION:
      return {
        ...state,
        selectedInstitution:
          state.institutions.find((inst) => inst.id === action.payload) || {},
      };

    case SET_PATIENT_INSTITUTIONS: {
      const {institutions, selected} = action.payload;

      return {
        ...state,
        institutions,
        selectedInstitution: selected,
      };
    }

    case FETCH_PATIENT_SCORES: {
      const {scores} = action.payload;

      return {
        ...state,
        patientScores: scores ? scores.map((s) => new PatientScore(s)) : [],
      };
    }

    case SELECT_PATIENT_COA: {
      const patientCoa = action.payload.score || [];

      return {
        ...state,
        selectedCoa: patientCoa.length ? new PatientScore(patientCoa[0]) : {},
      };
    }

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

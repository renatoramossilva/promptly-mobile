import WebAppApi from '../api/webapp';
import {FETCH_PATIENT_SCORES, SELECT_PATIENT_COA} from './types';

export const fetchPatientScores = (patient, filters = '') => (dispatch) =>
  WebAppApi.getPatientScores(patient, filters).then((response) => {
    dispatch({
      type: FETCH_PATIENT_SCORES,
      payload: {
        scores: response.data,
      },
    });
    return response;
  });

export const fetchPatientScore = (patient, scoreID, filters = '') => (
  dispatch,
) =>
  WebAppApi.getPatientScore(patient, scoreID, filters).then((response) => {
    dispatch({
      type: SELECT_PATIENT_COA,
      payload: {
        score: response.data,
      },
    });
    return response;
  });

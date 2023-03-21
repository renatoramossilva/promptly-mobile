import {ADD_TOAST} from '../actions/types';
import {SERVER_ERROR} from '../constants/messages';
import axios from '../utils/axios';
import {moment, DEFAULT_DATE_FORMAT} from '../utils/dates';

class WebAppApi {
  static request = ({method, url, data = undefined}) => (dispatch) =>
    axios({
      method,
      url,
      data,
    })
      .then((response) => response)
      .catch((request) => {
        if (dispatch) {
          let error = SERVER_ERROR;

          if (request.response.data.errors) {
            error = {
              ...error,
              message: request.response.data.errors[0],
            };
          }
          dispatch({
            type: ADD_TOAST,
            payload: error,
          });
        }
        return Promise.reject(request);
      });
  /**
   * Get last server answer stored for some question
   * @param {string} patientID
   * @param {number} diseaseID
   * @param {string} questionKey
   */
  static getServerAnswers = (patientID, diseaseID, questionKey) =>
    axios.get(
      `/api/patients/${patientID}/diseases/${diseaseID}/question/${questionKey}/answer`,
    );

  /**
   * Get all patient disease that current patient has
   * @param {object} patient
   */
  static getPatientsDiseases = ({diseases_url: URL}) => axios.get(URL);

  /**
   *  Contact server fro retrive patient disease score. Filters allowed more control
   * @param {object} patient
   * @param {object} pdisease
   * @param {string} filters ex: "assessmet_id=1&limit=5"
   */
  static getPatientDiseaseScore = (patient, pdisease, filters = '') =>
    axios.get(
      `/api/patients/${patient.id}/diseases/${pdisease.id}/scores?${filters}`,
    );

  /**
   * Get institution information for some patient disease
   * @param {object} patient
   * @param {object} pdisease
   */
  static getPatientDiseaseInstitution = (patient, pdisease) =>
    axios.get(
      `/api/patients/${patient.id}/diseases/${pdisease.id}/institution`,
    );

  /**
   * Update existent disease event for patient disease
   * @param {*} patient
   * @param {*} pdisease
   * @param {*} data
   */
  static updatePatientDiseaseEvent = ({
    patientId,
    pdiseaseId,
    pdiseaseEventId,
    data,
  }) =>
    axios.patch(
      `/api/patients/${patientId}/diseases/${pdiseaseId}/events/${pdiseaseEventId}`,
      data,
    );

  /**
   * Create new event for patient disease
   * @param {*} patient
   * @param {*} pdisease
   * @param {*} data
   */

  static createPatientDiseaseEvent = ({patientId, pdiseaseId, data}) =>
    axios.post(
      `/api/patients/${patientId}/diseases/${pdiseaseId}/events`,
      data,
    );

  /**
   *
   * @param {*} diseaseSlug
   * @param {*} event
   */
  static getEventDiseaseForm = ({diseaseSlug, eventSlug}) =>
    axios.get(`/api/diseases/${diseaseSlug}/events/${eventSlug}`);

  static getPatientDiseaseEvent = ({patientId, pdiseaseId, pdiseaseEventId}) =>
    axios.get(
      `/api/patients/${patientId}/diseases/${pdiseaseId}/events/${pdiseaseEventId}`,
    );

  /**
   *  Contact server for retrive patient specific score. Filters allowed more control
   * @param {object} patient
   * @param {object} scoreID
   * @param {string} filters ex: "limit=5"
   */
  static getPatientScore = (patient, scoreID, filters = '') =>
    axios.get(`/api/patients/${patient.id}/scores/${scoreID}?${filters}`);

  /**
   *  Contact server for retrive all patient scores. Filters allowed more control
   * @param {object} patient
   * @param {string} filters ex: "limit=5"
   */
  static getPatientScores = (patient, filters = '') =>
    axios.get(`/api/patients/${patient.id}/scores?${filters}`);

  /**
   * Request /me information from health provider
   * @param {object} healthSpace
   */
  static fetchHealthSpaceMe = (healthSpace) =>
    axios.get(`${healthSpace.url}/me`);

  /**
   * Get informaton about health space. Ex: Name, avatar, description
   * @param {object} healthSpace
   * @param {object} patient
   */
  static fetchHealthSpaceInstitutions = (healthSpace, patient) =>
    axios.get(`${healthSpace.url}/api/patients/${patient.id}/institutions`);

  /**
   * Fetch readings ranges of a patient disease measurement
   * @param {string} patientId
   * @param {string} diseaseId
   * @param {string} categories
   */
  static fetchReadingsRanges = (patientId, diseaseId, categories) => {
    let BASE_URL = `/api/patients/${patientId}/diseases/${diseaseId}/readings-ranges?`;
    if (categories) {
      BASE_URL += `codes=${categories}`;
    }
    return axios.get(BASE_URL);
  };

  /**
   * Fetch readings values of a patient disease measurement
   * @param {string} patientId
   * @param {string} diseaseId
   * @param {string} category
   * @param {string} codeMetrics
   * @param {string} filter
   * @param {string} beginDate
   * @param {string} endDate
   */
  static fetchTimeline = (
    patientId,
    diseaseId,
    category,
    codeMetrics,
    filter,
    beginDate,
    endDate,
  ) => {
    let BASE_URL = `/api/patients/${patientId}/diseases/${diseaseId}/readings/${category}?`;
    const nextDay = moment().add(1, 'day').format(DEFAULT_DATE_FORMAT); // next day because hours is 00:00
    if (codeMetrics) {
      BASE_URL += `codes=${codeMetrics}&`;
    }
    switch (filter) {
      case '7d':
        BASE_URL += `filter=measured_at,gte,${moment()
          .subtract(7, 'd')
          .format('YYYY-MM-DD')}&filter=measured_at,lte,${nextDay}`;
        break;
      case '14d':
        BASE_URL += `filter=measured_at,gte,${moment()
          .subtract(14, 'd')
          .format('YYYY-MM-DD')}&filter=measured_at,lte,${nextDay}`;
        break;
      case '30d':
        BASE_URL += `filter=measured_at,gte,${moment()
          .subtract(30, 'd')
          .format('YYYY-MM-DD')}&filter=measured_at,lte,${nextDay}`;
        break;
      case '90d':
        BASE_URL += `filter=measured_at,gte,${moment()
          .subtract(90, 'd')
          .format('YYYY-MM-DD')}&filter=measured_at,lte,${nextDay}`;
        break;
      case 'custom':
        BASE_URL += `filter=measured_at,gte,${beginDate}&filter=measured_at,lte,${moment(
          endDate,
        )
          .add(1, 'day')
          .format(DEFAULT_DATE_FORMAT)}`;
        break;
      default:
        break;
    }

    return axios.get(BASE_URL);
  };

  static events = {
    getPatientDiseaseEvent: WebAppApi.getPatientDiseaseEvent,
    getEventDiseaseForm: WebAppApi.getEventDiseaseForm,
    updatePatientDiseaseEvent: WebAppApi.updatePatientDiseaseEvent,
    createPatientDiseaseEvent: WebAppApi.createPatientDiseaseEvent,
  };

  static user = {
    fetchHealthSpaceMe: WebAppApi.fetchHealthSpaceInstitutions,
  };

  static patient = {
    getPatientsDiseases: WebAppApi.getPatientsDiseases,
    fetchHealthSpaceInstitutions: WebAppApi.fetchHealthSpaceInstitutions,
    getPatientDiseaseScore: WebAppApi.getPatientDiseaseScore,
    getPatientDiseaseInstitution: WebAppApi.getPatientDiseaseInstitution,
    getPatientScore: WebAppApi.getPatientScore,
    getPatientScores: WebAppApi.getPatientScores,
  };

  static measurements = {
    fetchTimeline: WebAppApi.fetchTimeline,
    fetchReadingsRanges: WebAppApi.fetchReadingsRanges,
  };
}

export default WebAppApi;

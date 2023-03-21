import Axios from '../utils/axios';
import {INSURANCE_URL} from 'selectors/selected_api';
import {FETCH_GEOLOCATIONS, FETCH_INSURANCES_SUCCESS} from './types';

export const fetchInsurancesAction = () => (dispatch) =>
  Axios.get(INSURANCE_URL).then((response) => {
    dispatch({
      type: FETCH_INSURANCES_SUCCESS,
      payload: response.data.results,
    });
    return response;
  });

export const fetchGeoLocationsAction = () => (dispatch) => {
  Axios.get('/api/countries').then((response) => {
    dispatch({
      type: FETCH_GEOLOCATIONS,
      payload: {
        geoLocations: response.data,
      },
    });
  });
};

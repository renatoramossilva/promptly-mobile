import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {networkRequest} from '../utils/';
import {
  FETCH_DISEASES,
  FETCH_DISEASE_BY_ID,
  FETCH_DISEASE_SCORES,
  ADD_TOAST,
  MEASUREMENTS_JWT,
  DISEASE_TEAM_MEMBERS,
  DISEASE_EVENTS_TIMELINE,
  FETCH_READINGS_RANGES,
} from './types';
import {
  SERVER_ERROR,
  CONNECTION_ERROR,
  DISEASE_TEAM_MEMBERS_ERROR,
} from '../constants/messages';
import WebAppApi from '../api/webapp';

export const fetchDiseases = (url) => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: url,
      cancelToken: new CancelToken((func) => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then((response) => {
          const data = response.data;
          if (data && Array.isArray(data) && Object.keys(data).length > 0) {
            AsyncStorage.setItem('@diseases', JSON.stringify(data))
              .then(() => fetchDiseasesSuccess(dispatch, data))
              .catch(() => fetchDiseasesFallBack(dispatch, true));
          } else {
            fetchDiseasesFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchDiseasesFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchDiseasesFallBack(dispatch, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchDiseasesFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@diseases')
    .then((result) => {
      if (result !== null) {
        fetchDiseasesSuccess(dispatch, JSON.parse(result));
      } else if (isConnected) {
        noResultsAvailable(dispatch);
      } else {
        noInternetConnection(dispatch);
      }
    })
    .catch(() => {
      return noResultsAvailable(dispatch);
    });
};

const fetchDiseasesSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_DISEASES,
    payload: response,
  });
};

export const fetchDiseaseScores = (patient, pdisease, filters = 'DEFAULT') => {
  return dispatch => {
    const filterMap = {
      DEFAULT: '',
      SINGLE_SCORE: 'is_generic=0&limit_scores=1',
    };

    const onlineFn = () => {
      WebAppApi.getPatientDiseaseScore(patient, pdisease, filterMap[filters])
        .then(response => {
          const data = {
            pdisease,
            coaScores: response.data,
          };
          if (response.data && Array.isArray(response.data)) {
            AsyncStorage.setItem(
              `@diseaseScores-${pdisease.id}`,
              JSON.stringify(data),
            )
              .then(() => fetchDiseaseScoresSuccess(dispatch, data))
              .catch(() =>
                fetchDiseaseScoresFallBack(dispatch, true, pdisease),
              );
          } else {
            fetchDiseaseScoresFallBack(dispatch, true, pdisease);
          }
        })
        .catch(() => {
          fetchDiseaseScoresFallBack(dispatch, true, pdisease);
        });
    };

    const offlineFn = () => {
      fetchDiseaseScoresFallBack(dispatch, false, pdisease);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchDiseaseScoresFallBack = (dispatch, isConnected, pdisease) => {
  AsyncStorage.getItem(`@diseaseScores-${pdisease.id}`)
    .then((result) => {
      if (result !== null) {
        fetchDiseaseScoresSuccess(dispatch, JSON.parse(result));
      } else if (isConnected) {
        noResultsAvailable(dispatch);
      } else {
        noInternetConnection(dispatch);
      }
    })
    .catch(() => {
      return noResultsAvailable(dispatch);
    });
};

const fetchDiseaseScoresSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_DISEASE_SCORES,
    payload: response,
  });
  return response;
};

const noResultsAvailable = (dispatch) => {
  dispatch({
    type: ADD_TOAST,
    payload: SERVER_ERROR,
  });
};

const noInternetConnection = (dispatch) => {
  dispatch({
    type: ADD_TOAST,
    payload: CONNECTION_ERROR,
  });
};

export const fetchDiseaseTeamMembers = (URL, pdisease) => (dispatch) =>
  Axios.get(URL)
    .then((response) => {
      dispatch({
        type: DISEASE_TEAM_MEMBERS,
        payload: {
          pdiseaseID: pdisease.id,
          items: response.data,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_TOAST,
        payload: DISEASE_TEAM_MEMBERS_ERROR,
      });
    });

export const fetchDiseaseById = (
  url,
  diseaseId,
  diseasesItems,
  update = false,
) => (dispatch) => {
  const disease =
    diseasesItems &&
    diseasesItems.find((d) => String(d.id) === String(diseaseId));

  const setMeasurementAuth = (measurements) => {
    dispatch({
      type: MEASUREMENTS_JWT,
      payload: {
        url: measurements ? measurements.url : undefined,
        jwt: measurements ? measurements.jwt : undefined,
        renew: measurements ? measurements.renew_jwt_url : undefined,
      },
    });
  };

  if (disease !== undefined) {
    setMeasurementAuth(disease.measurements);
    dispatch({
      type: FETCH_DISEASE_BY_ID,
      payload: {
        pdisease: disease,
        update,
      },
    });
    return Promise.resolve({response: {status: 200}});
  }

  return Axios.get(`${url}/${diseaseId}`)
    .then((response) => {
      dispatch({
        type: FETCH_DISEASE_BY_ID,
        payload: {
          pdisease: response.data,
          update,
        },
      });
      setMeasurementAuth(response.data.owner.measurements);
      return response;
    })
    .catch((request) => {
      dispatch({
        type: ADD_TOAST,
        payload: SERVER_ERROR,
      });

      return request.response;
    });
};

export const fetchEventsTimeline = (url) => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `${url}/timeline`,
      cancelToken: new CancelToken((func) => (cancelRequest = func)),
      cache: false,
    };

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );

      Axios(options)
        .then((response) => {
          const data = response.data;
          if (data) {
            AsyncStorage.setItem(
              `@fetchEventsTimeline-${url}`,
              JSON.stringify(data),
            )
              .then(() => fetchEventsTimelineSuccess(dispatch, data))
              .catch(() => fetchEventsTimelineFallBack(dispatch, url, true));
          } else {
            fetchEventsTimelineFallBack(dispatch, url, true);
          }
        })
        .catch(() => {
          fetchEventsTimelineFallBack(dispatch, url, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchEventsTimelineFallBack(dispatch, url, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchEventsTimelineFallBack = (dispatch, url, isConnected) => {
  AsyncStorage.getItem(`@fetchEventsTimeline-${url}`)
    .then((result) => {
      if (result !== null) {
        fetchEventsTimelineSuccess(dispatch, JSON.parse(result));
      } else if (isConnected) {
        noResultsAvailable(dispatch);
      } else {
        noInternetConnection(dispatch);
      }
    })
    .catch(() => {
      return noResultsAvailable(dispatch);
    });
};

const fetchEventsTimelineSuccess = (dispatch, response) => {
  dispatch({
    type: DISEASE_EVENTS_TIMELINE,
    payload: response,
  });
};

export const fetchReadingsRangesByCategory = (
  patientId,
  diseaseId,
  categories,
) => {
  return (dispatch) => {
    let cancelRequest;

    const onlineFn = () => {
      const timeout = setTimeout(
        () => cancelRequest(),
        parseInt(Config.WS_TIMEOUT, 10),
      );
      WebAppApi.measurements
        .fetchReadingsRanges(patientId, diseaseId, categories)
        .then((response) => {
          const data = response.data;
          if (data && Array.isArray(data)) {
            AsyncStorage.setItem(
              `@readingranges-${diseaseId}-${categories}`,
              JSON.stringify(data),
            )
              .then(() => fetchReadingsRangesByCategorySuccess(dispatch, data))
              .catch(() =>
                fetchReadingsRangesByCategoryFallBack(
                  dispatch,
                  true,
                  diseaseId,
                  categories,
                ),
              );
          } else {
            fetchReadingsRangesByCategoryFallBack(
              dispatch,
              true,
              diseaseId,
              categories,
            );
          }
        })
        .catch(() => {
          fetchReadingsRangesByCategoryFallBack(
            dispatch,
            true,
            diseaseId,
            categories,
          );
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchReadingsRangesByCategoryFallBack(
        dispatch,
        false,
        diseaseId,
        categories,
      );
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchReadingsRangesByCategoryFallBack = (
  dispatch,
  isConnected,
  diseaseId,
  categories,
) => {
  AsyncStorage.getItem(`@readingranges-${diseaseId}-${categories}`)
    .then((result) => {
      if (result !== null) {
        fetchReadingsRangesByCategorySuccess(dispatch, JSON.parse(result));
      } else if (isConnected) {
        noResultsAvailable(dispatch);
      } else {
        noInternetConnection(dispatch);
      }
    })
    .catch(() => {
      return noResultsAvailable(dispatch);
    });
};

const fetchReadingsRangesByCategorySuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_READINGS_RANGES,
    payload: response,
  });
};

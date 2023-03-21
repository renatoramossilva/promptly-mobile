import Axios, {CancelToken} from '../utils/axios';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';
import {networkRequest} from '../utils/';
import {
  ADD_TOAST,
  FETCH_MEASUREMENTS,
  FETCH_MEASUREMENT_DETAIL,
  FETCH_MEASUREMENTS_SERVER_ANSWER,
  FETCH_TIMELINE,
  FETCH_ALL_READINGS,
} from './types';
import {
  MEASUREMENTS_SENT_SUCCESS,
  MEASUREMENTS_SENT_ERROR,
  MEASUREMENTS_CONNECTION_ERROR,
  MEASUREMENTS_SAVED_SUCCESS,
  MEASUREMENTS_SAVED_ERROR,
  SERVER_ERROR,
  CONNECTION_ERROR,
  SAVE_MEASUREMENT,
  MEASUREMENT_SEND_ERROR,
} from '../constants/messages';
import Measurement from '../models/Measurement';
import {IDENTIFIER_TYPE_GLUCOMETER} from '../constants/devices';
import PromiotClientAPI from '../api/promiot';

const getToken = (state) => state.measurements.auth.JWT;

const noResultsAvailable = () => ({
  type: ADD_TOAST,
  payload: SERVER_ERROR,
});

const noInternetConnection = () => ({
  type: ADD_TOAST,
  payload: CONNECTION_ERROR,
});

const measurementConnectionError = () => ({
  type: ADD_TOAST,
  payload: MEASUREMENTS_CONNECTION_ERROR,
});

const measurementSendError = () => ({
  type: ADD_TOAST,
  payload: MEASUREMENT_SEND_ERROR,
});

const measurementSaved = () => ({
  type: ADD_TOAST,
  payload: SAVE_MEASUREMENT,
});

export const storeMeasurements = (device, measurements) => async (dispatch) => {
  const measurementRef =
    device.type === IDENTIFIER_TYPE_GLUCOMETER ? 'id' : 'datetime';

  try {
    const stringLocal = await AsyncStorage.getItem(
      `@measurements-${device.id}`,
    );
    let localMeasurements = stringLocal ? JSON.parse(stringLocal) : [];

    if (!device.history && measurements.length > 0) {
      localMeasurements.push(measurements[0]);
    } else {
      const lastMeasurementRef = await AsyncStorage.getItem(
        `@lastmeasurementref-${device.id}`,
      );

      const newMeasurements = measurements.filter((measurement) => {
        return lastMeasurementRef
          ? measurement.reading[measurementRef] > lastMeasurementRef
          : true;
      });

      if (newMeasurements.length > 0) {
        if (device.type === IDENTIFIER_TYPE_GLUCOMETER) {
          localMeasurements.push(newMeasurements);
        } else {
          localMeasurements.push(...newMeasurements);
        }

        const newLastMeasurementRef = String(
          newMeasurements.slice(-1)[0]?.reading?.[measurementRef],
        );

        if (newLastMeasurementRef) {
          await AsyncStorage.setItem(
            `@lastmeasurementref-${device.id}`,
            newLastMeasurementRef,
          );
        }
      }
    }

    await AsyncStorage.setItem(
      `@measurements-${device.id}`,
      JSON.stringify(localMeasurements),
    );
    dispatch({
      type: ADD_TOAST,
      payload: MEASUREMENTS_SAVED_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ADD_TOAST,
      payload: MEASUREMENTS_SAVED_ERROR,
    });
  }
};

const readingMapper = {
  tensiometer: ['blood-pressure', 'pulse'],
};

const measurementParser = (type, measurements) => {
  const result = [];
  measurements.forEach((measurement) => {
    if (readingMapper[type]) {
      readingMapper[type].forEach((readingtype) => {
        result.push(new Measurement(`${type}-${readingtype}`, measurement));
      });
    } else {
      result.push(new Measurement(type, measurement));
    }
  });
  return result;
};

const loadMeasurements = async (device) => {
  const {id, type} = device;
  try {
    const stringMeasurements = await AsyncStorage.getItem(
      `@measurements-${id}`,
    );
    if (!stringMeasurements) {
      return [];
    }

    return measurementParser(type, JSON.parse(stringMeasurements));
  } catch (error) {
    throw error;
  }
};

export const sendBufferMeasurements = (devices, url, jwt, silent = false) => {
  return (dispatch) => {
    const onlineFn = async () => {
      try {
        await devices.forEach(async (device) => {
          try {
            const measurements = await loadMeasurements(device);
            if (!measurements || measurements.length === 0) {
              return false;
            }
            let cancelRequest;
            const timeout = setTimeout(
              () => cancelRequest(),
              parseInt(Config.WS_TIMEOUT, 10),
            );

            const options = {
              method: 'post',
              url: url,
              data: {device: device.id, measurements: measurements},
              cancelToken: new CancelToken((func) => (cancelRequest = func)),
              headers: {
                Authorization: `Bearer ${jwt}`,
              },
            };

            Axios(options)
              .then(async () => {
                try {
                  await AsyncStorage.removeItem(`@measurements-${device.id}`);
                  if (!silent) {
                    dispatch({
                      type: ADD_TOAST,
                      payload: MEASUREMENTS_SENT_SUCCESS,
                    });
                  }
                  return true;
                } catch (error) {
                  throw error;
                }
              })
              .catch(() => {
                dispatch({
                  type: ADD_TOAST,
                  payload: MEASUREMENTS_SENT_ERROR,
                });
              })
              .finally(() => clearTimeout(timeout));
          } catch (error) {
            throw error;
          }
        });
      } catch (error) {
        if (!silent) {
          dispatch({
            type: ADD_TOAST,
            payload: MEASUREMENTS_SENT_ERROR,
          });
        }
      }
    };

    const offlineFn = () => {
      dispatch(measurementConnectionError());
    };

    networkRequest(onlineFn, offlineFn);
  };
};

export const fetchDashboardMeasurements = (url) => {
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
            AsyncStorage.setItem('@dashboardmeasurements', JSON.stringify(data))
              .then(() => fetchDashboardMeasurementsSuccess(dispatch, data))
              .catch(() => fetchDashboardMeasurementsFallBack(dispatch, true));
          } else {
            fetchDashboardMeasurementsFallBack(dispatch, true);
          }
        })
        .catch(() => {
          fetchDashboardMeasurementsFallBack(dispatch, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchDashboardMeasurementsFallBack(dispatch, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchDashboardMeasurementsFallBack = (dispatch, isConnected) => {
  AsyncStorage.getItem('@dashboardmeasurements')
    .then((result) => {
      if (result !== null) {
        fetchDashboardMeasurementsSuccess(dispatch, JSON.parse(result));
      } else if (!isConnected) {
        dispatch(noInternetConnection());
      }
    })
    .catch(() => {
      return dispatch(noResultsAvailable());
    });
};

const fetchDashboardMeasurementsSuccess = (dispatch, response) => {
  dispatch({
    type: FETCH_MEASUREMENTS,
    payload: response,
  });
};

export const fetchMeasurementDetail = (URL, code, lang) => {
  return (dispatch, getState) => {
    const onlineFn = () => {
      const promiotApi = new PromiotClientAPI({
        token: getToken(getState()),
        lang: lang,
      });

      promiotApi
        .getMeasurements({url: `${URL}/${code}`})
        .then((response) => {
          const data = response.data;
          if (data) {
            AsyncStorage.setItem(
              `@measurementdetail-${code}`,
              JSON.stringify(data),
            )
              .then(() => fetchMeasurementDetailSuccess(dispatch, data, code))
              .catch(() =>
                fetchMeasurementDetailFallBack(dispatch, code, true),
              );
          } else {
            fetchMeasurementDetailFallBack(dispatch, code, true);
          }
        })
        .catch(() => {
          fetchMeasurementDetailFallBack(dispatch, code, true);
        });
    };

    const offlineFn = () => {
      fetchMeasurementDetailFallBack(dispatch, code, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchMeasurementDetailFallBack = (dispatch, code, isConnected) => {
  AsyncStorage.getItem(`@measurementdetail-${code}`)
    .then((result) => {
      if (result !== null) {
        fetchMeasurementDetailSuccess(dispatch, JSON.parse(result), code);
      } else if (isConnected) {
        dispatch(noResultsAvailable());
      } else {
        dispatch(noInternetConnection());
      }
    })
    .catch(() => {
      return dispatch(noResultsAvailable());
    });
};

const fetchMeasurementDetailSuccess = (dispatch, response, code) => {
  dispatch({
    type: FETCH_MEASUREMENT_DETAIL,
    payload: {
      code,
      data: response,
    },
  });
};

export const fetchAllReadings = (
  URL,
  code,
  lang,
  unit = '',
  chartFilters = '',
) => {
  return (dispatch, getState) => {
    const onlineFn = () => {
      const promiotApi = new PromiotClientAPI({
        token: getToken(getState()),
        lang: lang,
      });

      promiotApi
        .getAllReadings({url: URL, code: code, unit: unit, chartFilters})
        .then((response) => {
          const data = response.data;
          if (data && data.results) {
            AsyncStorage.setItem(`@allreadings-${code}`, JSON.stringify(data))
              .then(() => dispatch(fetchAllReadingsSuccess(data, code)))
              .catch(() => fetchAllReadingsFallBack(dispatch, code, true));
          } else {
            fetchAllReadingsFallBack(dispatch, code, true);
          }
        })
        .catch(() => {
          fetchAllReadingsFallBack(dispatch, code, true);
        });
    };

    const offlineFn = () => {
      fetchAllReadingsFallBack(dispatch, code, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchAllReadingsFallBack = (dispatch, code, isConnected) => {
  AsyncStorage.getItem(`@allreadings-${code}`)
    .then((result) => {
      if (result !== null) {
        dispatch(fetchAllReadingsSuccess(JSON.parse(result), code));
      } else if (isConnected) {
        dispatch(noResultsAvailable());
      } else {
        dispatch(noInternetConnection());
      }
    })
    .catch(() => {
      return dispatch(noResultsAvailable());
    });
};

const fetchAllReadingsSuccess = (response, code) => ({
  type: FETCH_ALL_READINGS,
  payload: {
    code,
    data: response,
  },
});

export const fetchServerAnswer = (patientID, diseaseID, questionKey) => {
  return (dispatch) => {
    let cancelRequest;
    const options = {
      method: 'get',
      url: `/api/patients/${patientID}/diseases/${diseaseID}/question/${questionKey}/answer`,
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
          if (data && Object.keys(data).length > 0) {
            AsyncStorage.setItem(
              `@dashboardmeasurements-${questionKey}-answer`,
              JSON.stringify(data),
            )
              .then(() => dispatch(fetchMeasurementServerSuccess(data)))
              .catch(() =>
                fetchServerAnswerFallBack(dispatch, questionKey, true),
              );
          } else {
            fetchServerAnswerFallBack(dispatch, questionKey, true);
          }
        })
        .catch(() => {
          fetchServerAnswerFallBack(dispatch, questionKey, true);
        })
        .finally(() => clearTimeout(timeout));
    };

    const offlineFn = () => {
      fetchServerAnswerFallBack(dispatch, questionKey, false);
    };

    networkRequest(onlineFn, offlineFn);
  };
};

const fetchServerAnswerFallBack = (dispatch, questionKey, isConnected) => {
  AsyncStorage.getItem(`@dashboardmeasurements-${questionKey}-answer`)
    .then((result) => {
      if (result !== null) {
        dispatch(fetchMeasurementServerSuccess(JSON.parse(result)));
      } else if (isConnected) {
        dispatch(noResultsAvailable());
      } else {
        dispatch(noInternetConnection());
      }
    })
    .catch(() => {
      return dispatch(noResultsAvailable());
    });
};

const fetchMeasurementServerSuccess = (response) => ({
  type: FETCH_MEASUREMENTS_SERVER_ANSWER,
  payload: response,
});

export const saveMeasurement = (
  URL,
  {device, category, code, id, fields, date, name},
) => (dispatch, getState) => {
  let cancelRequest;

  const onlineFn = () => {
    const timeout = setTimeout(
      () => cancelRequest(),
      parseInt(Config.WS_TIMEOUT, 10),
    );

    const promiotApi = new PromiotClientAPI({
      token: getToken(getState()),
      lang: getState().settings.regional.language,
    });

    return promiotApi
      .saveMeasurement({
        url: `${URL}`,
        device,
        category,
        code,
        id,
        fields,
        date,
        name,
      })
      .then((response) => {
        dispatch(measurementSaved());
        return response;
      })
      .catch((e) => {
        dispatch(measurementSendError());
        return e.request;
      })
      .finally(() => clearTimeout(timeout));
  };

  const offlineFn = () => {
    dispatch(measurementConnectionError());
  };

  return networkRequest(onlineFn, offlineFn);
};

export const changeMeasurementCode = ({url, category, id, code}) => (
  dispatch,
  getState,
) => {
  let cancelRequest;
  const onlineFn = () => {
    const timeout = setTimeout(
      () => cancelRequest(),
      parseInt(Config.WS_TIMEOUT, 10),
    );

    const promiotApi = new PromiotClientAPI({
      token: getToken(getState()),
      lang: getState().settings.regional.language,
    });

    return promiotApi
      .changeCode(url, category, id, code)
      .then((response) => {
        dispatch(measurementSaved());
        return response;
      })
      .catch((e) => {
        dispatch(measurementSendError());
        return e.request;
      })
      .finally(() => clearTimeout(timeout));
  };

  const offlineFn = () => {
    dispatch(measurementConnectionError());
  };

  return networkRequest(onlineFn, offlineFn);
};

export const fetchTimeline = (url, category, filters = '') => (dispatch) => {
  let cancelRequest;
  const options = {
    method: 'get',
    url: `${url}?${filters}`,
    cancelToken: new CancelToken((func) => (cancelRequest = func)),
    cache: false,
  };

  const onlineFn = () => {
    const timeout = setTimeout(
      () => cancelRequest(),
      parseInt(Config.WS_TIMEOUT, 10),
    );

    return Axios(options)
      .then((response) => {
        const data = response.data;
        if (data && Object.keys(data).length > 0) {
          return AsyncStorage.setItem(
            `@metrics-${category}-timeline`,
            JSON.stringify(data),
          )
            .then(() => fetchTimelineSuccess(dispatch, data, category))
            .catch(() => fetchTimelineFallBack(dispatch, true, category));
        } else {
          return fetchTimelineFallBack(dispatch, true, category);
        }
      })
      .catch(() => {
        return fetchTimelineFallBack(dispatch, true, category);
      })
      .finally(() => clearTimeout(timeout));
  };

  const offlineFn = () => {
    return fetchTimelineFallBack(dispatch, false, category);
  };

  return networkRequest(onlineFn, offlineFn);
};

const fetchTimelineFallBack = (dispatch, isConnected, category) =>
  AsyncStorage.getItem(`@metrics-${category}-timeline`)
    .then((result) => {
      if (result !== null) {
        return fetchTimelineSuccess(dispatch, JSON.parse(result), category);
      } else if (isConnected) {
        dispatch(noResultsAvailable());
      } else {
        dispatch(noInternetConnection());
      }
    })
    .catch(() => {
      return dispatch(noResultsAvailable());
    });

const fetchTimelineSuccess = (dispatch, response, category) => {
  dispatch({
    type: FETCH_TIMELINE,
    payload: {
      category,
      data: response,
    },
  });
  return response;
};

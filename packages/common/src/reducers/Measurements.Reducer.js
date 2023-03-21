import _ from 'lodash';
import {
  MEASUREMENTS_JWT,
  FETCH_MEASUREMENTS,
  FETCH_MEASUREMENT_DETAIL,
  FETCH_MEASUREMENTS_SERVER_ANSWER,
  FETCH_TIMELINE,
  FETCH_ALL_READINGS,
  RESET_STATE,
} from 'actions/types';
import DashboardMeasurement, {
  MeasurementQuestionAnswer,
} from 'models/DashboardMeasurement';
import {MeasurementTimeline, ECGReading} from 'models/Measurement';
import {ECG_CATEGORY} from '../constants/metrics';

export const INITIAL_STATE = {
  dashboard: {
    items: [],
  },
  details: {},
  timelines: {},
  auth: {
    JWT: undefined,
    URL: undefined,
    RENEW: undefined,
  },
  serverAnswers: {},
};

export default function (state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case MEASUREMENTS_JWT: {
      return {
        ...state,
        auth: {
          JWT: payload.jwt,
          URL: payload.url,
          RENEW: payload.renew,
        },
      };
    }

    case FETCH_MEASUREMENTS: {
      let items = [];
      if (payload && Array.isArray(payload)) {
        items = payload;
      }
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          items: items.map(data => new DashboardMeasurement(data)),
        },
      };
    }

    case FETCH_MEASUREMENT_DETAIL: {
      return {
        ...state,
        details: {
          ...state.details,
          [payload.code]: payload.data
            ? payload.data.map(
                data =>
                  new DashboardMeasurement({...data, scales: state.scales}),
              )
            : [],
        },
      };
    }

    case FETCH_MEASUREMENTS_SERVER_ANSWER: {
      return {
        ...state,
        serverAnswers: {
          [payload.question.key]: payload
            ? new MeasurementQuestionAnswer(payload, '%')
            : {},
        },
      };
    }

    case FETCH_TIMELINE: {
      const {category, data} = action.payload;
      return {
        ...state,
        timelines: {
          ...state.timelines,
          [category]: {
            links: data.links,
            count: data.count,
            pages: data.num_pages,
            items:
              category === ECG_CATEGORY
                ? _.chain(data.results)
                    .groupBy('uid')
                    .map(item => {
                      const uidObj = {};
                      item.map(entry => (uidObj[entry.code] = entry));
                      return new ECGReading(uidObj);
                    })
                    .value()
                : data.results.map(m => new MeasurementTimeline(m)),
          },
        },
      };
    }

    case FETCH_ALL_READINGS: {
      const {code, data} = action.payload;
      return {
        ...state,
        readings: {
          ...state.readings,
          [code]: {
            items: data.results.map(m => new MeasurementTimeline(m)),
          },
        },
      };
    }

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

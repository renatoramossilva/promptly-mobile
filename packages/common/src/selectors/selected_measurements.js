import {createSelector} from 'reselect';
import {sortDate} from '../utils/dates';
import DashboardMeasurement from 'models/DashboardMeasurement';
import {
  GLUCOSE_CATEGORY,
  STEPS_CATEGORY,
  WEIGHT_CATEGORY,
  HEIGHT_CATEGORY,
  BLOOD_PRESSURE_CATEGORY,
  SYSTOLIC_CODE,
  DIASTOLIC_CODE,
  HEART_RATE_CATEGORY,
  ECG_CATEGORY,
} from '../constants/metrics';

export const getMeasurementsData = (state) => state.measurements || {};

export const getDashboardMeasurementItems = createSelector(
  [getMeasurementsData],
  (measurements) => measurements.dashboard.items || {},
);

export const getDetailAllMetrics = createSelector(
  [getMeasurementsData],
  (measurements) => measurements.details || {},
);

export const getAllServerAnswers = createSelector(
  [getMeasurementsData],
  (measurements) => measurements.serverAnswers || {},
);

export const sortMetrics = (items, codes) =>
  items.sort((a, b) => codes.indexOf(a.category) - codes.indexOf(b.category));

export const sortGlucoseMetrics = (items, codes) =>
  items.sort((a, b) => codes.indexOf(b.category) - codes.indexOf(a.category));

export const filterDetailMetrics = (
  details,
  measurementsCodes,
  sortFn = sortMetrics,
) => {
  const l = Object.keys(details).reduce((p, code) => {
    if (measurementsCodes.includes(code)) {
      try {
        return [...p, ...(details[code] || [])];
      } catch (e) {
        // empty
      }
    }
    return p;
  }, []);

  return sortFn(
    l.map((m) => new DashboardMeasurement(m)),
    measurementsCodes,
  );
};

export const getGlucoseTimeline = createSelector(
  [getMeasurementsData],
  (measurements) => (measurements.timelines || {})[GLUCOSE_CATEGORY] || {},
);

export const getGlucoseAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[GLUCOSE_CATEGORY]?.items
      ? (measurements.readings || {})[GLUCOSE_CATEGORY].items.sort(sortDate)
      : [],
);

export const getStepsAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[STEPS_CATEGORY]?.items
      ? (measurements.readings || {})[STEPS_CATEGORY].items.sort(sortDate)
      : [],
);

export const getWeightAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[WEIGHT_CATEGORY]?.items
      ? (measurements.readings || {})[WEIGHT_CATEGORY].items.sort(sortDate)
      : [],
);

export const getHeightAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[HEIGHT_CATEGORY]?.items
      ? (measurements.readings || {})[HEIGHT_CATEGORY].items.sort(sortDate)
      : [],
);

export const getBloodPressureAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[BLOOD_PRESSURE_CATEGORY]?.items
      ? (measurements.readings || {})[BLOOD_PRESSURE_CATEGORY].items.sort(
          sortDate,
        )
      : [],
);

export const getSystolicAllReadings = createSelector(
  [getBloodPressureAllReadings],
  (readings) => readings.filter((reading) => reading.code === SYSTOLIC_CODE),
);

export const getDistolicAllReadings = createSelector(
  [getBloodPressureAllReadings],
  (readings) => readings.filter((reading) => reading.code === DIASTOLIC_CODE),
);

export const getPulseAllReadings = createSelector(
  [getMeasurementsData],
  (measurements) =>
    (measurements.readings || {})[HEART_RATE_CATEGORY]?.items
      ? (measurements.readings || {})[HEART_RATE_CATEGORY].items.sort(sortDate)
      : [],
);

export const getECGTimeline = createSelector(
  [getMeasurementsData],
  measurements => measurements.timelines?.[ECG_CATEGORY]?.items || [],
);

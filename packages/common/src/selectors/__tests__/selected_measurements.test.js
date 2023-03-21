import '../../__mocks__/global';
import {
  getMeasurementsData,
  getDashboardMeasurementItems,
  getDetailAllMetrics,
  getAllServerAnswers,
  getGlucoseTimeline,
  getGlucoseAllReadings,
  getStepsAllReadings,
  getWeightAllReadings,
  getBloodPressureAllReadings,
  getHeightAllReadings,
} from '../selected_measurements';
import {storedMeasurements} from '../../__mocks__/measurements';
import {
  BLOOD_PRESSURE_CATEGORY,
  GLUCOSE_CATEGORY,
  STEPS_CATEGORY,
  WEIGHT_CATEGORY,
  HEIGHT_CATEGORY,
} from '../../constants/metrics';

describe('test api selectors', () => {
  test('getMeasurementsData', () => {
    expect(
      getMeasurementsData({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements);
  });
  test('getDashboardMeasurementItems', () => {
    expect(
      getDashboardMeasurementItems({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.dashboard.items);
  });
  test('getDetailAllMetrics', () => {
    expect(
      getDetailAllMetrics({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.details);
  });
  test('getAllServerAnswers', () => {
    expect(
      getAllServerAnswers({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.serverAnswers);
  });
  test('getGlucoseTimeline', () => {
    expect(
      getGlucoseTimeline({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.timelines[GLUCOSE_CATEGORY]);
  });
  test('getGlucoseAllReadings', () => {
    expect(
      getGlucoseAllReadings({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.readings[GLUCOSE_CATEGORY].items);
  });
  test('getStepsAllReadings', () => {
    expect(
      getStepsAllReadings({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.readings[STEPS_CATEGORY].items);
  });
  test('getWeightAllReadings', () => {
    expect(
      getWeightAllReadings({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.readings[WEIGHT_CATEGORY].items);
  });
  test('getHeightAllReadings', () => {
    expect(
      getHeightAllReadings({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.readings[HEIGHT_CATEGORY].items);
  });
  test('getBloodPressureAllReadings', () => {
    expect(
      getBloodPressureAllReadings({
        measurements: storedMeasurements,
      }),
    ).toBe(storedMeasurements.readings[BLOOD_PRESSURE_CATEGORY].items);
  });
});

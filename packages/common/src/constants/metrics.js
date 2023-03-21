import {makeTrans} from 'utils/translations';
import {
  CLICK_MEASUREMENT_CARD_GLUCOSE,
  CLICK_MEASUREMENT_CARD_WEIGHT,
  CLICK_MEASUREMENT_CARD_STEPS,
  CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE,
  CLICK_MEASUREMENT_CARD_ECG,
  CLICK_MEASUREMENT_TAB_GLUCOSE,
  CLICK_MEASUREMENT_TAB_WEIGHT,
  CLICK_MEASUREMENT_TAB_STEPS,
  CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE,
} from '../actions/types';
import {IDENTIFIER_TYPE_ECGREADER} from './devices';

export const GLUCOSE_CATEGORY = '15074-8';
export const STEPS_CATEGORY = 'steps';
export const WEIGHT_CATEGORY = '3141-9';
export const HEIGHT_CATEGORY = '3137-7';
export const BMI_CATEGORY = '39156-5';
export const BLOOD_PRESSURE_CATEGORY = '55284-4';
export const GLUCOSE_UNIT = 'mg/dL';
export const SYSTOLIC_CODE = '8480-6';
export const DIASTOLIC_CODE = '8462-4';
export const HEART_RATE_CATEGORY = '8867-4';
export const RESTING_HEART_RATE_CATEGORY = 'resting-heart-rate';
export const ECG_CATEGORY = 'ecg';
export const ECG_AFIB = 'ecg-afib';
export const ECG_CHART = 'ecg-chart';

export const validMetrics = {
  [GLUCOSE_CATEGORY]: {
    tabId: 'glucose',
    action: CLICK_MEASUREMENT_CARD_GLUCOSE,
  },
  [WEIGHT_CATEGORY]: {tabId: 'weight', action: CLICK_MEASUREMENT_CARD_WEIGHT},
  [BLOOD_PRESSURE_CATEGORY]: {
    tabId: 'blood-pressure',
    action: CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE,
  },
  [HEART_RATE_CATEGORY]: {
    tabId: 'blood-pressure',
    action: CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE,
  },
  [RESTING_HEART_RATE_CATEGORY]: {
    tabId: 'blood-pressure',
    action: CLICK_MEASUREMENT_CARD_BLOOD_PRESSURE,
  },
  steps: {tabId: 'steps', action: CLICK_MEASUREMENT_CARD_STEPS},
  ecg: {tabId: 'blood-pressure', action: CLICK_MEASUREMENT_CARD_ECG},
};

export const metricsTabs = [
  {
    id: 'glucose',
    title: makeTrans('Glucose'),
    action: CLICK_MEASUREMENT_TAB_GLUCOSE,
  },
  {
    id: 'weight',
    title: makeTrans('Weight'),
    action: CLICK_MEASUREMENT_TAB_WEIGHT,
  },
  {
    id: 'steps',
    title: makeTrans('Steps'),
    action: CLICK_MEASUREMENT_TAB_STEPS,
  },
  {
    id: 'blood-pressure',
    title: makeTrans('Heart'),
    action: CLICK_MEASUREMENT_TAB_BLOOD_PRESSURE,
  },
];

export const deviceTypeMap = {
  [WEIGHT_CATEGORY]: {
    type: 'scale',
    label: makeTrans('scale'),
  },
  [GLUCOSE_CATEGORY]: {
    type: 'glucometer',
    label: makeTrans('glucometer'),
  },
  [BLOOD_PRESSURE_CATEGORY]: {
    type: 'tensiometer',
    label: makeTrans('tensiometer'),
  },
};

export const dashboardMetricsDeviceMap = {
  ecg: IDENTIFIER_TYPE_ECGREADER,
};

export const metricsGroup = {
  glucose: {
    metrics: [GLUCOSE_CATEGORY],
    name: 'Glucose rate',
  },
  weight: {
    metrics: [WEIGHT_CATEGORY, HEIGHT_CATEGORY, BMI_CATEGORY],
    name: 'Body height',
  },
  steps: {
    metrics: [STEPS_CATEGORY],
  },
  'blood-pressure': {
    metrics: [BLOOD_PRESSURE_CATEGORY, HEART_RATE_CATEGORY, ECG_CATEGORY],
    name: 'Blood Pressure',
  },
};

export const glucoseTabs = [
  {id: 'chart', title: makeTrans('Chart')},
  {id: 'timeline', title: makeTrans('Timeline')},
];

export const glucoseCategories = {
  'glucose-fasting': makeTrans('Fasting'),
  'glucose-pre-meal': makeTrans('Before meal'),
  'glucose-pos-meal': makeTrans('After meal'),
};

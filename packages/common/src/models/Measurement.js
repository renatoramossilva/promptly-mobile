import {
  IDENTIFIER_TYPE_SCALE,
  IDENTIFIER_TYPE_GLUCOMETER,
  IDENTIFIER_TYPE_TENSIOMETER_BLOOD_PRESSURE,
  IDENTIFIER_TYPE_TENSIOMETER_PULSE,
} from '../constants/devices';
import {getIcon} from '../utils/measurements';
import {makeTrans} from '../utils/translations';
import {
  ECG_AFIB,
  ECG_CHART,
  GLUCOSE_CATEGORY,
  WEIGHT_CATEGORY,
  BLOOD_PRESSURE_CATEGORY,
  HEART_RATE_CATEGORY,
  DIASTOLIC_CODE,
  SYSTOLIC_CODE,
} from '../constants/metrics';

const measureTypeMap = {
  scale: 'weight',
  glucometer: 'glucose',
  'tensiometer-blood-pressure': 'blood-pressure',
  'tensiometer-pulse': 'pulse',
};

const codingMap = {
  weight: WEIGHT_CATEGORY,
  glucose: GLUCOSE_CATEGORY,
  'blood-pressure': BLOOD_PRESSURE_CATEGORY,
  pulse: HEART_RATE_CATEGORY,
};

const glucoseMap = {
  1: 'glucose-pre-meal',
  2: 'glucose-pos-meal',
  3: 'glucose-fasting',
};

const bloodPressureMap = {
  diastolic: DIASTOLIC_CODE,
  systolic: SYSTOLIC_CODE,
};

export default class Measurement {
  constructor(type, measurements) {
    this.coding = codingMap[measureTypeMap[type]];
    this.readings = Array.isArray(measurements)
      ? measurements.map(measurement => this.getReadings(type, measurement))
      : this.getReadings(type, measurements);
  }

  getReadings = (type, measurement) => {
    switch (type) {
      case IDENTIFIER_TYPE_SCALE:
        return [
          {
            code: codingMap[measureTypeMap[type]],
            unit: 'kg',
            value: measurement.value.toFixed(2),
            measured_at: measurement.measured_at,
          },
        ];

      case IDENTIFIER_TYPE_GLUCOMETER:
        return {
          code:
            glucoseMap[measurement.reading.meal] ||
            codingMap[measureTypeMap[type]],
          unit: 'mg/dL',
          value: measurement.reading.value,
          measured_at: measurement.reading.datetime,
        };

      case IDENTIFIER_TYPE_TENSIOMETER_BLOOD_PRESSURE:
        return [
          {
            code: bloodPressureMap.diastolic,
            unit: 'mmHg',
            value: measurement.reading.diastolic,
            measured_at: measurement.reading.datetime,
          },
          {
            code: bloodPressureMap.systolic,
            unit: 'mmHg',
            value: measurement.reading.systolic,
            measured_at: measurement.reading.datetime,
          },
        ];

      case IDENTIFIER_TYPE_TENSIOMETER_PULSE:
        return [
          {
            code: codingMap[measureTypeMap[type]],
            unit: 'bpm',
            value: measurement.reading.pulse,
            measured_at: measurement.reading.datetime,
          },
        ];
    }
  };
}
export class GlucoseClassifier {
  constructor() {
    this.icons = {
      'glucose-fasting': {
        icon: 'icon-no-apple',
        label: makeTrans('Fasting'),
      },
      'glucose-pre-meal': {
        icon: 'icon-apple',
        label: makeTrans('Before meal'),
      },
      'glucose-pos-meal': {
        icon: 'icon-half-apple',
        label: makeTrans('Post meal'),
      },
    };
  }
}

const getClassifier = category => {
  if (category === GLUCOSE_CATEGORY) {
    return new GlucoseClassifier();
  }
  return undefined;
};

const formatValue = (value, code) => {
  if (!value || !code) {
    return undefined;
  }
  return code === codingMap.weight ? value.toFixed(2) : value.toFixed(0);
};

export class MeasurementTimeline {
  constructor(data) {
    this.id = data.id;
    this.category = data.code;
    this.code = data.code;
    this.device = data.device;
    this.unit = data.unit;
    this.value = formatValue(data.value, data.code);
    this.name = data.name;
    this.date = data.measured_at;
    this.color = data.color;
    this.icon = getIcon(data.code);
    this.classifier = getClassifier(data.code);
  }
}

export class DesiredWeight {
  constructor(measurement) {
    const heightPow = (measurement.value / 100) ** 2;

    this.min = 18 * heightPow;
    this.max = 25 * heightPow;
  }
}

export class ECGReading {
  constructor(reading) {
    this.id = reading[ECG_AFIB]?.uid;
    this.date = reading[ECG_AFIB]?.measured_at;
    this.title = reading[ECG_AFIB]?.severity_label;
    this.description = reading[ECG_AFIB]?.description;
    this.color = reading[ECG_AFIB]?.color;
    this.url = reading[ECG_CHART]?.svalue;
  }
}

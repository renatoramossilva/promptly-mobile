// GENERAL //
export const UUID = 0;
export const PROPERTY = 1;
export const MEASURED_WEIGHT_CONF = 36;
export const NAME = 0;
export const SERVICE = 1;
export const MTU = 247;

// GLUCOSE //
export const GENERIC_ACCESS_SERVICE = '00001800-0000-1000-8000-00805f9b34fb';
export const DEVICE_NAME_CHARACTERISTIC =
  '00002a00-0000-1000-8000-00805f9b34fb';

export const GLUCOSE_SERVICE = '00001808-0000-1000-8000-00805f9b34fb';
export const GLUCOSE_MEASUREMENT_CHARACTERISTIC = [
  '00002a18-0000-1000-8000-00805f9b34fb',
  'NOTIFY',
];
export const GLUCOSE_CONTEXT_CHARACTERISTIC = [
  '00002a34-0000-1000-8000-00805f9b34fb',
  'NOTIFY',
];
export const GLUCOSE_FEATURE_CHARACTERISTIC = [
  '00002a51-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const GLUCOSE_RACP_CHARACTERISTIC =
  '00002a52-0000-1000-8000-00805f9b34fb';

export const DEVICE_INFORMATION_SERVICE =
  '0000180a-0000-1000-8000-00805f9b34fb';
export const SYSTEM_ID_CHARACTERISTIC = [
  '00002a23-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const MODEL_NUMBER_CHARACTERISTIC = [
  '00002a24-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const SERIAL_NUMBER_CHARACTERISTIC = [
  '00002a25-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const FIRMWARE_REVISION_CHARACTERISTIC = [
  '00002a26-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const HARDWARE_REVISION_CHARACTERISTIC = [
  '00002a27-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const SOFTWARE_REVISION_CHARACTERISTIC = [
  '00002a28-0000-1000-8000-00805f9b34fb',
  'READ',
];
export const MANUFACTURER_NAME_CHARACTERISTIC = [
  '00002a29-0000-1000-8000-00805f9b34fb',
  'READ',
];

export const DEVICE_INFORMATION_SERVICE_GROUP = {
  service: DEVICE_INFORMATION_SERVICE,
  characteristics: {
    _MODEL_NUMBER_CHARACTERISTIC: MODEL_NUMBER_CHARACTERISTIC,
    _SERIAL_NUMBER_CHARACTERISTIC: SERIAL_NUMBER_CHARACTERISTIC,
    _FIRMWARE_REVISION_CHARACTERISTIC: FIRMWARE_REVISION_CHARACTERISTIC,
    _MANUFACTURER_NAME_CHARACTERISTIC: MANUFACTURER_NAME_CHARACTERISTIC,
  },
};

// SCALE //
export const BODY_DEVICE_INFORMATION_SERVICE_GROUP = {
  service: DEVICE_INFORMATION_SERVICE,
  characteristics: {
    _SERIAL_NUMBER_CHARACTERISTIC: SERIAL_NUMBER_CHARACTERISTIC,
    _HARDWARE_REVISION_CHARACTERISTIC: HARDWARE_REVISION_CHARACTERISTIC,
    _SOFTWARE_REVISION_CHARACTERISTIC: SOFTWARE_REVISION_CHARACTERISTIC,
  },
};

export const BLOOD_PRESURE_DEVICE_INFORMATION_SERVICE_GROUP = {
  service: DEVICE_INFORMATION_SERVICE,
  characteristics: {
    _MODEL_NUMBER_CHARACTERISTIC: MODEL_NUMBER_CHARACTERISTIC,
    _FIRMWARE_REVISION_CHARACTERISTIC: FIRMWARE_REVISION_CHARACTERISTIC,
    _MANUFACTURER_NAME_CHARACTERISTIC: MANUFACTURER_NAME_CHARACTERISTIC,
  },
};

export const BODY_COMPOSITION_SERVICE = '0000181b-0000-1000-8000-00805f9b34fb';
export const BODY_COMPOSITION_MEASUREMENT_CHARACTERISTIC = [
  '00002a9c-0000-1000-8000-00805f9b34fb',
  'INDICATE',
];

export const CURRENT_TIME_SERVICE = '00001805-0000-1000-8000-00805f9b34fb';
export const CURRENT_TIME_CHARACTERISTIC =
  '00002a2b-0000-1000-8000-00805f9b34fb';

// BLOOD PRESURE MONITOR
export const BLOOD_PRESURE_SERVICE = '00001810-0000-1000-8000-00805f9b34fb';
export const BLOOD_PRESURE_MEASUREMENT_CHARACTERISTIC = [
  '00002a35-0000-1000-8000-00805f9b34fb',
  'INDICATE',
];

// DEVICE FILTER //
export const ROCHE_ACCU_CHECK_925_FILTER = ['meter', [GLUCOSE_SERVICE]];
export const ASCENTIA_CONTOUR_NEXT_ONE_7801H_FILTER = [
  'Contour',
  [GLUCOSE_SERVICE],
];
export const XIAOMI_BC2_FILTER = ['MIBFS', [BODY_COMPOSITION_SERVICE]];
export const OMRON_M7_INTELLI_IT_FILTER = [
  'BLEsmart_',
  [BLOOD_PRESURE_SERVICE],
];

export const SERVICES = {
  GLUCOSE_SERVICE: GLUCOSE_SERVICE,
  BODY_COMPOSITION_SERVICE: BODY_COMPOSITION_SERVICE,
  BLOOD_PRESURE_SERVICE: BLOOD_PRESURE_SERVICE,
};
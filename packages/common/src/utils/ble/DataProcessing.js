import _ from 'lodash';

const Buffer = require('buffer/').Buffer;

export function createContextList(context) {
  const ID = 1;
  const CONTEXT_VALUE = 3;

  var context_list = [];

  context[0].map(item => {
    var values = Buffer.from(item, 'base64');

    context_list.push({key: values[ID], value: values[CONTEXT_VALUE]});
  });

  return context_list;
}

export async function createMeasurementList(measurements, context_list) {
  const ID = 1;
  const HOUR = 7;
  const MINUTE = 8;
  const SECOND = 9;
  const DAY = 6;
  const MONTH = 5;
  const YEAR1 = 3;
  const YEAR2 = 4;

  var measurements_list = [];

  measurements[0].map(async item => {
    var values = Buffer.from(item, 'base64');

    var year = parseInt(values[YEAR2]) * 256 + parseInt(values[YEAR1]);

    var dt =
      year +
      '-' +
      dateNumberFormat(values[MONTH]) +
      '-' +
      dateNumberFormat(values[DAY]) +
      'T' +
      dateNumberFormat(values[HOUR]) +
      ':' +
      dateNumberFormat(values[MINUTE]) +
      ':' +
      dateNumberFormat(values[SECOND]) +
      'Z';

    measurements_list.push({
      id: values[ID],
      value: await convertGlucoseConcentrationUnitToMgdL(values),
      meal: getMeal(values[ID], context_list),
      datetime: dt,
      timezone: '',
    });
  });

  return measurements_list;
}

export function getMeal(measurement_id, context_list) {
  var result = '';

  for (var [key, value] of Object.entries(context_list)) {
    //console.log(key + ' ' + value.key + " "+  value.value + " " + measurement_id);
    if (measurement_id === value.key) {
      result = value.value;
    }
  }
  return result;
}

export function infoDataFormat(data_list) {
  const MODEL_NUMBER_CHARACTERISTIC = 0;
  const SERIAL_NUMBER_CHARACTERISTIC = 1;
  const FIRMWARE_REVISION_CHARACTERISTIC = 2;
  //const SOFTWARE_REVISION_CHARACTERISTIC = 3
  const MANUFACTURER_NAME_CHARACTERISTIC = 3;
  var device = new Object();

  device.model = data_list[MODEL_NUMBER_CHARACTERISTIC];
  device.serial = data_list[SERIAL_NUMBER_CHARACTERISTIC];
  device.firmware = data_list[FIRMWARE_REVISION_CHARACTERISTIC];
  //device.software = data_list[SOFTWARE_REVISION_CHARACTERISTIC]
  device.manufacturer = data_list[MANUFACTURER_NAME_CHARACTERISTIC];

  return device;
}

export function measurementsDataFormat(
  ret_measurement_list,
  ret_info_list,
  type,
) {
  var measurements_list = [];
  ret_measurement_list.map(item => {
    measurements_list.push({
      device: ret_info_list,
      reading: item,
      type: type,
    });
  });
  return measurements_list;
}

export function convertIntegerToBinary(number) {
  const result = [];
  while (number != 0) {
    result.push(number % 2);
    number = (number / 2) | 0;
  }
  const answer = _.reverse(result.slice(0).reverse()).join('');
  return answer;
}

export async function convertGlucoseConcentrationUnitToMgdL(data) {
  //www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.glucose_measurement.xml
  var MEASUREMENT = 12;
  var FLAGS = 0;
  var BIT_INDEX = 2;
  var BINARY = 2;
  var MGDL = 0; // mg/dL
  var MMOLL = 1; // mmol/L

  try {
    let bit_key = Number(data[FLAGS]).toString(BINARY).padStart(4, '0');
    if (bit_key[BIT_INDEX] === MGDL) {
      return data[MEASUREMENT];
    } else if (bit_key[BIT_INDEX] === MMOLL) {
      return (data[MEASUREMENT] / 18).toFixed(1);
    } else {
      throw 'CouldNotReadGlucoseConcentrationUnit';
    }
  } catch (error) {
    throw error;
  }
}

function dateNumberFormat(n) {
  return String(n).padStart(2, '0');
}

export async function getWeightCollection(values) {
  /*
    Get the weight value e convert to kg (if that's the case).

    :param list values: Value data obtained from reading the "2A9C" characteristic (Body weight measurement in bluetooth gatt)

    :return: The weight value in kg.
    -----------------
    | SI | IMPERIAL |
    -----|-----------
    | Kg |   lbs    |
    -----------------
    i.e.
    {"weight": "71.2", "unit": "si"}

    or

    {"weight": "160.5", "unit": "imperial"}
    :rtype: dict
    */
  // https://www.bluetooth.com/wp-content/uploads/Sitecore-Media-Library/Gatt/Xml/Characteristics/org.bluetooth.characteristic.body_composition_measurement.xml
  const SI = 2;
  const IMPERIAL = 3;

  try {
    if (values[0] === SI) {
      return (values[12] * 256 + values[11]) * 0.005;
    } else if (values[0] === IMPERIAL) {
      return (values[12] * 256 + values[11]) * 0.01 * 0.45359237; // Convert pound to kg
    } else {
      throw 'CouldNotReadWeightValue';
    }
  } catch (error) {
    throw error;
  }
}

export async function bodyCompositionDataFormat(weight, ret_info_list) {
  var measurements_list = [];

  measurements_list.push({
    device: ret_info_list,
    value: weight,
    type: 'bodyComposition',
  });

  return measurements_list;
}

export async function bloodPressureDataFormat(values) {
  const SYSTOLIC = 1;
  const DIASLOTIC = 3;
  const HOUR = 11;
  const MINUTE = 12;
  const SECOND = 13;
  const DAY = 10;
  const MONTH = 9;
  const YEAR1 = 7;
  const YEAR2 = 8;
  const PULSE = 14;

  var year = parseInt(values[YEAR2]) * 256 + parseInt(values[YEAR1]);

  var dt =
    year +
    '-' +
    dateNumberFormat(values[MONTH]) +
    '-' +
    dateNumberFormat(values[DAY]) +
    'T' +
    dateNumberFormat(values[HOUR]) +
    ':' +
    dateNumberFormat(values[MINUTE]) +
    ':' +
    dateNumberFormat(values[SECOND]) +
    'Z';

  const measurement = {};

  measurement.systolic = values[SYSTOLIC];
  measurement.diastolic = values[DIASLOTIC];
  measurement.pulse = values[PULSE];
  measurement.datetime = dt;

  return measurement;
}

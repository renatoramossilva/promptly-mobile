import {makeTrans} from '../utils/translations';

export const bleErrors = {
  CouldNotGetBluetoothState: {
    title: makeTrans('Unable to check Bluetooth state'),
    message: makeTrans(
      "The bluetooth state could not be checked, please verify if your phone's bluetooth is enabled and try closing and relaunching the app.",
    ),
  },
  DeviceNotConnected: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans(
      'Please disconnect and reconnect it. Also check if it is correctly paired with your smartphone in Bluetooth settings.',
    ),
  },
  CouldNotGetCharacteristic: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans(
      'Could not get readings from the device. Please try again.',
    ),
  },
  DeviceNotFound: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans('Device not found. Please try again.'),
  },
  CouldNotConnectToDevice: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans(
      'Please disconnect and reconnect it. Also check if it is correctly paired with your smartphone in Bluetooth settings.',
    ),
  },
  CouldNotReadGlucoseMeasurements: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans(
      'Could not get readings from the device. Please try again.',
    ),
  },
  ErrorRequestingPassword: {
    title: makeTrans('Unable to connect to device'),
    message: makeTrans('Error requesting password. Please try again.'),
  },
  CouldNotReadGlucoseConcentrationUnit: {
    title: makeTrans('Unable to read the glucose concentration unit'),
    message: makeTrans(
      'It was not possible to read the glucose concentration unit.',
    ),
  },
  CouldNotReadWeightValue: {
    title: makeTrans('Unable to read the weight value'),
    message: makeTrans('It was not possible to read the weight value.'),
  },
};

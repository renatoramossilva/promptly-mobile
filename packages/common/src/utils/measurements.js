import {getAllFromLastId} from './ble/racp';
import {IDENTIFIER_TYPE_GLUCOMETER} from '../constants/devices';
import {
  MEASUREMENTS_CONNECTING,
  MEASUREMENTS_GETTING_DATA,
} from '../constants/messages';
import AsyncStorage from '@react-native-community/async-storage';
import {makeTrans} from './translations';

export const getDeviceInstance = async (
  activeItem,
  ble,
  showToast,
  t,
  bleErrors,
  silent = false,
) => {
  const {
    identifierSearchName,
    identifierSearchValue,
    identifierSearchService,
  } = activeItem;
  !silent &&
    showToast({
      title: t(MEASUREMENTS_CONNECTING.title),
      image: MEASUREMENTS_CONNECTING.image,
    });
  try {
    const device = await ble.deviceScan(
      identifierSearchName,
      identifierSearchValue,
      identifierSearchService,
    );
    return device;
  } catch (error) {
    !silent &&
      showToast({
        title: t(bleErrors[error].title),
        message: t(bleErrors[error].message),
      });
  }
};

export const autoConnDevice = async (ble, activeItem) => {
  /*
  Automatically connect as soon as the remote device becomes available and gets
  the unsynchronized measurements

  :param bool pin: Instance for ble library
  :param srt activeItem: Device identifier (Mac Address contained from the scanning process)

  :return: All the unsynchronized measurements for the indicated device
  :rtype: str
  */

  let result;
  await ble.checkAndConnect(activeItem.id, true).then(async () => {
    result = await getMeasurementsBackGround(ble, activeItem);
  });

  return result;
};

export const getMeasurementsBackGround = async (ble, activeItem) => {
  /*
  Get all the unsynchronized measurements

  :param bool pin: Instance for ble library
  :param srt activeItem: Device identifier (Mac Address contained from the scanning process)

  :return: All the unsynchronized measurements for the indicated device
  :rtype: str
  */
  try {
    let result;

    if (activeItem.type === IDENTIFIER_TYPE_GLUCOMETER) {
      const lastId = await AsyncStorage.getItem(
        `@lastmeasurementref-${activeItem.id}`,
      );
      const racpCommand = getAllFromLastId(lastId);
      result = await ble.readGlucoseMeasurements(activeItem, racpCommand);
    } else {
      result = await ble.readBloodPresureMeasurements(activeItem);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export const checkAndGetValues = async (
  activeItem,
  deviceInstance,
  ble,
  showToast,
  t,
  silent = false,
) => {
  try {
    if (deviceInstance.length <= 0) {
      throw 'CouldNotConnectToDevice';
    }
    await ble.checkAndConnect(deviceInstance[0].id);
    !silent &&
      showToast({
        title: t(MEASUREMENTS_GETTING_DATA.title),
        message: t(MEASUREMENTS_GETTING_DATA.message),
        image: t(MEASUREMENTS_GETTING_DATA.image),
      });

    let result;

    if (activeItem.type === IDENTIFIER_TYPE_GLUCOMETER) {
      const lastId = await AsyncStorage.getItem(
        `@lastmeasurementref-${deviceInstance[0].id}`,
      );
      const racpCommand = getAllFromLastId(lastId);
      result = await ble.readGlucoseMeasurements(
        deviceInstance[0],
        racpCommand,
      );
    } else {
      result = await ble.readBloodPresureMeasurements(deviceInstance[0]);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export const getIcon = (code) => {
  switch (code) {
    case '15074-8':
    case 'glucose-pre-meal':
      return {
        class: 'icon-apple',
        label: makeTrans('Before meal'),
      };
    case 'glucose-pos-meal':
      return {
        class: 'icon-half-apple',
        label: makeTrans('Post meal'),
      };
    case 'glucose-fasting':
      return {
        class: 'icon-no-apple',
        label: makeTrans('Fasting'),
      };
    default:
      return undefined;
  }
};

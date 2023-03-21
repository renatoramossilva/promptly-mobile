import {FETCH_DEVICES, QUERY_DEVICES, RESET_STATE} from '../actions/types';
import {
  IDENTIFIER_TYPE_GLUCOMETER,
  IDENTIFIER_TYPE_SCALE,
  IDENTIFIER_TYPE_TENSIOMETER,
} from '../constants/devices';
import Device from '../models/Device';

const INITIAL_STATE = {
  loading: true,
  result: {
    linked: [],
    syncable: [],
    available: [],
    scale: [],
    glucometer: [],
    tensiometer: [],
  },
};

const getFirstDeviceOfType = (items, type) => {
  return items
    ? items.filter((item) => item.connected && item.identifier.type === type)
    : [];
};

const getAvailableDevices = (items) => {
  const usedDevicesTypes = items
    ? items
        .filter((item) => {
          return item.connected && item.identifier.type;
        })
        .map((item) => item.identifier.type)
    : [];

  return items
    ? items.filter((item) => {
        return (
          !item.connected &&
          !usedDevicesTypes.includes(item.identifier.type) &&
          (item.identifier.search_service || item.provider_type !== 'bluetooth')
        );
      })
    : [];
};

const getLinkedDevices = (items) =>
  items
    ? items.filter((item) => item.connected).map((item) => new Device(item))
    : [];

const getSyncableDevices = (items) =>
  items
    ? items
        .filter(
          (item) =>
            item.connected &&
            item.identifier &&
            item.identifier.search_service &&
            item.identifier.history,
        )
        .map((item) => new Device(item))
    : [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DEVICES:
      return {
        result:
          {
            linked: getLinkedDevices(action.payload),
            syncable: getSyncableDevices(action.payload),
            available: getAvailableDevices(action.payload),
            scale: getFirstDeviceOfType(action.payload, IDENTIFIER_TYPE_SCALE),
            glucometer: getFirstDeviceOfType(
              action.payload,
              IDENTIFIER_TYPE_GLUCOMETER,
            ),
            tensiometer: getFirstDeviceOfType(
              action.payload,
              IDENTIFIER_TYPE_TENSIOMETER,
            ),
          } || state,
        loading: false,
      };

    case QUERY_DEVICES:
      return {
        ...INITIAL_STATE,
      };

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}

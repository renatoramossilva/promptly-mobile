import {createSelector} from 'reselect';

export const getDevices = state => state.devices.result || {};

export const getSyncableDevices = createSelector([getDevices], devices =>
  devices && devices.syncable ? devices.syncable : undefined,
);

export const getLinkedDevices = createSelector([getDevices], devices =>
  devices && devices.linked ? devices.linked : undefined,
);

export const getLinkedDeviceType = type =>
  createSelector([getLinkedDevices], devices =>
    devices.filter(item => item.type === type),
  );

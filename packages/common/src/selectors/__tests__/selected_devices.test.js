import {mockedDevices} from '../../__mocks__/devices';
import {
  getDevices,
  getSyncableDevices,
  getLinkedDevices,
} from '../selected_devices';

const state = {
  devices: mockedDevices,
};

describe('test session selectors', () => {
  test('getDevices', () => {
    expect(getDevices(state)).toEqual(state.devices.result);
  });

  test('empty getDevices', () => {
    expect(getDevices({devices: {}})).toEqual({});
  });

  test('getSyncableDevices', () => {
    expect(getSyncableDevices(state)).toEqual(state.devices.result.syncable);
  });

  test('empty getSyncableDevices', () => {
    expect(getSyncableDevices({devices: {}})).toEqual(undefined);
  });

  test('getLinkedDevices', () => {
    expect(getLinkedDevices(state)).toEqual(state.devices.result.linked);
  });

  test('empty getLinkedDevices', () => {
    expect(getLinkedDevices({devices: {}})).toEqual(undefined);
  });
});

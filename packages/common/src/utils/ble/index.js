/**
 * This is a library to provide BLE (Bluetooth Low Energy) services to Promptly App.
 * Here you can find information like Scan, Connect, Read/Write addition to
 * others services related to ble services.
 * Further informations: https://dotintent.github.io/react-native-ble-plx/
 */
import {BleManager, ScanMode} from 'react-native-ble-plx';
import base64 from 'react-native-base64';
import struct from 'python-struct';
import {
  SERVICES,
  BODY_DEVICE_INFORMATION_SERVICE_GROUP,
  MEASURED_WEIGHT_CONF,
  PROPERTY,
  UUID,
  DEVICE_INFORMATION_SERVICE,
  GLUCOSE_RACP_CHARACTERISTIC,
  DEVICE_INFORMATION_SERVICE_GROUP,
  GLUCOSE_SERVICE,
  GLUCOSE_CONTEXT_CHARACTERISTIC,
  BODY_COMPOSITION_SERVICE,
  BODY_COMPOSITION_MEASUREMENT_CHARACTERISTIC,
  GLUCOSE_MEASUREMENT_CHARACTERISTIC,
  BLOOD_PRESURE_DEVICE_INFORMATION_SERVICE_GROUP,
  BLOOD_PRESURE_SERVICE,
  BLOOD_PRESURE_MEASUREMENT_CHARACTERISTIC,
  SERIAL_NUMBER_CHARACTERISTIC,
  MTU,
} from './strings.js';
import {
  infoDataFormat,
  measurementsDataFormat,
  createContextList,
  createMeasurementList,
  getWeightCollection,
  bodyCompositionDataFormat,
  bloodPressureDataFormat,
} from './DataProcessing.js';
import {Buffer} from 'buffer';

export default class Ble extends BleManager {
  constructor(props) {
    super(props);
    this.bleScanning = false;
  }

  /**
   * Starts device scanning
   * @param {string} filterName Device property to be used in the scan
   * @param {string} filterValue Device info provided by ble advertisement
   * @param {string} service Will be shown only devices that provide this service
   * @return {array} List of devices found
   */
  deviceScan(filterName, filterValue, service) {
    let foundDevices = [];
    return new Promise((resolve, reject) => {
      const subscription = this.onStateChange(state => {
        if (state === 'PoweredOn') {
          setTimeout(() => {
            if (this.bleScanning) {
              this.stopDeviceScan();
              resolve({stop: true});
            }
          }, 15000);

          this.startDeviceScan(
            [SERVICES[service]],
            {scanMode: ScanMode.LowLatency},
            (error, device) => {
              this.bleScanning = true;

              if (error) {
                this.stopDeviceScan();
                reject(error);
              }

              if (
                device !== null &&
                device[filterName] &&
                device[filterName]
                  .toLowerCase()
                  .startsWith(filterValue.toLowerCase()) &&
                !foundDevices.some(
                  e => e && e.name && device && e.name === device.name,
                )
              ) {
                foundDevices.push(device);
              }
            },
          );

          setTimeout(() => {
            this.stopDeviceScan();
            this.bleScanning = false;
            subscription.remove();
            resolve(foundDevices);
          }, 5000);
        }
      }, true);
    });
  }

  /**
   * {Ble} devices should present the following states
   * {Unknown}  The current state of the manager is unknown; an update is imminent.
   * {Resetting}  The connection with the system service was momentarily lost; an update is imminent.
   * {Unsupported}  The platform does not support Bluetooth low energy.
   * {Unauthorized}  The app is not authorized to use Bluetooth low energy.
   * {PoweredOff}  Bluetooth is currently powered off.
   * {PoweredOn}  Bluetooth is currently powered on and available to use.
   */
  getBleState() {
    return new Promise(async (resolve, reject) => {
      try {
        this.state().then(currentState => {
          resolve(currentState);
        });
      } catch (error) {
        reject('CouldNotGetBluetoothState');
      }
    });
  }

  /**
   * Get Ble device state
   * @return {string} Ble device state
   */
  // TODO: Check if its possible join getBleState into this func
  checkBleState(state) {
    return new Promise((resolve, reject) => {
      this.getBleState()
        .then(currentState => {
          resolve(currentState === state);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * List all characteristics available on the device for a specific service
   * @param {string} device Device object instance (Obtained from the scanning process)
   * @param {string} service Ble service UUID
   * @return {array} List of characteristics
   */
  getCharacteristicsList(device, service) {
    var charac_list = [];
    return new Promise(resolve => {
      this.discoverAllServicesAndCharacteristicsForDevice(device.id).then(
        () => {
          this.characteristicsForDevice(device.id, service).then(ch => {
            ch.map(item => {
              charac_list.push(item.uuid);
            });

            resolve(charac_list);
          });
        },
      );
    });
  }

  /**
   * This function should be called always that a device requests a pincto connect to him
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   */
  async requestPasswd(deviceId) {
    try {
      await this.discoverAllServicesAndCharacteristicsForDevice(deviceId);
      await this.servicesForDevice(deviceId).catch(error => {
        throw error;
      });
      this.monitorCharacteristicForDevice(
        deviceId,
        GLUCOSE_SERVICE,
        GLUCOSE_MEASUREMENT_CHARACTERISTIC[0],
        () => {},
      );
    } catch (error) {
      throw 'ErrorRequestingPassword';
    }
  }

  /**
   * Connects to Device with the provided ID.
   * @param {string} deviceId Device identifier (Mac Address obtained from the scanning process)
   * @param {bool} pin True if the device requires password to connect
   * @param {string} deviceType Device type to be connected
   * @param {bool} autoConn Automatically connect as soon as the remote device becomes available
   */
  async connectDevice(
    deviceId,
    pin = false,
    deviceType = undefined,
    autoConn = false,
  ) {
    const typeReading = {
      tensiometer: 'readBloodPresureMeasurements',
    };

    try {
      if (deviceType && typeReading[deviceType]) {
        const deviceInst = await this.connectToDevice(deviceId, {
          requestMTU: MTU,
          autoConnect: autoConn,
        });
        await this[typeReading[deviceType]](deviceInst, true);
      } else {
        await this.connectToDevice(deviceId, {
          requestMTU: MTU,
          autoConnect: autoConn,
        });
      }

      if (pin) {
        await this.requestPasswd(deviceId);
      }
    } catch (error) {
      await this.cancelDeviceConnection(deviceId);
      throw 'CouldNotConnectToDevice';
    }
  }

  /**
   * Check the connection state of a Ble device.
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   * @return {bool} Ble device status
   */
  async isConnected(deviceId) {
    try {
      const status = await this.isDeviceConnected(deviceId);
      return status;
    } catch (error) {
      throw 'DeviceNotConnected';
    }
  }

  /**
   * Read seiral number from ble device
   * @param {string} deviceId Device identifier (Mac Address obtained from the scanning process)
   * @return {string} Ble device serial number
   */
  async getSerialNumber(deviceId) {
    let ret = false;
    try {
      await this.discoverAllServicesAndCharacteristicsForDevice(deviceId).then(
        async () => {
          await this.readCharacteristicForDevice(
            deviceId,
            DEVICE_INFORMATION_SERVICE,
            SERIAL_NUMBER_CHARACTERISTIC[UUID],
          ).then(async () => {
            ret = true;
          });
        },
      );
      return ret;
    } catch (error) {
      return null;
    }
  }

  /**
   * Disconnect the device
   * @param {string} deviceId Device identifier (Mac Address ontained from the scanning process)
   */
  async disconnectDevice(deviceId) {
    const deviceStatus = await this.isConnected(deviceId);
    if (deviceStatus === true) {
      await this.cancelDeviceConnection(deviceId);
    } else {
      throw 'DeviceNotConnected';
    }
  }

  structAndEncode(coding, values) {
    let data = struct.pack(coding, values);
    const dataInBase64 = Buffer.from(data).toString('base64');
    return dataInBase64;
  }

  /**
   * Record Access Control Point (RACP) is a BLE mechanism that allows write
   * to BLE devices intending to get some information from this device.
   * @param {string} device Device object instance (Obtained from the scanning process)
   * @param {string} service Ble service UUID
   * @param {string} racpCommand Data to be writen into the device
   */
  racp(device, service, racpCommand) {
    this.characteristicsForDevice(device.id, service).then(() => {
      try {
        const dataInBase64 = this.structAndEncode(
          racpCommand.format,
          racpCommand.values,
        );

        this.writeCharacteristicWithResponseForDevice(
          device.id,
          service,
          GLUCOSE_RACP_CHARACTERISTIC,
          dataInBase64,
        );
      } catch (err) {
        console.log('Error (write): ' + err);
      }
    });
  }

  /**
   * Read device info regarding a provided service/characteristic
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   * @param {string} service Ble service UUID
   * @param {string} characteristic Ble characteristic UUID
   * @param {string} racpCommand Data to be writen into the device just in case necessary to read a characterists that requests RACP
   * @return {array} List of values read from a group of service/characteristic provided
   */
  getBleServiceData(device, service, characteristic, racpCommand) {
    let ret_list = [];
    return new Promise((resolve, reject) => {
      if (device) {
        this.isDeviceConnected(device.id).then(status => {
          if (status === true) {
            this.discoverAllServicesAndCharacteristicsForDevice(device.id).then(
              async () => {
                if (racpCommand) {
                  await this.monitorCharacteristicForDevice(
                    device.id,
                    service,
                    GLUCOSE_MEASUREMENT_CHARACTERISTIC[0],
                    () => {},
                  );
                  await this.monitorCharacteristicForDevice(
                    device.id,
                    service,
                    GLUCOSE_CONTEXT_CHARACTERISTIC[0],
                    () => {},
                  );
                  await this.monitorCharacteristicForDevice(
                    device.id,
                    service,
                    GLUCOSE_RACP_CHARACTERISTIC,
                    () => {},
                  );
                  this.racp(device, service, racpCommand);
                }
                if (characteristic) {
                  if (characteristic[PROPERTY] == 'READ') {
                    this.readCharacteristicForDevice(
                      device.id,
                      service,
                      characteristic[UUID],
                    ).then(async data => {
                      try {
                        if (data && data.value) {
                          var decodedValue = base64.decode(data.value);
                          resolve(decodedValue);
                        }
                        throw 'CouldNotGetCharacteristic';
                      } catch (error) {
                        throw 'CouldNotGetCharacteristic';
                      }
                    });
                  } else if (
                    characteristic[PROPERTY] == 'NOTIFY' ||
                    characteristic[PROPERTY] == 'INDICATE'
                  ) {
                    var subscription = this.monitorCharacteristicForDevice(
                      device.id,
                      service,
                      characteristic[UUID],
                      async (err, data) => {
                        if (err) {
                          reject(err);
                        }
                        if (data && data.value) {
                          ret_list.push(data.value);
                        }
                        setTimeout(() => {
                          subscription.remove();
                          resolve(ret_list);
                        }, 5000);
                      },
                    );
                  }
                }
              },
            );
          } else {
            reject('DeviceNotConnected');
          }
        });
      } else {
        reject('DeviceNotFound');
      }
    });
  }

  /**
   * Get scale Data/Info
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   * @return {array} Data list read from scale
   */
  async readBodyCompositionMeasurements(device) {
    let infodata_list = [];
    let data = '';
    try {
      for (var key in BODY_DEVICE_INFORMATION_SERVICE_GROUP.characteristics) {
        await this.getBleServiceData(
          device,
          BODY_DEVICE_INFORMATION_SERVICE_GROUP.service,
          BODY_DEVICE_INFORMATION_SERVICE_GROUP.characteristics[key],
        ).then(device_info => {
          infodata_list.push(device_info);
        });
      }

      const ret_info_list = infoDataFormat(infodata_list);
      return await new Promise((resolve, reject) => {
        this.discoverAllServicesAndCharacteristicsForDevice(device.id).then(
          results => {
            this.servicesForDevice(device.id)
              .then(async services => {
                this.monitorCharacteristicForDevice(
                  device.id,
                  BODY_COMPOSITION_SERVICE,
                  BODY_COMPOSITION_MEASUREMENT_CHARACTERISTIC[0],
                  async (error, characteristic) => {
                    try {
                      if (error) {
                        throw error;
                      }
                      const values = Buffer.from(
                        characteristic.value,
                        'base64',
                      );
                      if (values[1] === MEASURED_WEIGHT_CONF) {
                        data = await getWeightCollection(values);
                        resolve(bodyCompositionDataFormat(data, ret_info_list));
                      }
                    } catch (err) {
                      reject(err);
                    }
                  },
                );
              })
              .catch(error => {
                reject(error);
              });
          },
        );
      });
    } catch (error) {
      throw error;
    } finally {
      this.disconnectDevice(device.id);
    }
  }

  /**
   * Read values from glucometers devices
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   * @param {string} racpCommand Data to be written into the device just in case necessary to read a characterists that requests RACP
   * @return {array} Data list read from glucometer
   */
  async readGlucoseMeasurements(device, racpCommand) {
    try {
      var infodata_list = [];
      var context_list = [];
      var measurements_list = [];

      for (var key in DEVICE_INFORMATION_SERVICE_GROUP.characteristics) {
        await this.getBleServiceData(
          device,
          DEVICE_INFORMATION_SERVICE_GROUP.service,
          DEVICE_INFORMATION_SERVICE_GROUP.characteristics[key],
          racpCommand,
        ).then(device_info => {
          infodata_list.push(device_info);
        });
      }

      var ret_info_list = await infoDataFormat(infodata_list);

      await this.getBleServiceData(
        device,
        GLUCOSE_SERVICE,
        GLUCOSE_CONTEXT_CHARACTERISTIC,
        racpCommand,
      ).then(context_info => {
        context_list.push(context_info);
      });

      var ret_context_list = await createContextList(context_list);

      await this.getBleServiceData(
        device,
        GLUCOSE_SERVICE,
        GLUCOSE_MEASUREMENT_CHARACTERISTIC,
        racpCommand,
      ).then(measurements => {
        measurements_list.push(measurements);
      });

      var ret_measurement_list = await createMeasurementList(
        measurements_list,
        ret_context_list,
      );
      return measurementsDataFormat(
        ret_measurement_list,
        ret_info_list,
        'glucometer',
      );
    } catch (error) {
      throw 'CouldNotReadGlucoseMeasurements';
    } finally {
      this.disconnectDevice(device.id);
    }
  }

  /**
   * Check device connection status and connect to it
   * @param srt deviceId Device identifier (Mac Address contained from the scanning process)
   * @param bool autoConn Automatically connect as soon as the remote device becomes available
   * @return {bool} True if device is connected
   */
  async checkAndConnect(deviceId, autoConn = false) {
    try {
      let deviceStatus = await this.isConnected(deviceId);
      if (deviceStatus === false) {
        await this.connectDevice(deviceId, autoConn);
        deviceStatus = await this.isConnected(deviceId);
        if (deviceStatus === true) {
          return true;
        } else {
          //throw 'DeviceNotConnected';
        }
      } else {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Read values from blood presure monitors devices
   * @param {string} device Device identifier (Mac Address obtained from the scanning process)
   * @param {string} noRead
   * @return {array} Data list read from blood presure monitor
   */
  async readBloodPresureMeasurements(device, noRead = false) {
    var infodata_list = [];

    try {
      for (var key in BLOOD_PRESURE_DEVICE_INFORMATION_SERVICE_GROUP.characteristics) {
        await this.getBleServiceData(
          device,
          BLOOD_PRESURE_DEVICE_INFORMATION_SERVICE_GROUP.service,
          BLOOD_PRESURE_DEVICE_INFORMATION_SERVICE_GROUP.characteristics[key],
        )
          .then(device_info => {
            infodata_list.push(device_info);
          })
          .catch(error => {
            console.log(error);
          });
      }

      const device_info_BP = await infoDataFormat(infodata_list);

      return await new Promise((resolve, reject) => {
        this.discoverAllServicesAndCharacteristicsForDevice(device.id).then(
          results => {
            this.servicesForDevice(device.id).then(async services => {
              const measurements = [];
              this.monitorCharacteristicForDevice(
                device.id,
                BLOOD_PRESURE_SERVICE,
                BLOOD_PRESURE_MEASUREMENT_CHARACTERISTIC[UUID],
                async (err, characteristic) => {
                  try {
                    if (noRead) {
                      return;
                    }
                    if (err) {
                      throw err;
                    }
                    const values = Buffer.from(characteristic.value, 'base64');
                    var measurements_BP = await bloodPressureDataFormat(values);
                    measurements.push(measurements_BP);
                  } catch (error) {
                    console.log('readBloodPresureMeasurements::ERROR', error);
                    //device.cancelConnection();
                    //reject(err);
                  }
                },
              );
              setTimeout(() => {
                if (noRead) {
                  resolve();
                  return;
                }
                const measurementsArr = measurementsDataFormat(
                  measurements,
                  device_info_BP,
                  'tensiometer',
                );
                resolve(measurementsArr);
              }, 5000);
            });
          },
        );
      });
    } catch (error) {
      throw error;
      // } finally {
      //   this.disconnectDevice(device.id);
    }
  }
}

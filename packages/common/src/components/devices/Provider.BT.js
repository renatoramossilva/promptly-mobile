import Axios from 'utils/axios';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {List, Text} from '@ui-kitten/components';
import {ScrollView, useWindowDimensions} from 'react-native';
import {clickDevicePairingAction} from 'actions/datacollection';
import StatusBanner from '../common/StatusBanner';
import DevicesItem from './Devices.Item';
import {DevicesStyles} from './Devices.Styles';
import {bleErrors} from '../../constants/bleErrors';
import {
  DEVICES_IMAGE_MARGIN,
  DEVICES_IMAGE_RATIO,
} from '../../constants/devices';
import {NavigatorStyles} from '../../navigation/Navigator.Styles';
import {getImageAbsoluteUrl} from 'utils';

const renderImage = (list, key) =>
  list[key]?.img_url
    ? {uri: getImageAbsoluteUrl(list[key].img_url)}
    : require('../../images/img-search-device.png');

const ProviderBT = props => {
  const {item, ble} = props.route.params;
  const {steps} = item;
  const {t} = useTranslation();
  const {width} = useWindowDimensions();
  const [status, setStatus] = useState(false);
  const [foundDevices, setFoundDevices] = useState([]);

  useEffect(() => {
    if (foundDevices.length === 1) {
      const device = foundDevices[0];
      device.pin = item.pin;
      connectAndPairDevice(device);
    }
  }, [foundDevices]);

  useEffect(() => {
    props.navigation.setOptions({
      title: <Text style={NavigatorStyles.title}>{item.name}</Text>,
    });
    showIntro();
  }, []);

  const onContinue = () => {
    props.onClickDevicePairingAction({
      deviceName: item.name,
      deviceAction: 'continue_pairing',
    });

    checkAndScan();
  };

  const onRetry = () => {
    props.onClickDevicePairingAction({
      deviceName: item.name,
      deviceAction: 'retry_pairing',
    });

    showIntro();
  };

  const providerDeviceScan = async (name, value, service) => {
    try {
      setStatus({
        image: renderImage(steps, 'searching'),
        title: t('Searching for devices...'),
        loading: true,
      });
      setFoundDevices([]);

      let result = await ble.deviceScan(name, value, service);
      setStatus(
        result === undefined || result.length === 0
          ? {
              image: renderImage(steps, 'notfound'),
              title: t('No devices found.'),
              subtitle: t('Please try again'),
              button: {
                label: t('Retry'),
                action: onRetry,
              },
            }
          : {
              image: renderImage(steps, 'found'),
              title: t('Found devices'),
              loading: false,
            },
      );
      setFoundDevices(result);
    } catch (error) {
      setStatus({
        title: t('Oops something went wrong. Please try again'),
        button: {
          label: t('Retry'),
          action: onRetry,
        },
      });
    }
  };

  const connectAndPairDevice = async device => {
    let inserted_pin = false;
    const {url, name} = item;
    setFoundDevices([]);
    setStatus({
      image: renderImage(steps, 'pairing'),
      title: t('Pairing with'),
      subtitle: name,
      loading: true,
    });

    try {
      let deviceStatus = await ble.isConnected(device.id);
      if (deviceStatus === false) {
        await ble.connectDevice(device.id, device.pin, device.type);
        if (device.pin) {
          setStatus({
            image: renderImage(steps, 'pin'),
            title: t('Waiting for pin'),
            subtitle: t(
              'Accept and type pairing device pin code on your smartphone notification',
            ),
            loading: false,
          });
          inserted_pin = await ble.getSerialNumber(device.id);
        }

        deviceStatus = await ble.isConnected(device.id);

        if (deviceStatus === true && inserted_pin === device.pin) {
          const options = {
            method: 'post',
            url: url,
            data: {identifier: device.id},
            withCredentials: true,
          };

          await Axios(options)
            .then(() => {
              ble.cancelDeviceConnection(device.id);
              setStatus({
                image: renderImage(steps, 'success'),
                title: t('Device added'),
                subtitle: steps.success?.subtitle
                  ? steps.success.subtitle
                  : t(
                      'Your device was successfully added added to Promptly app and smartphone',
                    ),
                button: {
                  label: t('Continue'),
                  action: () => {
                    props.navigation.navigate('Devices', {
                      reload: true,
                    });
                  },
                },
              });
            })
            .catch(error => {
              if (error.response.status === 400) {
                throw error.response.data;
              }
              throw t('Something went wrong, try again');
            });
        } else {
          if (device.pin === true && inserted_pin === false) {
            throw t('Pin not entered');
          } else {
            throw t('Device not connected.');
          }
        }
      } else {
        throw t('Device already connected.');
      }
    } catch (error) {
      setStatus({
        image: renderImage(steps, 'error'),
        title: renderErrorTitle(error),
        button: {
          label: t('Retry'),
          action: onRetry,
        },
      });
    }
  };

  const checkAndScan = () => {
    setStatus({});
    ble
      .checkBleState('PoweredOn')
      .then(isOn => {
        return isOn
          ? providerDeviceScan(
              item.identifierSearchName,
              item.identifierSearchValue,
              item.identifierSearchService,
            )
          : setStatus({
              image: require('../../images/img-bt-off.png'),
              title: t('Please turn on the smartphone bluetooth'),
              button: {
                label: t('Retry'),
                action: onRetry,
              },
            });
      })
      .catch(() => {
        setStatus({
          title: t('Oops something went wrong. Please try again'),
          button: {
            label: t('Retry'),
            action: onRetry,
          },
        });
      });
  };

  const showIntro = () => {
    setStatus({
      image: renderImage(steps, 'intro'),
      title: t('Pairing mode'),
      subtitle: steps.intro?.subtitle
        ? steps.intro.subtitle
        : t(
            'If needed, place your bluetooth device in pairing mode (see its manual). If asked, enter the pairing code indicated in the equipment.',
          ),
      button: {
        label: t('Continue'),
        action: onContinue,
      },
    });
  };

  const renderErrorTitle = error => {
    if (typeof error === 'object') {
      return t('Something went wrong, try again');
    }
    return bleErrors[error] ? t(bleErrors[error].title) : error;
  };

  const renderDevice = device => {
    device.item.name = item.name;
    device.item.description = item.description;
    device.item.avatarUrl = item.avatarUrl;
    device.item.pin = item.pin;
    device.item.type = item.type;

    return (
      <DevicesItem
        device={device.item}
        navigation={props.navigation}
        itemPress={connectAndPairDevice.bind(this)}
      />
    );
  };

  const renderList = () => {
    return (
      <List
        ListHeaderComponent={renderStatus()}
        style={DevicesStyles.devicesList}
        contentContainerStyle={DevicesStyles.devicesListContainer}
        data={foundDevices}
        renderItem={renderDevice}
        keyExtractor={device => device.id}
      />
    );
  };

  const renderStatus = () => {
    if (Object.keys(status).length > 0 && status.constructor === Object) {
      return (
        <ScrollView>
          <StatusBanner
            status={status}
            style={DevicesStyles.container}
            innerStyles={{
              image: {
                width: width - DEVICES_IMAGE_MARGIN,
                height: (width - DEVICES_IMAGE_MARGIN) / DEVICES_IMAGE_RATIO,
                resizeMode: 'contain',
              },
            }}
          />
        </ScrollView>
      );
    }
  };

  return <>{foundDevices.length > 1 ? renderList() : renderStatus()}</>;
};

const mapDispatchToProps = {
  onClickDevicePairingAction: clickDevicePairingAction,
};

export default connect(null, mapDispatchToProps)(ProviderBT);

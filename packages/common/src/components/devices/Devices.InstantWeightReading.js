import React, {Component} from 'react';
import {Layout} from '@ui-kitten/components';
import {withTranslation} from 'react-i18next';
import StatusBanner from '../common/StatusBanner';
import Button from '../common/Button';
import {DevicesInstantWeightReadingStyles} from './Devices.Styles';
import {connect} from 'react-redux';
import {
  storeMeasurements,
  sendBufferMeasurements,
} from 'actions/measurements';

class DevicesInstantWeightReading extends Component {
  constructor(props) {
    super(props);
    this.ble = props.route.params.ble;
    this.item = props.route.params.item;
    this.t = this.props.t;

    this.initialStatus = {
      image: require('../../images/img-notification-scale.png'),
      title: this.item.name,
      subtitle: this.t('Initializing scale'),
      loading: true,
      loadingStyle: {marginTop: -18, position: 'absolute'},
    };

    this.state = {
      status: this.initialStatus,
      result: undefined,
      activeDevice: undefined,
      activeDeviceInstance: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.item.name,
    });
    this.getReading();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeDeviceInstance !== this.state.activeDeviceInstance) {
      this.getReading();
    }
  }

  componentWillUnmount() {
    const {activeDevice} = this.state;
    if (activeDevice) {
      activeDevice.cancelConnection();
    }
  }

  getReading = async () => {
    this.setState({
      status: this.initialStatus,
      result: undefined,
      activeDevice: undefined,
    });

    try {
      const isOn = await this.ble.checkBleState('PoweredOn');
      if (!isOn) {
        return this.setState({
          status: {
            image: require('../../images/img-bt-off.png'),
            title: this.t('Please turn on the smartphone bluetooth'),
            button: {
              label: this.t('Retry'),
              action: this.getReading,
            },
          },
        });
      }

      if (!this.state.activeDeviceInstance.length) {
        const {
          identifierSearchName,
          identifierSearchValue,
          identifierSearchService,
        } = this.item;

        const device = await this.ble.deviceScan(
          identifierSearchName,
          identifierSearchValue,
          identifierSearchService,
        );

        if (device.length > 0) {
          this.setState({
            activeDeviceInstance: device,
          });
        } else {
          throw this.t('Device not connected.');
        }
      } else {
        const deviceInst = this.state.activeDeviceInstance[0];
        await this.ble.checkAndConnect(deviceInst.id);
        this.setState({
          activeDevice: deviceInst,
          status: {
            image: require('../../images/img-notification-scale.png'),
            title: this.t('Ready'),
            subtitle: this.t('Please place yourself on the scale'),
          },
        });

        await this.ble
          .readBodyCompositionMeasurements(deviceInst)
          .then((BTresult) => {
            const weightValue = BTresult[0].value.toFixed(2);
            BTresult[0].measured_at = new Date().toISOString();
            this.setState({
              result: BTresult[0],
              status: {
                image: require('../../images/img-notification-scale.png'),
                title: `${weightValue} kg`,
                subtitle: this.t('Your weight'),
              },
            });
            this.state.activeDevice.cancelConnection();
          })
          .catch((error) => {
            this.state.activeDevice.cancelConnection();
            throw error;
          });
      }
    } catch (error) {
      this.setState({
        status: {
          image: require('../../images/img-notification-scale.png'),
          title: this.item.name,
          subtitle: error,
          button: {
            label: this.t('Retry'),
            action: this.getReading,
          },
        },
      });
    }
  };

  render() {
    try {
      const {status, result} = this.state;
      return (
        <Layout style={DevicesInstantWeightReadingStyles.container}>
          {status && <StatusBanner status={status} />}
          {result && (
            <Layout style={DevicesInstantWeightReadingStyles.buttonHolder}>
              <Button
                status="basic"
                style={DevicesInstantWeightReadingStyles.button}
                onPress={() => {
                  this.getReading();
                }}>
                {this.t('Retry')}
              </Button>
              <Button
                style={DevicesInstantWeightReadingStyles.button}
                onPress={async () => {
                  try {
                    await this.props.storeMeasurements(this.item, [result]);
                    const {url, jwt} = this.props.patient.measurements;
                    await this.props.sendBufferMeasurements(
                      [this.item],
                      url,
                      jwt,
                    );
                    this.props.navigation.goBack(null);
                  } catch (error) {
                    this.props.navigation.goBack(null);
                  }
                }}>
                {this.t('Save')}
              </Button>
            </Layout>
          )}
        </Layout>
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
const mapStateToProps = ({patient}) => {
  return {patient};
};

const mapDispatchToProps = {
  storeMeasurements,
  sendBufferMeasurements,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(DevicesInstantWeightReading));

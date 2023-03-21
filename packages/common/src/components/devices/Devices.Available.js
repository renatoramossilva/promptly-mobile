import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, Layout} from '@ui-kitten/components';
import DevicesItem from './Devices.Item';
import {DevicesStyles} from './Devices.Styles';
import LoadingScreen from '../common/LoadingScreen';
import Device from '../../models/Device';
import {clickAddDeviceItem} from 'actions/datacollection';

class DevicesAdd extends Component {
  constructor(props) {
    super(props);
    this.integrationsMap = {
      oauth: 'OauthProvider',
      oauth2: 'OauthProvider',
      form: 'FormProvider',
      bluetooth: 'BluetoothProvider',
    };
  }

  render() {
    try {
      if (this.props.loading) {
        return <LoadingScreen />;
      }
      const connectDevice = item => {
        const {providerType} = item;
        const provider = this.integrationsMap[providerType];

        this.props.onClickAddDeviceItem({deviceName: item?.name});
        this.props.navigation.navigate('DevicesConnect', {
          item: item,
          provider: provider,
        });
      };

      const renderItem = item => (
        <DevicesItem device={new Device(item.item)} itemPress={connectDevice} />
      );

      return (
        <Layout>
          <List
            style={DevicesStyles.devicesList}
            contentContainerStyle={DevicesStyles.devicesListContainer}
            data={this.props.available}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        </Layout>
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

const mapStateToProps = ({devices}) => {
  const {result, loading} = devices;
  const {available} = result;
  return {available, loading};
};

const mapDispatchToProps = {
  onClickAddDeviceItem: clickAddDeviceItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(DevicesAdd);

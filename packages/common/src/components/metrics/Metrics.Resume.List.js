import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Layout} from '@ui-kitten/components';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getLinkedDevices} from 'selectors/selected_devices';
import MetricsResumeItem from './Metrics.Resume.Item';
import {MetricsResumeListStyles} from './Metrics.Styles';
import GlucoseIcon from 'components/common/GlucoseIcon';
import DashboardMetricsPopUp from 'components/dashboard/Dashboard.Metrics.PopUp';
import {deviceTypeMap} from '../../constants/metrics';

const MetricsResumeList = ({
  items,
  name,
  updateMeasurements,
  linkedDevices,
}) => {
  const {params} = useRoute();
  const {syncMeasurements} = params || {};
  const windowWidth = useWindowDimensions().width;
  const [editMeasurement, setEditMeasurement] = useState(undefined);
  const [newMeasurement, setNewMeasurement] = useState(undefined);
  const [hasDevice, setHasDevice] = useState(false);
  const isUpdate = editMeasurement ? true : false;
  const isOpen = editMeasurement || newMeasurement ? true : false;

  const checkDevice = (type) => {
    setHasDevice(
      linkedDevices.some(
        (item) =>
          item.connected &&
          item.providerType === 'bluetooth' &&
          item.type === type,
      ),
    );
  };

  const setNewMeasurementAndDevice = (measurement) => {
    const {category} = measurement;
    if (deviceTypeMap[category]) {
      checkDevice(deviceTypeMap[category].type);
    }
    setNewMeasurement(measurement);
  };

  const getClassifierComponent = (item) => {
    return item && item.category === '15074-8' ? (
      <GlucoseIcon
        onPressFn={(metric) => {
          setEditMeasurement(metric);
        }}
        item={item}
      />
    ) : null;
  };

  const _renderItem = ({item}) => {
    return (
      <MetricsResumeItem
        item={item}
        ClassifierComponent={getClassifierComponent(item)}
        onPressAdd={setNewMeasurementAndDevice}
      />
    );
  };

  return (
    <Layout style={MetricsResumeListStyles.container}>
      <Carousel
        layout={'default'}
        data={items}
        renderItem={_renderItem}
        sliderWidth={windowWidth + 15}
        itemWidth={windowWidth - 50}
        inactiveSlideOpacity={1}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
      {editMeasurement || newMeasurement ? (
        <DashboardMetricsPopUp
          metric={editMeasurement || newMeasurement}
          open={isOpen}
          closePopup={() => {
            setEditMeasurement(undefined);
            setNewMeasurement(undefined);
          }}
          hasDevice={hasDevice}
          deviceTypeMap={deviceTypeMap}
          syncMeasurements={syncMeasurements}
          updateMeasurements={updateMeasurements}
          isUpdate={isUpdate}
          name={name}
        />
      ) : null}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  linkedDevices: getLinkedDevices,
});

export default connect(mapStateToProps)(MetricsResumeList);

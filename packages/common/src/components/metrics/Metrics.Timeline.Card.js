import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {moment} from 'utils/dates';
import {MetricsGlucoseTimelineStyles} from './Metrics.Styles';
import GlucoseIcon from '../common/GlucoseIcon';

const MetricsTimelineCard = ({metric, setMeasurementOnEdit}) => (
  <Layout style={MetricsGlucoseTimelineStyles.cardContainer}>
    <Layout
      style={[
        MetricsGlucoseTimelineStyles.valueWrapper,
        {
          backgroundColor: metric.color,
        },
      ]}>
      <Text style={MetricsGlucoseTimelineStyles.value}>{metric.value}</Text>
      <Text style={MetricsGlucoseTimelineStyles.unit}>{metric.unit}</Text>
    </Layout>
    <Layout style={MetricsGlucoseTimelineStyles.dateContainer}>
      <Text style={MetricsGlucoseTimelineStyles.dateValue}>
        {moment(metric.date).local().format('HH:mm')}
      </Text>
    </Layout>
    <GlucoseIcon
      onPressFn={() => setMeasurementOnEdit(metric)}
      item={metric}
      style={{alignSelf: 'center'}}
    />
  </Layout>
);

export default MetricsTimelineCard;

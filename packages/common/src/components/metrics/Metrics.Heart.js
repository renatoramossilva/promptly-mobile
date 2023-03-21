import React from 'react';
import {Layout} from '@ui-kitten/components';
import {MetricsStyles} from './Metrics.Styles';
import MetricsBloodPressureResume from './Metrics.BloodPressure.Resume';
import MetricsBloodPressureCharts from './Metrics.BloodPressure.Charts';
import MetricsPulseCharts from './Metrics.Pulse.Charts';
import MetricsECG from './Metrics.ECG';

const MetricsHeart = () => {
  return (
    <Layout style={MetricsStyles.container}>
      <MetricsBloodPressureResume />
      <MetricsBloodPressureCharts />
      <MetricsPulseCharts />
      <MetricsECG />
    </Layout>
  );
};

export default MetricsHeart;

import React from 'react';
import {Layout} from '@ui-kitten/components';
import {MetricsStyles} from './Metrics.Styles';
import MetricsWeightResume from './Metrics.Weight.Resume';
import MetricsWeightCharts from './Metrics.Weight.Charts';

const MetricsWeight = () => {
  return (
    <Layout style={MetricsStyles.container}>
      <MetricsWeightResume />
      <MetricsWeightCharts />
    </Layout>
  );
};

export default MetricsWeight;

import React from 'react';
import {Layout} from '@ui-kitten/components';
import {MetricsStyles} from './Metrics.Styles';
import MetricsStepsResume from './Metrics.Steps.Resume';
import MetricsStepsCharts from './Metrics.Steps.Charts';

const MetricsSteps = () => {
  return (
    <Layout style={MetricsStyles.container}>
      <MetricsStepsResume />
      <MetricsStepsCharts />
    </Layout>
  );
};

export default MetricsSteps;

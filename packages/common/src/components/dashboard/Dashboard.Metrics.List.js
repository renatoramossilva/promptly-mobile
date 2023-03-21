import React from 'react';
import {Layout} from '@ui-kitten/components';
import DashboardMetricsItem from './Dashboard.Metrics.Item';
import {DashboardMetricsStyles} from './Dashboard.Styles';

const DashboardMetricsList = ({
  metrics,
  devices,
  syncMeasurements,
  updateMeasurements,
  onclickDashboardMeasurementsDetail,
}) => {
  return (
    <Layout
      testID="DashboardMetricsListContainer"
      style={DashboardMetricsStyles.container}>
      {metrics.map((metric, index) => (
        <DashboardMetricsItem
          key={metric.id}
          metric={metric}
          devices={devices}
          syncMeasurements={syncMeasurements}
          updateMeasurements={updateMeasurements}
          index={index}
          onclickDashboardMeasurementsDetail={onclickDashboardMeasurementsDetail}
        />
      ))}
    </Layout>
  );
};

export default DashboardMetricsList;

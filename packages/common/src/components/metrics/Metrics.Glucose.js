import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import {glucoseTabs} from '../../constants/metrics';
import TabSelector from '../common/TabSelector';
import MetricsGlucoseResume from './Metrics.Glucose.Resume';
import MetricsGlucoseTimeline from './Metrics.Glucose.Timeline';
import MetricsGlucoseCharts from './Metrics.Glucose.Charts';
import {MetricsStyles} from './Metrics.Styles';

const MetricsGlucose = () => {
  const [activeSection, setActiveSection] = useState('chart');

  const getTabContent = () => {
    switch (activeSection) {
      case 'timeline':
        return <MetricsGlucoseTimeline />;
      default:
        return <MetricsGlucoseCharts />;
    }
  };

  return (
    <Layout style={MetricsStyles.container}>
      <MetricsGlucoseResume />
      <TabSelector
        items={glucoseTabs}
        selectedIndex={activeSection}
        onSelect={(index) => setActiveSection(index)}
        containerStyle={{marginTop: 30}}
      />
      {getTabContent()}
    </Layout>
  );
};

export default MetricsGlucose;

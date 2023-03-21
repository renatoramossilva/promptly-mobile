import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {metricsTabs} from '../constants/metrics';
import TopTab from 'components/common/TopTab';
import MetricsGlucose from 'components/metrics/Metrics.Glucose';
import MetricsWeight from 'components/metrics/Metrics.Weight';
import MetricsSteps from 'components/metrics/Metrics.Steps';
import MetricsHeart from 'components/metrics/Metrics.Heart';
import {getDashboardMeasurementItems} from 'selectors/selected_measurements';
import {clickMeasurementsTab} from 'actions/datacollection';
import {getParamFromURL} from '../utils';

const DashboardMetricsDetails = ({route, metrics, onClickMeasurementsTab}) => {
  const {params} = route;
  const {category, url} = params;

  const [activeSection, setActiveSection] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState();
  const [validMetricsTabs, setValidMetricsTabs] = useState([]);

  const getTabContent = () => {
    const selectedTab = validMetricsTabs[activeSection]?.id;

    switch (selectedTab) {
      case 'blood-pressure':
        return <MetricsHeart />;
      case 'steps':
        return <MetricsSteps />;
      case 'weight':
        return <MetricsWeight />;
      default:
        return <MetricsGlucose />;
    }
  };

  const selectTab = (index) => {
    if (validMetricsTabs[index]?.action) {
      onClickMeasurementsTab(validMetricsTabs[index]);
    }
    setActiveSection(index);
  };

  useEffect(() => {
    setValidMetricsTabs(
      metricsTabs.filter((metricsTab) =>
        metrics.map((metric) => metric.slug).includes(metricsTab.id),
      ),
    );

    const index = validMetricsTabs.findIndex(
      (item) => item.id === selectedCategory,
    );
    setActiveSection(index >= 0 ? index : 0);
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(
      url ? validMetricsTabs[getParamFromURL(url, 'code')]?.tabId : category,
    );
  }, [validMetricsTabs, category, url]);

  return (
    <Layout style={{flex: 1}}>
      {metricsTabs.length > 0 && (
        <TopTab
          items={validMetricsTabs}
          selectedIndex={activeSection}
          onSelect={(index) => selectTab(index)}
        />
      )}
      <ScrollView keyboardShouldPersistTaps="handled">
        {getTabContent()}
      </ScrollView>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  metrics: getDashboardMeasurementItems,
});

const mapDispatchToProps = {
  onClickMeasurementsTab: clickMeasurementsTab,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardMetricsDetails);

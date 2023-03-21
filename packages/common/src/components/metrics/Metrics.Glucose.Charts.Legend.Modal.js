import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {MetricsGlucoseChartsLegendModalStyles} from './Metrics.Styles';

const MetricsGlucoseChartsLegendModal = ({legendModal}) => {
  const theme = useTheme();
  return (
    <Layout>
      <Text
        category="h1"
        style={MetricsGlucoseChartsLegendModalStyles.title}
        testID="MetricsGlucoseChartsLegendModalTitle">
        {legendModal.title}
      </Text>
      {legendModal.content.map((item) => (
        <Layout
          testID="MetricsGlucoseChartsLegendModalItem"
          key={item.value}
          style={MetricsGlucoseChartsLegendModalStyles.item}>
          <Text
            testID="MetricsGlucoseChartsLegendModalItemValue"
            category="h1"
            style={MetricsGlucoseChartsLegendModalStyles.text}>
            {item.value}
          </Text>
          <Text
            testID="MetricsGlucoseChartsLegendModalItemLabel"
            category="p1"
            style={{color: theme['color-info-600']}}>
            {item.label}
          </Text>
        </Layout>
      ))}
    </Layout>
  );
};

export default MetricsGlucoseChartsLegendModal;

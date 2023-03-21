import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {MetricReadingStyles} from './MetricReading.Styles';

const MetricReading = ({
  metric,
  style,
  ClassifierComponent,
  color = 'black',
}) => {
  return (
    <Layout style={[MetricReadingStyles.readingContainer, style]}>
      {metric.reading && ClassifierComponent}
      <Text
        testID="MetricReading"
        category="h1"
        style={[MetricReadingStyles.readingValue, {color: color}]}>
        {metric.reading || '__'}
      </Text>
      <Layout style={MetricReadingStyles.readingUnitContainer}>
        <Text
          testID="MetricReadingUnit"
          category="h1"
          style={[MetricReadingStyles.readingUnit, {color: color}]}>
          {metric.unit}
        </Text>
      </Layout>
    </Layout>
  );
};

export default MetricReading;

import React from 'react';
import {useTranslation} from 'react-i18next';
import {Layout, Text} from '@ui-kitten/components';
import {MetricsGlucoseChartsItemResumeStyles} from './Metrics.Styles';

const MetricsGlucoseChartsItemResume = ({item}) => {
  const {t} = useTranslation();
  return (
    <Layout
      testID="MetricsGlucoseChartsItemResume"
      style={MetricsGlucoseChartsItemResumeStyles.container}>
      <Layout style={MetricsGlucoseChartsItemResumeStyles.group}>
        <Text category="h1" style={MetricsGlucoseChartsItemResumeStyles.text}>
          {t('Total measurements')}
        </Text>
        <Text
          testID="MetricsGlucoseChartsItemResumeCount"
          category="h1"
          style={MetricsGlucoseChartsItemResumeStyles.text}>
          {item.count}
        </Text>
      </Layout>
      <Layout style={MetricsGlucoseChartsItemResumeStyles.group}>
        <Text category="h1" style={MetricsGlucoseChartsItemResumeStyles.text}>
          {t('Average glucose')}
        </Text>
        <Text
          testID="MetricsGlucoseChartsItemResumeAverage"
          category="h1"
          style={MetricsGlucoseChartsItemResumeStyles.text}>
          {item.avg} {item.unit}
        </Text>
      </Layout>
    </Layout>
  );
};

export default MetricsGlucoseChartsItemResume;

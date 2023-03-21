import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {groupBy} from 'lodash';
import ChartPie from '../charts/Chart.Pie';
import ChartLegend from '../common/ChartLegend';
import {MetricsChartsItemStyles} from './Metrics.Styles';
import MetricsGlucoseChartsItemResume from './Metrics.Glucose.Charts.Item.Resume';
import {glucoseCategories, GLUCOSE_UNIT} from '../../constants/metrics';

const MetricsGlucoseChartsItem = ({
  item,
  chartWidth,
  readingsRanges,
  numberOfReadings,
  setLegendModal,
  onMarkerSelect,
}) => {
  const {t} = useTranslation();

  return (
    <Layout style={MetricsChartsItemStyles.card}>
      <Text
        testID="MetricsGlucoseChartsItemTitle"
        category="h1"
        style={MetricsChartsItemStyles.title}>
        {item.title}
      </Text>
      {item.chart ? (
        <ChartPie
          noValues={t('No scores available')}
          height={200}
          width={chartWidth}
          values={item.chart.series}
          colors={item.chart.colors}
          onMarkerSelect={onMarkerSelect}
        />
      ) : null}
      {item.reading ? <MetricsGlucoseChartsItemResume item={item} /> : null}
      {!!numberOfReadings && !!readingsRanges.length && (
        <ChartLegend
          ranges={groupBy(readingsRanges, 'severity_uid')}
          measurementCategories={glucoseCategories}
          setLegendModal={setLegendModal}
          hoverTitle={t('Normal range values')}
          unit={GLUCOSE_UNIT}
        />
      )}
    </Layout>
  );
};

export default MetricsGlucoseChartsItem;

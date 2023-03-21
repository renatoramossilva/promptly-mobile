import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Layout, useTheme} from '@ui-kitten/components';
import {processColor} from 'react-native';
import {useTranslation} from 'react-i18next';
import {fetchAllReadings} from 'actions/measurements';
import {clickChartMarker} from 'actions/datacollection';
import {getLanguage} from 'selectors/selected_settings';
import {
  getWeightAllReadings,
  getHeightAllReadings,
} from 'selectors/selected_measurements';
import {fetchReadingsRangesByCategory} from 'actions/diseases';
import {WEIGHT_CATEGORY, HEIGHT_CATEGORY} from '../../constants/metrics';
import MetricsChartsAll from './Metrics.Charts.All';
import {MetricsStyles} from './Metrics.Styles';
import {getMeasurementsURL} from 'selectors/selected_api';
import {DesiredWeight} from 'models/Measurement';

const MetricsWeightCharts = ({
  readings,
  heightReadings,
  fetchAllReadingsFn,
  measurementsURL,
  lang,
  onClickChartMarker,
}) => {
  useEffect(() => {
    fetchAllReadingsFn(`${measurementsURL}`, WEIGHT_CATEGORY, lang);
    fetchAllReadingsFn(`${measurementsURL}`, HEIGHT_CATEGORY, lang);
  }, []);

  let limitLines = [];
  const theme = useTheme();
  const {t} = useTranslation();

  if (heightReadings.length > 0) {
    const dWeight = new DesiredWeight(heightReadings[0]);
    limitLines = [
      {
        label: t('Overweight'),
        limit: dWeight.max,
        lineWidth: 2,
        valueTextColor: processColor(theme['color-warning-500']),
        lineColor: processColor(theme['color-warning-500']),
      },
    ];
  }

  return (
    <Layout style={MetricsStyles.chartsContainer}>
      <MetricsChartsAll
        dataArr={[{color: theme['promptly-blue-400'], readings: readings}]}
        type="line"
        limitLines={limitLines}
        headerTitle={t('All measurements')}
        onMarkerSelect={onClickChartMarker}
      />
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: getLanguage,
  measurementsURL: getMeasurementsURL,
  readings: getWeightAllReadings,
  heightReadings: getHeightAllReadings,
});

const mapDispatchToProps = {
  fetchAllReadingsFn: fetchAllReadings,
  fetchReadingsRangesByCategoryFn: fetchReadingsRangesByCategory,
  onClickChartMarker: clickChartMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsWeightCharts);

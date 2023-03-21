import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useTranslation} from 'react-i18next';
import {Layout, useTheme} from '@ui-kitten/components';
import {fetchAllReadings} from 'actions/measurements';
import {getLanguage} from 'selectors/selected_settings';
import {getStepsAllReadings} from 'selectors/selected_measurements';
import {getMeasurementsURL} from 'selectors/selected_api';
import {fetchReadingsRangesByCategory} from 'actions/diseases';
import {clickChartMarker} from 'actions/datacollection';
import {STEPS_CATEGORY} from '../../constants/metrics';
import MetricsChartsAll from './Metrics.Charts.All';
import {MetricsStyles} from './Metrics.Styles';
import {ChartFilters} from '../../models/DashboardMeasurement';

const MetricsStepsCharts = ({
  readings,
  fetchAllReadingsFn,
  measurementsURL,
  lang,
  onClickChartMarker,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const chartFilter = new ChartFilters();
  const [selectedFilter, setSelectedFilter] = useState('weekly');

  useEffect(() => {
    fetchAllReadingsFn(
      `${measurementsURL}`,
      STEPS_CATEGORY,
      lang,
      '',
      `${chartFilter.getQueryParam(selectedFilter)}`,
    );
  }, [selectedFilter]);

  return (
    <Layout style={MetricsStyles.chartsContainer}>
      <MetricsChartsAll
        dataArr={[{color: theme['promptly-blue-400'], readings: readings}]}
        type="line"
        chartFilters={chartFilter.filters}
        selectedFilter={selectedFilter}
        onChangeFilter={setSelectedFilter}
        headerTitle={t('All measurements')}
        onMarkerSelect={onClickChartMarker}
      />
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: getLanguage,
  measurementsURL: getMeasurementsURL,
  readings: getStepsAllReadings,
});

const mapDispatchToProps = {
  fetchAllReadingsFn: fetchAllReadings,
  fetchReadingsRangesByCategoryFn: fetchReadingsRangesByCategory,
  onClickChartMarker: clickChartMarker,
};

export default connect(mapStateToProps, mapDispatchToProps)(MetricsStepsCharts);

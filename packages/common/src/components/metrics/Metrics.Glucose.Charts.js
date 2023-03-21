import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Layout, useTheme} from '@ui-kitten/components';
import {fetchAllReadings} from 'actions/measurements';
import {getMeasurementsURL} from 'selectors/selected_api';
import {getDiseaseItems, getReadingsRanges} from 'selectors/selected_diseases';
import {getPatient} from 'selectors/selected_patients';
import {getLanguage} from 'selectors/selected_settings';
import {getGlucoseAllReadings} from 'selectors/selected_measurements';
import {fetchReadingsRangesByCategory} from 'actions/diseases';
import {clickChartMarker} from 'actions/datacollection';
import WebAppApi from '../../api/webapp';
import {
  DonutChart,
  PieChartMeasurement,
} from '../../models/DashboardMeasurement';
import MetricsGlucoseChartsAverage from './Metrics.Glucose.Charts.Average';
import {GLUCOSE_CATEGORY, GLUCOSE_UNIT} from '../../constants/metrics';
import MetricsChartsAll from './Metrics.Charts.All';
import {MetricsStyles} from './Metrics.Styles';

const MetricsGlucoseCharts = ({
  patient,
  diseases,
  readingsRanges,
  fetchReadingsRangesByCategoryFn,
  readings,
  lang,
  measurementsURL,
  fetchAllReadingsFn,
  codeMetric = 'all-types',
  onClickChartMarker,
}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const READINGS_RANGES_FILTER =
    'glucose-fasting,glucose-pre-meal,glucose-pos-meal';
  const unit = GLUCOSE_UNIT;
  const [numberOfReadings, setNumberOfReadings] = useState(0);
  const [pieCharts, setPieCharts] = useState([
    {
      title: t('Last 7 days'),
      filter: '?last_number_days=7&unit=mg/dl',
    },
    {
      title: t('Last 14 days'),
      filter: '?last_number_days=14&unit=mg/dl',
    },
    {
      title: t('Last 30 days'),
      filter: '?last_number_days=30&unit=mg/dl',
    },
    {
      title: t('Last 90 days'),
      filter: '?last_number_days=90&unit=mg/dl',
    },
  ]);

  const fetchMetrics = () => {
    const [disease] = diseases;
    Promise.all(
      pieCharts.map((chart) => {
        const codeMetricFilter =
          codeMetric !== 'all-types' ? codeMetric : undefined;
        return WebAppApi.measurements.fetchTimeline(
          patient.id,
          disease.id,
          GLUCOSE_CATEGORY,
          codeMetricFilter,
          chart.filterId,
        );
      }),
    ).then((response) => {
      setPieCharts(
        response.map((r, index) => {
          const {results} = r.data;
          const code = 'LP14635-4';
          const donutChart = new DonutChart(results);
          const measurement = new PieChartMeasurement({
            chart: pieCharts[index],
            reading: r,
            donutChart,
            code,
            unit,
          });
          setNumberOfReadings(measurement.count);
          return measurement;
        }),
      );
    });
  };

  const fetchRanges = () => {
    const [disease] = diseases;
    fetchReadingsRangesByCategoryFn(
      patient.id,
      disease.id,
      READINGS_RANGES_FILTER,
    );
  };

  const refreshTimeline = () => {
    fetchAllReadingsFn(`${measurementsURL}`, GLUCOSE_CATEGORY, lang, unit);
  };

  useEffect(() => {
    fetchRanges();
    fetchMetrics();
    refreshTimeline();
  }, [codeMetric]);

  return (
    <Layout style={MetricsStyles.container}>
      <MetricsGlucoseChartsAverage
        readingsRanges={readingsRanges}
        numberOfReadings={numberOfReadings}
        pieCharts={pieCharts}
        onMarkerSelect={onClickChartMarker}
      />
      <Layout style={MetricsStyles.chartsContainer}>
        <MetricsChartsAll
          dataArr={[{color: theme['promptly-blue-400'], readings: readings}]}
          headerTitle={t('All measurements')}
          onMarkerSelect={onClickChartMarker}
        />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  diseases: getDiseaseItems,
  readingsRanges: getReadingsRanges,
  measurementsURL: getMeasurementsURL,
  lang: getLanguage,
  readings: getGlucoseAllReadings,
});

const mapDispatchToProps = {
  fetchAllReadingsFn: fetchAllReadings,
  fetchReadingsRangesByCategoryFn: fetchReadingsRangesByCategory,
  onClickChartMarker: clickChartMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsGlucoseCharts);

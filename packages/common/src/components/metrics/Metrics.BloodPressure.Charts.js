import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {fetchAllReadings} from 'actions/measurements';
import {clickChartMarker} from 'actions/datacollection';
import {getLanguage} from 'selectors/selected_settings';
import {getMeasurementsURL} from 'selectors/selected_api';
import {
  getSystolicAllReadings,
  getDistolicAllReadings,
} from 'selectors/selected_measurements';
import {fetchReadingsRangesByCategory} from 'actions/diseases';
import {BLOOD_PRESSURE_CATEGORY} from '../../constants/metrics';
import MetricsChartsAll from './Metrics.Charts.All';
import {MetricsStyles} from './Metrics.Styles';

const MetricsBloodPressureCharts = ({
  systolicReadings,
  distolicReadings,
  fetchAllReadingsFn,
  measurementsURL,
  lang,
  onClickChartMarker,
}) => {
  useEffect(() => {
    fetchAllReadingsFn(`${measurementsURL}`, BLOOD_PRESSURE_CATEGORY, lang);
  }, []);
  const {t} = useTranslation();

  return (
    <Layout style={MetricsStyles.chartsContainer}>
      <MetricsChartsAll
        dataArr={[
          {color: '#24629e', label: t('Systolic'), readings: systolicReadings},
          {color: '#00AABB', label: t('Distolic'), readings: distolicReadings},
        ]}
        type="line"
        headerTitle={t('Blood pressure')}
        onMarkerSelect={onClickChartMarker}
      />
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: getLanguage,
  measurementsURL: getMeasurementsURL,
  systolicReadings: getSystolicAllReadings,
  distolicReadings: getDistolicAllReadings,
});

const mapDispatchToProps = {
  fetchAllReadingsFn: fetchAllReadings,
  fetchReadingsRangesByCategoryFn: fetchReadingsRangesByCategory,
  onClickChartMarker: clickChartMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsBloodPressureCharts);

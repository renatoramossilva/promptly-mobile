import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  filterDetailMetrics,
  getDetailAllMetrics,
} from 'selectors/selected_measurements';
import {getMeasurementsURL} from 'selectors/selected_api';
import {getLanguage} from 'selectors/selected_settings';
import {fetchMeasurementDetail, fetchAllReadings} from 'actions/measurements';
import MetricsResumeList from './Metrics.Resume.List';
import {metricsGroup, WEIGHT_CATEGORY} from '../../constants/metrics';
import {useNavigation} from '@react-navigation/native';

const {metrics, name} = metricsGroup.weight;

const MetricsWeightResume = ({
  lang,
  items,
  measurementsURL,
  fetchMeasurementDetailfn,
  fetchAllReadingsFn,
}) => {
  const navigation = useNavigation();
  const fetchReadings = () => {
    fetchAllReadingsFn(`${measurementsURL}`, WEIGHT_CATEGORY, lang);
  };

  const fetchMetrics = () => {
    setTimeout(() => {
      metrics.forEach((m) =>
        fetchMeasurementDetailfn(measurementsURL, m, lang),
      );
      fetchReadings();
    }, 1000);
  };

  useEffect(() => {
    fetchMetrics();
    const willFocusSubscription = navigation.addListener('focus', () =>
      fetchMetrics(),
    );
    return willFocusSubscription;
  }, []);

  return (
    <MetricsResumeList
      items={items}
      updateMeasurements={fetchMetrics}
      name={name}
    />
  );
};

const mapStateToProps = (state) => ({
  lang: getLanguage(state),
  measurementsURL: getMeasurementsURL(state),
  items: filterDetailMetrics(getDetailAllMetrics(state), metrics),
});

const mapDispatchToProps = {
  fetchMeasurementDetailfn: fetchMeasurementDetail,
  fetchAllReadingsFn: fetchAllReadings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsWeightResume);

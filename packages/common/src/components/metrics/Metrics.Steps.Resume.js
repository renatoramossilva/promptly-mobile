import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  filterDetailMetrics,
  getDetailAllMetrics,
} from 'selectors/selected_measurements';
import {getMeasurementsURL} from 'selectors/selected_api';
import {getLanguage} from 'selectors/selected_settings';
import {fetchMeasurementDetail} from 'actions/measurements';
import MetricsResumeList from './Metrics.Resume.List';
import {metricsGroup} from '../../constants/metrics';

const {metrics} = metricsGroup.steps;

const MetricsStepsResume = ({
  lang,
  items,
  measurementsURL,
  fetchMeasurementDetailfn,
}) => {
  const fetchMetrics = () => {
    metrics.forEach((m) => {
      fetchMeasurementDetailfn(measurementsURL, m, lang);
    });
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  return <MetricsResumeList items={items} updateMeasurements={fetchMetrics} />;
};

const mapStateToProps = (state) => ({
  lang: getLanguage(state),
  measurementsURL: getMeasurementsURL(state),
  items: filterDetailMetrics(getDetailAllMetrics(state), metrics),
});

const mapDispatchToProps = {
  fetchMeasurementDetailfn: fetchMeasurementDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MetricsStepsResume);

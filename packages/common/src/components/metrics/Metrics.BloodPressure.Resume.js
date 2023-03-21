import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  filterDetailMetrics,
  getDetailAllMetrics,
} from 'selectors/selected_measurements';
import {getPatient} from 'selectors/selected_patients';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {
  getMeasurementsURL,
  getReadingsURLByPatient,
} from 'selectors/selected_api';
import {getLanguage} from 'selectors/selected_settings';
import {
  fetchMeasurementDetail,
  fetchAllReadings,
  fetchTimeline,
} from 'actions/measurements';
import MetricsResumeList from './Metrics.Resume.List';
import {ECG_CATEGORY, metricsGroup} from '../../constants/metrics';

const {metrics, name} = metricsGroup['blood-pressure'];

const MetricsBloodPressureResume = ({
  lang,
  items,
  measurementsURL,
  fetchMeasurementDetailfn,
  fetchAllReadingsFn,
  fetchTimelineFn,
  diseases,
  patient,
}) => {
  const fetchReadings = (code) => {
    fetchAllReadingsFn(`${measurementsURL}`, code, lang);
  };

  const fetchTimelineData = () => {
    const [disease] = diseases;
    fetchTimelineFn(
      `${getReadingsURLByPatient(patient.id, disease.id)}/${ECG_CATEGORY}`,
      ECG_CATEGORY,
    );
  };

  const fetchMetrics = () => {
    setTimeout(() => {
      metrics.forEach((m) => {
        fetchMeasurementDetailfn(measurementsURL, m, lang);
        fetchReadings(m);
      });
      fetchTimelineData();
    }, 1000);
  };

  useEffect(() => {
    fetchMetrics();
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
  patient: getPatient(state),
  diseases: getDiseaseItems(state),
});

const mapDispatchToProps = {
  fetchMeasurementDetailfn: fetchMeasurementDetail,
  fetchAllReadingsFn: fetchAllReadings,
  fetchTimelineFn: fetchTimeline,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsBloodPressureResume);

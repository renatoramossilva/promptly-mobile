import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPatient} from 'selectors/selected_patients';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {
  filterDetailMetrics,
  getDetailAllMetrics,
  sortGlucoseMetrics,
  getAllServerAnswers,
} from 'selectors/selected_measurements';
import {
  getMeasurementsURL,
  getReadingsURLByPatient,
} from 'selectors/selected_api';
import {getLanguage} from 'selectors/selected_settings';
import {
  fetchMeasurementDetail,
  fetchServerAnswer,
  fetchTimeline,
  fetchAllReadings,
} from 'actions/measurements';
import MetricsResumeList from './Metrics.Resume.List';
import {
  GLUCOSE_CATEGORY,
  GLUCOSE_UNIT,
  metricsGroup,
} from '../../constants/metrics';

const {metrics, name} = metricsGroup.glucose;

const MetricsGlucoseResume = ({
  lang,
  items,
  diseases,
  patient,
  measurementsURL,
  readonlyMetrics,
  fetchMeasurementDetailfn,
  fetchServerAnswerfn,
  fetchTimelineFn,
  fetchAllReadingsFn,
}) => {
  const fetchMetrics = () => {
    metrics.forEach((m) => {
      fetchMeasurementDetailfn(measurementsURL, m, lang);
    });
  };

  const fetchTimelineData = () => {
    const [disease] = diseases;
    fetchTimelineFn(
      `${getReadingsURLByPatient(patient.id, disease.id)}/${GLUCOSE_CATEGORY}`,
      GLUCOSE_CATEGORY,
    );
  };

  const fetchReadings = () => {
    fetchAllReadingsFn(
      `${measurementsURL}`,
      GLUCOSE_CATEGORY,
      lang,
      GLUCOSE_UNIT,
    );
  };

  const updateMeasurements = () => {
    setTimeout(() => {
      fetchMetrics();
      fetchTimelineData();
      fetchReadings();
    }, 1000);
  };

  useEffect(() => {
    fetchMetrics();

    const [disease] = diseases;
    fetchServerAnswerfn(patient.id, disease.id, 'HBA1C');
  }, []);

  const listItems = readonlyMetrics.HBA1C
    ? [...items, readonlyMetrics.HBA1C]
    : items;
  return (
    <MetricsResumeList
      items={listItems}
      updateMeasurements={updateMeasurements}
      name={name}
    />
  );
};

const mapStateToProps = (state) => ({
  lang: getLanguage(state),
  measurementsURL: getMeasurementsURL(state),
  items: filterDetailMetrics(
    getDetailAllMetrics(state),
    metrics,
    sortGlucoseMetrics,
  ),
  readonlyMetrics: getAllServerAnswers(state),
  patient: getPatient(state),
  diseases: getDiseaseItems(state),
});

const mapDispatchToProps = {
  fetchMeasurementDetailfn: fetchMeasurementDetail,
  fetchServerAnswerfn: fetchServerAnswer,
  fetchTimelineFn: fetchTimeline,
  fetchAllReadingsFn: fetchAllReadings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsGlucoseResume);

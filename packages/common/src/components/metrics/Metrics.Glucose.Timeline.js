import {Layout} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import _ from 'lodash';
import {createStructuredSelector} from 'reselect';
import {fetchMeasurementDetail, fetchTimeline} from 'actions/measurements';
import {
  getMeasurementsURL,
  getReadingsURLByPatient,
} from 'selectors/selected_api';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {getGlucoseTimeline} from 'selectors/selected_measurements';
import {getPatient} from 'selectors/selected_patients';
import {getLanguage} from 'selectors/selected_settings';
import {GLUCOSE_CATEGORY, metricsGroup} from '../../constants/metrics';
import {moment} from 'utils/dates';
import DashboardMetricsPopUp from '../dashboard/Dashboard.Metrics.PopUp';
import VerifiedDate from '../common/VerifiedDate';
import MetricsTimelineCard from './Metrics.Timeline.Card';

const {name} = metricsGroup.glucose;

const MetricsGlucoseTimeline = ({
  patient,
  diseases,
  timeline,
  fetchTimelineFn,
}) => {
  const {t} = useTranslation();
  const [measurementOnEdit, setMeasurementOnEdit] = useState(false);

  const refreshTimeline = () => {
    const [disease] = diseases;
    fetchTimelineFn(
      `${getReadingsURLByPatient(patient.id, disease.id)}/${GLUCOSE_CATEGORY}`,
      GLUCOSE_CATEGORY,
    );
  };

  useEffect(() => {
    refreshTimeline();
  }, []);

  if (!_.get(timeline, 'items', []).length) {
    return null;
  }

  const groupedMeasurements = _.groupBy(timeline.items, (result) =>
    moment(result.date).format('YYYY-MM-DD'),
  );

  return (
    <Layout style={{paddingHorizontal: 15}}>
      {Object.keys(groupedMeasurements).map((key) => (
        <React.Fragment key={key}>
          <VerifiedDate date={key} t={t} />

          {groupedMeasurements[key].map((m) => (
            <MetricsTimelineCard
              key={m.id}
              metric={m}
              setMeasurementOnEdit={setMeasurementOnEdit}
            />
          ))}
        </React.Fragment>
      ))}
      {measurementOnEdit && (
        <DashboardMetricsPopUp
          metric={measurementOnEdit}
          open
          closePopup={() => {
            setMeasurementOnEdit(undefined);
          }}
          updateMeasurements={refreshTimeline}
          isUpdate={true}
          name={name}
        />
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  diseases: getDiseaseItems,
  timeline: getGlucoseTimeline,
  measurementsURL: getMeasurementsURL,
  lang: getLanguage,
});

const mapDispatchToProps = {
  fetchTimelineFn: fetchTimeline,
  fetchMeasurementDetailfn: fetchMeasurementDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricsGlucoseTimeline);

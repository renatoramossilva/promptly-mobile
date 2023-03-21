import React, {useEffect} from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ConditionsDiseaseDetailStyles} from './Conditions.Styles';
import {getPatientDiseaseEditURL} from 'selectors/selected_api';
import {
  getDiseaseEventsTimeline,
  getSelectedDisease,
  getDiseaseDetails,
} from 'selectors/selected_diseases';
import {fetchEventsTimeline} from 'actions/diseases';
import TreatmentEventsTimeline from '../treatmentEventsTimeline/TreatmentEventsTimeline';
import AvatarItem from '../common/AvatarItem';
import LoadingScreen from 'components/common/LoadingScreen';

const ConditionsDiseaseDetail = ({
  patientDiseaseEditURL,
  eventsTimeline,
  fetchEventsTimelineFn,
  diseaseDetails,
  selectedDisease,
}) => {
  const {t} = useTranslation();
  useEffect(() => {
    if (selectedDisease.id) {
      fetchEventsTimelineFn(patientDiseaseEditURL);
    }
  }, [selectedDisease]);

  return (
    <Layout style={ConditionsDiseaseDetailStyles.container}>
      {!selectedDisease.id ? (
        <LoadingScreen />
      ) : (
        <>
          <Text category="h1" style={ConditionsDiseaseDetailStyles.title}>
            {t('Events Timeline')}
          </Text>
          <TreatmentEventsTimeline options={eventsTimeline} />
          <Text category="h1" style={ConditionsDiseaseDetailStyles.title}>
            {t('Healthcare institution')}
          </Text>
          <AvatarItem item={diseaseDetails.hospital} />
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patientDiseaseEditURL: getPatientDiseaseEditURL,
  eventsTimeline: getDiseaseEventsTimeline,
  selectedDisease: getSelectedDisease,
  diseaseDetails: getDiseaseDetails,
});

const mapDispatchToProps = {
  fetchEventsTimelineFn: fetchEventsTimeline,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConditionsDiseaseDetail);

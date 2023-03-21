import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Text, Layout} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {getUnagreedClinicalTrials} from 'selectors/selected_settings';
import Axios from 'utils/axios';
import {fetchClinicalTrials} from 'actions/settings';
import ConsentsMenu from 'components/consents/Consents.Menu';
import ConsentsDetail from 'components/consents/Consents.Detail';
import ConsentsForm from 'components/consents/Consents.Form';
import {ConsentsStyles} from 'components/consents/Consents.Styles';

const Consents = ({unagreedClinicalTrials, goFetchClinicalTrials}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [activeConsentIndex, setactiveConsentIndex] = useState(0);
  const [checkedConsent, setCheckedConsent] = useState(false);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  useEffect(() => {
    if (unagreedClinicalTrials.length === 0) {
      navigation.navigate('Dashboard');
    }
  }, [unagreedClinicalTrials]);

  const selectConsent = (id) => {
    setCheckedConsent(false);
    setactiveConsentIndex(id);
  };

  const isLastStep = (stepIndex) =>
    stepIndex === unagreedClinicalTrials.length - 1;

  const handleConsentFormSubmit = (consent, consentIndex) => {
    const agreed = true;
    const ctid = consent.clinical_trial?.id;
    const pdid = consent.patient_disease?.id;
    const patientId = consent.patient_disease?.owner?.id;
    const submissionUrl = `/api/terms/patients/${patientId}/diseases/${pdid}/clinical-trials/${ctid}`;

    Axios.put(submissionUrl, {agreed}).then(() => {
      setCheckedConsent(false);
      if (!isLastStep(consentIndex)) {
        selectConsent(consentIndex + 1);
      } else {
        goFetchClinicalTrials(patientId);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'android' ? undefined : 'padding'}>
      <Layout style={{flex: 1}}>
        <Layout style={ConsentsStyles.introContainer}>
          <Text style={ConsentsStyles.introText} category="h1">
            {t('Consents need to be accepted to manage your disease')}
          </Text>
        </Layout>
        <ConsentsMenu
          unagreedClinicalTrials={unagreedClinicalTrials}
          selectConsent={selectConsent}
          activeConsentIndex={activeConsentIndex}
        />
        <ConsentsDetail consent={unagreedClinicalTrials[activeConsentIndex]} />
        <ConsentsForm
          checkedConsent={checkedConsent}
          setCheckedConsent={setCheckedConsent}
          consent={unagreedClinicalTrials[activeConsentIndex]}
          activeConsentIndex={activeConsentIndex}
          handleConsentFormSubmit={handleConsentFormSubmit}
        />
      </Layout>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = createStructuredSelector({
  unagreedClinicalTrials: getUnagreedClinicalTrials,
});

const mapDispatchToProps = {
  goFetchClinicalTrials: fetchClinicalTrials,
};

export default connect(mapStateToProps, mapDispatchToProps)(Consents);

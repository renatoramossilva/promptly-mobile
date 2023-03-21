import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchPatientScores, fetchPatientScore} from 'actions/patient';
import {
  getPatient,
  getPatientCoas,
  getSelectedCoa,
} from 'selectors/selected_patients';
import {getRegionalSettings} from 'selectors/selected_settings';
import {getSortedTabs} from 'utils';
import TopTab from 'components/common/TopTab';
import DashboardCoaReview from 'components/dashboard/Dashboard.Coa.Review';
import DashboardCoaHistory from 'components/dashboard/Dashboard.Coa.History';
import {DashboardCoaDetailsStyles} from 'components/dashboard/Dashboard.Styles';

let sections = [];
const DashboardCoaDetails = ({
  patient,
  patientCoas,
  selectedCoa,
  settings,
  fetchPatientScoreFn,
  fetchPatientScoresFn,
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const {t} = useTranslation();

  const handlePatientScores = async () => {
    const response = await fetchPatientScoresFn(patient);
    return response.data;
  };

  const handlePatientScore = async (scoreID) => {
    const response = await fetchPatientScoreFn(patient, scoreID);
    return response.data;
  };

  useEffect(() => {
    handlePatientScores().then((res) => {
      if (res && res.length) {
        handlePatientScore(res[0].uid);
      }
    });
  }, []);

  useEffect(() => {
    sections = getSortedTabs(patientCoas).map((c) => ({
      id: c.uid,
      title: c.name,
    }));
  }, [patientCoas]);

  const handleSelectedTab = (index) => {
    fetchPatientScoreFn(patient, sections[index].id).then(() =>
      setActiveSection(index),
    );
  };
  const evolutionScores =
    selectedCoa.scores &&
    selectedCoa.scores.filter((s) => s.percentage).slice(0, 10);

  return (
    <Layout style={{flex: 1}}>
      {sections.length > 0 && (
        <TopTab
          items={sections}
          selectedIndex={activeSection}
          onSelect={(index) => handleSelectedTab(index)}
        />
      )}
      <ScrollView>
        <Layout style={DashboardCoaDetailsStyles.listHolder}>
          <DashboardCoaReview
            coa={selectedCoa}
            avgLabel={t('Average')}
            scoreLabel={t('Your score')}
          />
        </Layout>
        <Text category="h1" style={{paddingHorizontal: 20}}>
          {t('Score evolution')}
        </Text>
        <Layout style={DashboardCoaDetailsStyles.listHolder}>
          <DashboardCoaHistory scores={evolutionScores} settings={settings} />
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  patientCoas: getPatientCoas,
  selectedCoa: getSelectedCoa,
  settings: getRegionalSettings,
});

const mapDispatchToProps = {
  fetchPatientScoresFn: fetchPatientScores,
  fetchPatientScoreFn: fetchPatientScore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardCoaDetails);

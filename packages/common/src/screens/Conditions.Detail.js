import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {createStructuredSelector} from 'reselect';
import {getPatientDiseaseURL} from '../selectors/selected_api';
import {getPatient} from '../selectors/selected_patients';
import {fetchDiseaseById, fetchDiseaseScores} from '../actions/diseases';
import {clickConditionTab} from 'actions/datacollection';
import TopTab from 'components/common/TopTab';
import {
  getDiseaseItems,
  getDiseaseChartData,
} from '../selectors/selected_diseases';
import {ConditionsDiseaseReviewStyles} from 'components/conditions/Conditions.Styles';
import ConditionsTabContent from 'components/conditions/Conditions.TabContent';

const ConditionsDetail = ({
  route,
  patientDiseaseUrl,
  patient,
  fetchDiseaseById,
  fetchDiseaseScores,
  onClickConditionTab,
}) => {
  const {conditionID} = route.params;
  const navigation = useNavigation();

  const getDiseaseScores = () => {
    fetchDiseaseById(patientDiseaseUrl, conditionID, [], true).then(() => {
      fetchDiseaseScores(patient, {id: conditionID}, 'SINGLE_SCORE');
    });
  };

  useEffect(() => {
    getDiseaseScores();
    const unsubscribe = navigation.addListener('focus', () => {
      getDiseaseScores();
    });

    return unsubscribe;
  }, []);

  const {t} = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    {
      title: t('Overview'),
      slug: 'overview',
    },
    {
      title: t('Details'),
      slug: 'details',
    },
    {
      title: t('Clinicians'),
      slug: 'clinicians',
    },
  ];

  return (
    <Layout style={{flex: 1}}>
      <Layout style={ConditionsDiseaseReviewStyles.container}>
        <TopTab
          items={sections}
          selectedIndex={activeSection}
          onSelect={index => {
            onClickConditionTab({
              name: sections[index]?.slug,
            });
            setActiveSection(index);
          }}
        />
        <ScrollView>
          <ConditionsTabContent activeSection={activeSection} />
        </ScrollView>
      </Layout>
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  diseases: getDiseaseItems,
  patientDiseaseUrl: getPatientDiseaseURL,
  patient: getPatient,
  chartData: getDiseaseChartData,
});

const mapDispatchToProps = {
  fetchDiseaseScores,
  fetchDiseaseById,
  onClickConditionTab: clickConditionTab,
};
export default connect(mapStateToProps, mapDispatchToProps)(ConditionsDetail);

import React, {useMemo, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {Layout, useTheme, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ConditionsDiseaseReviewStyles} from './Conditions.Styles';
import EvaluationCard from '../common/EvaluationCard';
import {fetchPatientScores, fetchPatientScore} from 'actions/patient';
import {clickNewAssessment} from 'actions/datacollection';
import {getSelectedDisease} from 'selectors/selected_diseases';
import {getPatient, getSelectedCoa} from 'selectors/selected_patients';
import {getDiseasePromScore} from 'utils/diseases';
import ChartLine from '../charts/Chart.Line';
import {NavigatorStyles} from '../../navigation/Navigator.Styles.js';

const ConditionsDiseaseOverview = ({
  selectedDisease,
  selectedCoa,
  onFetchPatientScores,
  onFetchPatientScore,
  patient,
  onClickNewAssessment,
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const theme = useTheme();

  const chartWidth = Dimensions.get('window').width - 80;

  const fetchPatientScoresList = async () => {
    const response = await onFetchPatientScores(patient);
    return response.data;
  };

  const fetchPatientScoreDetail = async scoreId => {
    await onFetchPatientScore(patient, scoreId);
  };

  useEffect(() => {
    fetchPatientScoresList().then(res => {
      if (res && res.length) {
        fetchPatientScoreDetail(res[0].uid);
      }
    });
  }, []);

  const evolutionScores =
    selectedCoa.scores &&
    selectedCoa.scores.filter(s => s.percentage).slice(0, 10);

  const reverseScores = evolutionScores ? [...evolutionScores].reverse() : [];

  const chartValues = useMemo(
    () =>
      reverseScores.map(score => ({
        y: Math.round(score.percentage, 0),
        marker: `${score.date} - ${t('Score')}: ${score.percentage}%`,
      })),
    [reverseScores],
  );

  const assessmentClick = item => {
    onClickNewAssessment({
      origin: 'conditions_disease_overview',
      disease_slug: item.disease?.slug,
    });
    navigation.navigate('WebviewSimple', {
      url: `${Config.WEBVIEW_URL}/app/conditions/${item.id}/questionnaire`,
      title: <Text style={NavigatorStyles.title}>{t('Questionaire')}</Text>,
    });
  };

  const diseasePromScore = getDiseasePromScore(selectedDisease);

  return (
    <Layout style={ConditionsDiseaseReviewStyles.wrapper}>
      <Text style={ConditionsDiseaseReviewStyles.title}>
        {t('Assessments')}
      </Text>
      <Layout style={ConditionsDiseaseReviewStyles.cardContainer}>
        <EvaluationCard
          handleClick={() => assessmentClick(selectedDisease)}
          key={selectedDisease.id}
          data={Object.keys(diseasePromScore).length ? [diseasePromScore] : []}
          lastScoreText={t('Last assessment score')}
          fistScoreText={t('Do your first assessment')}
          btnText={t('Do a new assessment now')}
          showButton={false}
          fullWidth
        />
      </Layout>
      {reverseScores && chartValues.length > 0 ? (
        <Layout style={ConditionsDiseaseReviewStyles.cardContainer}>
          <ChartLine
            title={t('Score overview')}
            noValues={t('No scores available')}
            height={200}
            width={chartWidth}
            dataSets={[
              {color: theme['promptly-blue-400'], readings: chartValues},
            ]}
            maxVisibleValues={5}
          />
        </Layout>
      ) : null}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  selectedDisease: getSelectedDisease,
  selectedCoa: getSelectedCoa,
});

const mapDispatchToProps = {
  onFetchPatientScores: fetchPatientScores,
  onFetchPatientScore: fetchPatientScore,
  onClickNewAssessment: clickNewAssessment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConditionsDiseaseOverview);

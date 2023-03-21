import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
import {connect} from 'react-redux';
import {ConditionsDiseaseReviewStyles} from './Conditions.Styles';
import {getDiseasePromScore} from 'utils/diseases';
import {getDiseasePhysiciansTeam} from 'selectors/selected_providers';
import {getDiseaseTeamURL} from 'selectors/selected_api';
import {fetchDiseaseTeamMembers} from 'actions/diseases';
import Button from '../common/Button';
import EvaluationCard from '../common/EvaluationCard';
import ConditionsPhysicians from './Conditions.Physicians';
import {NavigatorStyles} from '../../navigation/Navigator.Styles';

const ConditionsDiseaseReview = ({
  pdisease,
  patient,
  fetchDiseaseTeamMembersFn,
  onClickConditionDetail,
}) => {
  useState(() => {
    fetchDiseaseTeamMembersFn(getDiseaseTeamURL(patient, pdisease), pdisease);
  }, []);

  const {t} = useTranslation();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const assessmentClick = item => {
    navigation.navigate('WebviewSimple', {
      url: `${Config.WEBVIEW_URL}/app/conditions/${item.id}/questionnaire`,
      title: <Text style={NavigatorStyles.title}>{t('Questionaire')}</Text>,
    });
  };
  const diseasePromScore = getDiseasePromScore(pdisease);
  const physiciansTeam = getDiseasePhysiciansTeam(pdisease);

  return (
    <Layout style={ConditionsDiseaseReviewStyles.container}>
      <Layout style={ConditionsDiseaseReviewStyles.blockContainer}>
        <Text category="h1" style={ConditionsDiseaseReviewStyles.title}>
          {pdisease.disease.name}
        </Text>
        <Layout style={ConditionsDiseaseReviewStyles.cardContainer}>
          <EvaluationCard
            handleClick={() => assessmentClick(pdisease)}
            key={pdisease.disease.id}
            data={
              Object.keys(diseasePromScore).length ? [diseasePromScore] : []
            }
            lastScoreText={t('Last assessment score')}
            fistScoreText={t('Do your first assessment')}
            btnText={t('Do a new assessment now')}
            showButton={false}
            fullWidth
          />
        </Layout>
      </Layout>
      {Boolean(physiciansTeam.length) && (
        <Layout style={ConditionsDiseaseReviewStyles.blockContainer}>
          <Text category="h1" style={ConditionsDiseaseReviewStyles.subtitle}>
            {t('Health Professionals')}
          </Text>
          <Layout style={{left: -20, width: width}}>
            <ConditionsPhysicians items={physiciansTeam} />
          </Layout>
        </Layout>
      )}
      <Button
        accessibilityLabel={t('View condition details')}
        onPress={() => {
          onClickConditionDetail({
            disease_slug: pdisease.disease?.slug,
          });
          navigation.navigate('ConditionsDetail', {conditionID: pdisease.id});
        }}
        status="primary">
        {t('View condition details')}
      </Button>
    </Layout>
  );
};

export default connect(null, {
  fetchDiseaseTeamMembersFn: fetchDiseaseTeamMembers,
})(ConditionsDiseaseReview);

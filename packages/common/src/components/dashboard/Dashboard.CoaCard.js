import React from 'react';
import {Layout} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config';
import EvaluationCard from '../common/EvaluationCard';
import {DashboardCoaCardStyles} from '../dashboard/Dashboard.Styles';
import {getDiseasePromScore} from 'utils/diseases';

const DashboardCoaCard = ({pdisease, onClickCoaDetail = () => {}}) => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const diseasePromScore = getDiseasePromScore(pdisease);
  const assessmentClick = item =>
    navigation.navigate('WebviewSimple', {
      url: `${Config.WEBVIEW_URL}/app/conditions/${item.id}/questionnaire`,
      title: t('Questionaire'),
    });
  const handleCoaClick = () => {
    onClickCoaDetail();
    navigation.navigate('DashboardCoaDetails');
  };

  return (
    <Layout style={DashboardCoaCardStyles.cardContainer}>
      <EvaluationCard
        title={pdisease.disease.name}
        handleClick={() => assessmentClick(pdisease)}
        key={pdisease.disease.id}
        data={Object.keys(diseasePromScore).length ? [diseasePromScore] : []}
        lastScoreText={t('Last assessment score')}
        fistScoreText={t('Do your first assessment')}
        btnText={t('Do a new assessment now')}
        showButton={false}
        fullWidth
        handleCoaClick={() => handleCoaClick()}
      />
    </Layout>
  );
};

export default DashboardCoaCard;

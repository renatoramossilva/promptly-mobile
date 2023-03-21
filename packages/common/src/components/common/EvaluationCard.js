import React from 'react';
import {TouchableOpacity} from 'react-native';
import {EvaluationCardStyles} from './EvaluationCard.Styles';
import {Text, Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import Button from './Button';
import AnalyticScore from './AnalyticScore';
import ProgressBar from './ProgressBar';

const getDescription = (isEmpty, lastScoreText, fistScoreText) =>
  isEmpty ? fistScoreText : lastScoreText;

const EvaluationCard = ({
  title,
  data,
  lastScoreText,
  fistScoreText,
  handleClick,
  handleCoaClick,
}) => {
  const isEmpty = !(data && !!Object.keys(data).length);
  const {t} = useTranslation();
  return (
    <Layout>
      {title && (
        <Text
          category="h1"
          testID="firstTitle"
          style={EvaluationCardStyles.title}>
          {title}
        </Text>
      )}
      <Text
        category="h1"
        testID="secondTitle"
        style={EvaluationCardStyles.subtitle}>
        {getDescription(isEmpty, lastScoreText, fistScoreText)}
      </Text>
      {!isEmpty &&
        data &&
        data.map((coa) => {
          const {scores} = coa;
          return scores.map((score, i) => (
            <TouchableOpacity
              key={coa.uid}
              onPress={() => (handleCoaClick ? handleCoaClick(coa) : null)}>
              <>
                <Layout style={EvaluationCardStyles.scoreContainer}>
                  <Text category="h1" style={EvaluationCardStyles.coaName}>
                    {coa.name}
                  </Text>
                  <AnalyticScore zoom={1} data={score} />
                </Layout>
                <ProgressBar score={score.percentage} />
              </>
            </TouchableOpacity>
          ));
        })}
      <Button
        style={{marginTop: 20}}
        accessibilityLabel={t('Do a new assessment now')}
        onPress={handleClick}
        status="primary">
        {t('Do a new assessment now')}
      </Button>
    </Layout>
  );
};
export default EvaluationCard;

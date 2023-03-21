import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import {ResumeChartInvalidScoreStyles} from './ResumeChart.Styles';

const ResumeChartInvalidScore = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <Layout
      testID="resumeChartInvalidScore"
      style={ResumeChartInvalidScoreStyles.container}>
      <Image
        source={require('../../images/img-prom-invalid-score.png')}
        style={ResumeChartInvalidScoreStyles.image}
      />
      <Text category="h1" style={ResumeChartInvalidScoreStyles.title}>
        {t("Why I don't have a score?")}
      </Text>
      <Text
        category="p"
        style={[
          ResumeChartInvalidScoreStyles.description,
          {color: theme['color-basic-200']},
        ]}>
        {t(
          'Since you selected some responses with the option that you do not know or cannot answer, we are unable to calculate your PROM score. In order to know the score of PROM, and to help clinicians understand better how you feel, you must answer the questionnaire again and give deterministic answers.',
        )}
      </Text>
    </Layout>
  );
};

export default ResumeChartInvalidScore;

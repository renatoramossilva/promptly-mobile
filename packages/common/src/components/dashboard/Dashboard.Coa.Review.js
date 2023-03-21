import React from 'react';
import {Dimensions} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {getRGBACode} from 'utils/color';
import {
  DashboardCoaCardStyles,
  DashboardCoaDetailsStyles,
} from '../dashboard/Dashboard.Styles';
import ResumeChartLabelHolder from '../resumeChart/ResumeChart.LabelHolder';
import ResumeChart from '../resumeChart/ResumeChart';
import ResumeChartInvalidScore from '../resumeChart/ResumeChart.InvalidScore';

const DashboardCoaReview = ({coa, avgLabel, scoreLabel}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  const lastScore = coa.scores && coa.scores[0];

  if (!lastScore) {
    return null;
  }

  const graphWidth = Dimensions.get('window').width - 40;
  const graphHeight = graphWidth / 2;

  return (
    <Layout
      style={[DashboardCoaCardStyles.cardContainer, {paddingHorizontal: 0}]}>
      <Layout style={{paddingHorizontal: 15}}>
        <Text
          testID="DashboardCoaReviewTitle"
          category="h1"
          style={DashboardCoaDetailsStyles.title}>
          {coa.name}
        </Text>
        <Text category="p1">{t('Last assessment score')}</Text>
      </Layout>
      {lastScore.percentage !== null ? (
        <>
          <ResumeChart
            graphWidth={graphWidth}
            graphHeight={graphHeight}
            lastScore={lastScore}
            gradientStart={getRGBACode('#bfe9dc', 0.2)}
            gradientEnd={'#6abea3'}
          />
          <ResumeChartLabelHolder
            entries={[
              {label: avgLabel, color: theme['color-basic-300']},
              {label: scoreLabel, color: theme['promptly-blue-400']},
            ]}
          />
        </>
      ) : (
        <ResumeChartInvalidScore />
      )}
    </Layout>
  );
};

export default DashboardCoaReview;

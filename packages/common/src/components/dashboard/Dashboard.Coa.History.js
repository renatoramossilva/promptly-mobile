import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';
import {Layout, useTheme} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import ChartLine from '../charts/Chart.Line';
import {
  DashboardCoaCardStyles,
  DashboardCoaHistoryStyles,
} from './Dashboard.Styles';
import DashboardCoaHistoryItem from './Dashboard.Coa.History.Item';

const DashboardCoaHistory = ({scores = [], settings}) => {
  const {t} = useTranslation();
  const reverseScores = [...scores].reverse();
  const theme = useTheme();

  const chartValues = useMemo(
    () =>
      reverseScores.map((score) => ({
        y: Math.round(score.percentage, 0),
        marker: `${score.date} - ${t('Score')}: ${score.percentage}%`,
      })),
    [reverseScores],
  );

  const chartWidth = Dimensions.get('window').width - 80;

  return scores.length > 0 ? (
    <Layout
      testID="dashboardCoaHistoryResults"
      style={[
        DashboardCoaCardStyles.cardContainer,
        {paddingHorizontal: 15, paddingVertical: 5},
      ]}>
      <Layout style={DashboardCoaHistoryStyles.itemContainer}>
        <ChartLine
          noValues={t('No scores available')}
          height={200}
          width={chartWidth}
          dataSets={[
            {color: theme['promptly-blue-400'], readings: chartValues},
          ]}
          maxVisibleValues={5}
        />
      </Layout>
      {scores.map((score) => (
        <DashboardCoaHistoryItem score={score} key={score.id} />
      ))}
    </Layout>
  ) : null;
};

export default DashboardCoaHistory;

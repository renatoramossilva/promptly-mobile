import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {DashboardCoaHistoryStyles} from './Dashboard.Styles';

const DashboardCoaHistoryItem = ({score}) => {
  const theme = useTheme();

  return (
    <Layout
      style={[
        DashboardCoaHistoryStyles.itemContainer,
        DashboardCoaHistoryStyles.border,
      ]}>
      <Text
        testID="historyItemDate"
        style={[
          DashboardCoaHistoryStyles.date,
          {color: theme['color-basic-300']},
        ]}>
        {score.date}
      </Text>
      <Layout
        style={DashboardCoaHistoryStyles.itemScore}
        testID="historyItemScore">
        <Text
          category="h1"
          style={[
            DashboardCoaHistoryStyles.score,
            {color: theme['color-basic-300']},
          ]}>
          {Math.round(score.percentage, 0)}
        </Text>
        <Text
          category="h1"
          style={[
            DashboardCoaHistoryStyles.score,
            {color: theme['color-basic-200']},
          ]}>
          /{score.scale.percentage || 100}
        </Text>
      </Layout>
    </Layout>
  );
};

export default DashboardCoaHistoryItem;

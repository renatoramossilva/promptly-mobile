import React from 'react';
import {Layout, useTheme} from '@ui-kitten/components';
import {ProgressBarStyles} from './ProgressBar.Styles';

const AnalyticScore = ({score}) => {
  const theme = useTheme();
  return (
    <Layout
      style={[
        ProgressBarStyles.container,
        {backgroundColor: theme['color-basic-transparent-300']},
      ]}>
      <Layout
        style={[
          ProgressBarStyles.bar,
          {
            backgroundColor: theme['promptly-blue-300'],
            width: `${Math.round(score)}%`,
          },
        ]}
      />
    </Layout>
  );
};
export default AnalyticScore;

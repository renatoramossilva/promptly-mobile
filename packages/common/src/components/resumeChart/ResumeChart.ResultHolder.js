import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {ResumeChartResultHolderStyles} from './ResumeChart.Styles';

const ResumeChartResultHolder = ({lastScore, label, graphHeight = 200}) => {
  const theme = useTheme();

  return (
    <View
      testID="ResumeChartResultHolder"
      style={[
        ResumeChartResultHolderStyles.container,
        {bottom: graphHeight - 20},
      ]}>
      <View style={ResumeChartResultHolderStyles.values}>
        <Text
          testID="ResumeChartResultHolderScore1"
          category="h1"
          style={[
            ResumeChartResultHolderStyles.text,
            {color: theme['promptly-blue-400']},
          ]}>
          {Math.round(lastScore.percentage, 0)}
        </Text>
        <Text
          testID="ResumeChartResultHolderScore2"
          category="h1"
          style={[
            ResumeChartResultHolderStyles.text,
            {color: theme['promptly-blue-300']},
          ]}>
          /{lastScore.scale.percentage || 100}
        </Text>
      </View>
      <Text
        category="h5"
        testID="ResumeChartResultHolderScoreLabel"
        style={ResumeChartResultHolderStyles.label}>
        {label}
      </Text>
    </View>
  );
};

export default ResumeChartResultHolder;

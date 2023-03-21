import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import Circle from '../common/Circle';
import {ResumeChartLabelHolderStyles} from './ResumeChart.Styles';

const CircleLabelHolder = ({entries}) => {
  const theme = useTheme();
  return (
    <View
      style={ResumeChartLabelHolderStyles.labelContainer}
      testID="CircleLabelHolderItems">
      {entries.map((entry) => (
        <View style={ResumeChartLabelHolderStyles.label} key={entry.label}>
          <Circle color={entry.color} style={{marginRight: 5}} />
          <Text style={{color: theme['color-basic-200'], fontSize: 18}}>
            {entry.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CircleLabelHolder;

import React, {useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import Circle from '../common/Circle';
import {ResumeChartValueMarkerStyles} from './ResumeChart.Styles';

const ResumeChartValueMarker = ({
  circleColor,
  circleSize,
  circleStyle,
  scoreRotation,
  graphWidth,
  animate,
}) => {
  const spinValue = useState(new Animated.Value(0))[0];

  const CallAnimation = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    CallAnimation();
  }, []);

  const scoreSpin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', `${scoreRotation}deg`],
  });

  return (
    <Animated.View
      style={[
        ResumeChartValueMarkerStyles.container,
        {
          width: graphWidth - 20,
          transform: [{rotate: animate ? scoreSpin : `${scoreRotation}deg`}],
        },
      ]}>
      <Circle color={circleColor} style={circleStyle} size={circleSize} />
    </Animated.View>
  );
};

export default ResumeChartValueMarker;

import React from 'react';
import {View} from 'react-native';
import {CircleStyles} from './Circle.Styles';

const Circle = ({
  color = 'black',
  size = 30,
  border = 4,
  shadow = true,
  style,
}) => {
  return (
    <View
      testID="Circle"
      style={[
        CircleStyles.circle,
        shadow && CircleStyles.circleShadow,
        {
          width: size,
          height: size,
          borderRadius: size,
          backgroundColor: color,
          borderWidth: border,
        },
        style,
      ]}
    />
  );
};

export default Circle;

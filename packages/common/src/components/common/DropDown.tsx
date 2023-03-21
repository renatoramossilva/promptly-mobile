import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import PromptlyIcon from './PromptlyIcon';
import {DropDownStyles} from './DropDown.Styles';

interface DropDownProps {
  title: string;
  onPress: () => void;
};

const DropDown: React.FC<DropDownProps> = ({
  title,
  onPress = () => {},
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      testID='DropDown'
      onPress={onPress}
      style={DropDownStyles.container as StyleProp<ViewStyle>}>
      <Text category="h1" style={DropDownStyles.title} testID='DropDownTitle'>
        {title}
      </Text>
      <PromptlyIcon
        name="arrowBottom"
        size={18}
        color={theme['color-basic-900']}
      />
    </TouchableOpacity>
  );
}

export default DropDown;
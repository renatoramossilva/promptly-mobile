import React from 'react';
import {Text, Button as UIKButton} from '@ui-kitten/components';
import {ButtonStyles} from './Button.Styles';

const Button = ({
  onPress,
  children,
  accessibilityLabel,
  status,
  style,
  accessoryLeft = undefined,
  disabled = false,
}) => {
  return (
    <UIKButton
      testID="Button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      status={status}
      style={[ButtonStyles.button, style]}
      accessoryLeft={accessoryLeft}
      disabled={disabled}>
      <Text style={ButtonStyles.buttonText} category="p1">
        {children}
      </Text>
    </UIKButton>
  );
};
export default Button;

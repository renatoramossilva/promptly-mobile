import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {TextInput as RNTextInput} from 'react-native';
import {TextInputStyles} from './TextInput.Styles';

const TextInput = ({
  label,
  fieldKey,
  value,
  onChange,
  labelStyle,
  textStyle,
  errorText,
  placeholder,
}) => {
  const theme = useTheme();
  return (
    <Layout style={TextInputStyles.container} testID="textInputContainer">
      {!!label && (
        <Text
          style={[
            TextInputStyles.label,
            {color: theme['color-basic-300']},
            labelStyle,
          ]}
          testID="textInputLabel">
          {label}
        </Text>
      )}
      <RNTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={(e) => {
          onChange(e, fieldKey);
        }}
        style={[
          TextInputStyles.textInput,
          {
            borderColor: !errorText ? theme['color-info-500'] : 'red',
            color: theme['color-basic-300'],
          },
          textStyle,
        ]}
        keyboardType="default"
        testID="textInputField"
      />
      {Boolean(errorText) && (
        <Text style={TextInputStyles.errorText}>{errorText}</Text>
      )}
    </Layout>
  );
};

TextInput.defaultProps = {
  labelStyle: {},
  textStyle: {},
  errorText: '',
  placeholder: undefined,
  noMargin: false,
  label: '',
};

TextInput.propTypes = {
  label: PropTypes.string,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelStyle: PropTypes.object,
  textStyle: PropTypes.object,
  placeholder: PropTypes.string,
};

export default TextInput;

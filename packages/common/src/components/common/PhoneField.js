import React, {useRef, useState} from 'react';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import PhoneInput from 'react-native-phone-number-input';
import {MyAccountCaregiverStyles} from '../myaccount/MyAccount.Styles';

const PhoneField = ({
  countryValue,
  phoneNumber,
  label,
  errorText,
  onPhoneDataChange,
  clearErrors,
  disabled,
}) => {
  const theme = useTheme();
  const [phone, setPhone] = useState(phoneNumber || '');
  const phoneInput = useRef();

  const handleInputChange = (value) => {
    setPhone(value);
    const countryCode = phoneInput.current.getCountryCode();
    onPhoneDataChange(value, countryCode);
  };

  return (
    <Layout
      style={MyAccountCaregiverStyles.inputWrapper}
      testID="phoneFieldContainer">
      <Text
        style={[
          MyAccountCaregiverStyles.fieldText,
          {color: theme['color-basic-300']},
        ]}
        testID="phoneFieldLabel">
        {label}
      </Text>
      <PhoneInput
        ref={phoneInput}
        defaultCode={countryValue}
        defaultValue={phoneNumber}
        value={phone}
        placeholder=" "
        disabled={disabled}
        layout="first"
        onChangeText={(text) => {
          clearErrors();
          handleInputChange(text);
        }}
        containerStyle={[
          MyAccountCaregiverStyles.phoneInputContainer,
          {borderColor: theme['color-info-500']},
          !!errorText && MyAccountCaregiverStyles.phoneError,
        ]}
        textContainerStyle={[
          MyAccountCaregiverStyles.textContainer,
          {borderColor: theme['color-info-500']},
        ]}
      />
      {!!errorText && (
        <Text
          style={MyAccountCaregiverStyles.textInputError}
          testID="errorText">
          {errorText}
        </Text>
      )}
    </Layout>
  );
};

PhoneField.defaultProps = {
  defaultCountry: 'PT',
  disabled: false,
};

export default PhoneField;

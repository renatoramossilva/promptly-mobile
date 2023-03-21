import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import TextInput from 'components/common/TextInput';
import Select from 'components/common/Select';
import Datepicker from 'components/common/Datepicker';
import SubHeader from 'components/common/SubHeader';
import PhoneField from 'components/common/PhoneField';
import {getOptionLabel} from '../../../../utils';
import {GENDER_OPTIONS} from '../../../../constants/myAccount';
import {MyAccountGeneralInfoStyles} from '../../MyAccount.Styles';

const PersonalForm = ({
  getValue,
  onChange,
  t,
  clearErrors,
  getErrors,
  nationalities,
  countries,
  language,
  onPhoneDataChange,
}) => (
  <Layout style={{marginBottom: 15}} testID="personalFormContainer">
    <SubHeader
      title={t('Personal information')}
      description={t(
        'Your information is encrypted. Only you and approved medical staff by you can view this information.',
      )}
    />
    <Layout style={MyAccountGeneralInfoStyles.formContainer}>
      <TextInput
        label={t('Name')}
        fieldKey="name"
        value={getValue('name')}
        onChange={onChange}
        errorText={getErrors('name')}
      />
      <Datepicker
        label={t('Birthdate')}
        fieldKey="birthdate"
        value={getValue('birthdate')}
        noFutureDate
        onChange={onChange}
        language={language}
        errorText={getErrors('birthdate')}
      />
      <Select
        label={t('Gender')}
        fieldKey="gender"
        value={getOptionLabel(getValue('gender'), GENDER_OPTIONS)}
        options={GENDER_OPTIONS}
        onChange={onChange}
        errorText={getErrors('gender')}
      />
      <TextInput
        label={t('Email')}
        fieldKey="email"
        value={getValue('email')}
        onChange={onChange}
        errorText={getErrors('email')}
      />
      <PhoneField
        countryValue={getValue('phone_country')}
        phoneNumber={getValue('phone')}
        label={t('Cell phone number')}
        errorText={getErrors('phone')}
        onPhoneDataChange={onPhoneDataChange}
        clearErrors={clearErrors}
      />
      <TextInput
        label={t('Address')}
        fieldKey="city"
        value={getValue('city')}
        placeholder={t('City')}
        onChange={onChange}
      />
      <TextInput
        fieldKey="state"
        value={getValue('state')}
        placeholder={t('State')}
        onChange={onChange}
      />
      <Select
        fieldKey="country"
        value={getOptionLabel(getValue('country'), countries)}
        options={countries}
        onChange={onChange}
        placeholder={t('Country')}
      />
      <Select
        label={t('Nationality')}
        fieldKey="nationality"
        value={getOptionLabel(getValue('nationality'), nationalities)}
        options={nationalities}
        onChange={onChange}
        placeholder={t('Nationality')}
      />
      <TextInput
        label={t('ID Number')}
        fieldKey="national_id"
        value={getValue('national_id')}
        onChange={onChange}
      />
      <TextInput
        label={t('VAT Number')}
        fieldKey="vat_number"
        value={getValue('vat_number')}
        onChange={onChange}
      />
      <TextInput
        label={t('National health number')}
        fieldKey="nhs_id"
        value={getValue('nhs_id')}
        onChange={onChange}
      />
    </Layout>
  </Layout>
);

PersonalForm.defaultProps = {
  nationalities: [],
  countries: [],
};

PersonalForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  getErrors: PropTypes.func.isRequired,
  nationalities: PropTypes.array,
  countries: PropTypes.array,
  language: PropTypes.string.isRequired,
};

export default PersonalForm;

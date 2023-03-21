import React from 'react';
import {Layout} from '@ui-kitten/components';
import PhoneField from '../../common/PhoneField';
import {RELATIONSHIP_ITEMS} from '../../../constants/forms';
import TextInput from '../../common/TextInput';
import Select from '../../common/Select';
import {getOptionLabel} from '../../../utils';

const MyAccountCaregiverForm = ({
  t,
  getValue,
  getErrors,
  clearErrors,
  handleChange,
  onPhoneDataChange,
}) => (
  <Layout style={{marginBottom: 30}}>
    <TextInput
      label={t('Name')}
      fieldKey="name"
      value={getValue('name')}
      onChange={handleChange}
    />
    <PhoneField
      countryValue={getValue('phone_country')}
      phoneNumber={getValue('phone')}
      label={t('Cell phone number')}
      errorText={getErrors('phone')}
      onPhoneDataChange={onPhoneDataChange}
      clearErrors={clearErrors}
    />
    <Select
      label={t('Relationship')}
      fieldKey="relationship"
      value={getOptionLabel(getValue('relationship'), RELATIONSHIP_ITEMS)}
      options={RELATIONSHIP_ITEMS}
      onChange={handleChange}
    />
  </Layout>
);

export default MyAccountCaregiverForm;

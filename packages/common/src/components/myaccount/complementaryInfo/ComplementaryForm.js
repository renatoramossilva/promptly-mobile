import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import TextInput from '../../common/TextInput';
import Select from '../../common/Select';
import {
  MERITAL_OPTIONS,
  PROFESSIONAL_STATUS_OPTIONS,
  EDUCATION_OPTIONS,
  YES_NO_OPTIONS,
} from '../../../constants/myAccount';
import {getOptionLabel} from '../../../utils';
import SubHeader from '../../common/SubHeader';
import {MyAccountComplementaryInfoStyles} from '../MyAccount.Styles';

const ComplementaryForm = ({getValue, onChange, t}) => (
  <Layout style={{marginBottom: 30}} testID="complementaryFormContainer">
    <SubHeader
      title={t('Complementary information')}
      description={t(
        'Your information is encrypted. Only you and approved medical staff by you can view this information.',
      )}
    />
    <Layout style={MyAccountComplementaryInfoStyles.complementaryInfoWrapper}>
      <TextInput
        label={t('Name you like to be called')}
        fieldKey="name"
        value={getValue('name')}
        onChange={onChange}
      />
      <Select
        label={t('Marital status')}
        fieldKey="marital_status"
        value={getOptionLabel(getValue('marital_status'), MERITAL_OPTIONS)}
        options={MERITAL_OPTIONS}
        onChange={onChange}
      />
      <Select
        label={t('Professional status')}
        fieldKey="professional_status"
        value={getOptionLabel(
          getValue('professional_status'),
          PROFESSIONAL_STATUS_OPTIONS,
        )}
        options={PROFESSIONAL_STATUS_OPTIONS}
        onChange={onChange}
      />
      <Select
        label={t('Education level')}
        fieldKey="education_status"
        value={getOptionLabel(getValue('education_status'), EDUCATION_OPTIONS)}
        options={EDUCATION_OPTIONS}
        onChange={onChange}
      />
      <Layout style={{marginTop: 30}}>
        <TextInput
          label={t('City of birth')}
          fieldKey="city"
          value={getValue('city')}
          onChange={onChange}
        />
      </Layout>
      <Layout>
        <TextInput
          label={t('Household composition')}
          fieldKey="household_composition"
          value={getValue('household_composition')}
          onChange={onChange}
        />
      </Layout>
      <Select
        label={t('Family / institutional support network')}
        fieldKey="family_suport_network"
        value={getOptionLabel(
          getValue('family_suport_network'),
          YES_NO_OPTIONS,
        )}
        options={YES_NO_OPTIONS}
        onChange={onChange}
      />
    </Layout>
  </Layout>
);

ComplementaryForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default ComplementaryForm;

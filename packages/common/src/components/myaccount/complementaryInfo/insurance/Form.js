import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import Select from '../../../common/Select';
import TextInput from '../../../common/TextInput';
import {MyAccountComplementaryInfoStyles} from '../../MyAccount.Styles';

const InsuranceSectionForm = ({insurances, getValue, onChange, t}) => (
  <Layout
    style={MyAccountComplementaryInfoStyles.insuranceForm}
    testID="insuranceFormContainer">
    <Select
      label={t('Insurance company')}
      fieldKey="name"
      value={getValue('name')}
      options={insurances}
      onChange={onChange}
    />
    <TextInput
      label={t('Insurance policy number')}
      fieldKey="number"
      value={getValue('number')}
      onChange={onChange}
    />
  </Layout>
);

InsuranceSectionForm.propTypes = {
  insurances: PropTypes.array.isRequired,
  getValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default InsuranceSectionForm;

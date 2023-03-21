import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import Select from '../../common/Select';
import {YES_NO_OPTIONS} from '../../../constants/myAccount';
import {getOptionLabel} from '../../../utils';
import SubHeader from '../../common/SubHeader';
import {MyAccountComplementaryInfoStyles} from '../MyAccount.Styles';

const BeliefForm = ({getValue, onChange, t}) => (
  <Layout style={{marginBottom: 30}}>
    <SubHeader
      title={t('Belief')}
      description={t(
        'Your information is encrypted. Only you and approved medical staff by you can view this information.',
      )}
    />
    <Layout style={MyAccountComplementaryInfoStyles.beliefWrapper}>
      <Select
        label={t('Religious belief')}
        fieldKey="religious_belief"
        value={getOptionLabel(getValue('religious_belief'), YES_NO_OPTIONS)}
        options={YES_NO_OPTIONS}
        onChange={onChange}
      />
      <Select
        label={t('Religious assistence')}
        fieldKey="religious_assistence"
        value={getOptionLabel(getValue('religious_assistence'), YES_NO_OPTIONS)}
        options={YES_NO_OPTIONS}
        onChange={onChange}
      />
    </Layout>
  </Layout>
);

BeliefForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default BeliefForm;

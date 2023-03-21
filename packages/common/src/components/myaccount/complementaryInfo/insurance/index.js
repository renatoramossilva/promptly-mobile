import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getInsuranceOptions} from 'selectors/selected_entities';
import {fetchInsurancesAction} from 'actions/entities';
import InsuranceSectionForm from './Form';
import SubHeader from '../../../common/SubHeader';
import {MyAccountComplementaryInfoStyles} from '../../MyAccount.Styles';

const InsuranceSection = ({
  t,
  fetchInsurances,
  insurances,
  onChange,
  getValue,
}) => {
  useEffect(() => {
    fetchInsurances();
  }, []);

  if (!insurances.length) {
    return <Layout testID="noInsurances" />;
  }

  return (
    <Layout style={MyAccountComplementaryInfoStyles.insuranceSection}>
      <SubHeader
        title={t('Health insurance')}
        description={t(
          'Important for health institution administrative services',
        )}
      />
      <InsuranceSectionForm
        insurances={insurances}
        getValue={(field) => getValue(`insurance.${field}`)}
        onChange={(value, field) => onChange(value, `insurance.${field}`)}
        t={t}
      />
    </Layout>
  );
};

InsuranceSection.defaultProps = {
  insurances: [],
};

InsuranceSection.propTypes = {
  t: PropTypes.func.isRequired,
  fetchInsurances: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  insurances: PropTypes.array,
  getValue: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  insurances: getInsuranceOptions,
});

const mapDispatchToProps = {
  fetchInsurances: fetchInsurancesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceSection);

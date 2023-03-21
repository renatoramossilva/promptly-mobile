import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {MyAccountComplementaryInfoStyles} from '../MyAccount.Styles';
import {updateUserData} from 'actions/user';
import {clickMyAccountSave} from 'actions/datacollection';
import {TAB_SECTIONS} from '../../../constants/myAccount';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {hasFeature} from '../../flag/flag';
import {getUserComplementaryInfo} from 'selectors/selected_user';
import InsuranceSection from './insurance';
import Button from '../../common/Button';
import ComplementaryForm from './ComplementaryForm';
import BeliefForm from './BeliefForm';

const MyAccountComplementaryInfo = ({
  diseaseItems,
  complementaryInfo,
  onUpdateUserData,
  onClickMyAccountSave,
}) => {
  const {t} = useTranslation();
  const [form, setForm] = useState(complementaryInfo || {});
  const [errors, setErrors] = useState({});

  const changeFormData = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const getValue = (field) => form[field] || '';
  const getErrors = (field) => errors[field] || undefined;

  const handleFormSubmit = () => {
    onClickMyAccountSave({name: TAB_SECTIONS[1]?.title});
    setErrors({});

    onUpdateUserData({
      private_data: {
        complementary_info: {
          ...form,
        },
      },
    });
  };

  return (
    <Layout style={MyAccountComplementaryInfoStyles.wrapper}>
      {hasFeature(diseaseItems, 'insurance') && (
        <InsuranceSection
          getValue={getValue}
          getErrors={getErrors}
          onChange={changeFormData}
          clearErrors={() => setErrors({})}
          t={t}
        />
      )}
      <ComplementaryForm onChange={changeFormData} getValue={getValue} t={t} />
      <BeliefForm onChange={changeFormData} getValue={getValue} t={t} />
      <Button onPress={() => handleFormSubmit()} style={{marginTop: -15}}>
        {t('Save changes')}
      </Button>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  diseaseItems: getDiseaseItems,
  complementaryInfo: getUserComplementaryInfo,
});

const mapDispatchToProps = {
  onUpdateUserData: updateUserData,
  onClickMyAccountSave: clickMyAccountSave,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountComplementaryInfo);

import React, {useState} from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {MyAccountCaregiverStyles} from '../MyAccount.Styles';
import Button from 'components/common/Button.js';
import MyAccountCaregiverForm from './MyAccount.Caregiver.Form';
import {validatePhone, fullNumber} from 'utils/validations';
import {updateUserData} from 'actions/user';
import {clickMyAccountSave} from 'actions/datacollection';
import {getUserCaregiver} from 'selectors/selected_user';
import {getLanguage} from 'selectors/selected_settings';
import {getCountryCode} from '../../../utils';
import {TAB_SECTIONS} from '../../../constants/myAccount';

const MyAccountCaregiver = ({
  onUpdateUserData,
  caregiver,
  language,
  onClickMyAccountSave,
}) => {
  const {t} = useTranslation();
  const [, phoneData] = validatePhone(caregiver.phone);
  const [form, setForm] = useState({
    ...caregiver,
    phone:
      phoneData && Object.keys(phoneData).length > 0
        ? phoneData.phone
        : caregiver.phone,
    phone_country:
      phoneData && Object.keys(phoneData).length > 0
        ? phoneData.country
        : getCountryCode(caregiver.phone_country, language),
  });
  const [errors, setErrors] = useState({});

  const changeFormData = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const changePhoneData = (phoneValue, phoneCountryValue) => {
    const newForm = {...form};
    newForm.phone = phoneValue;
    newForm.phone_country = phoneCountryValue;
    setForm(newForm);
  };

  const getValue = (field) => form[field] || '';
  const getErrors = (field) => errors[field] || undefined;

  const handleFormSubmit = () => {
    onClickMyAccountSave({name: TAB_SECTIONS[3]?.title});
    setErrors({});

    const [phoneIsValid, phoneValue] = validatePhone(
      form.phone,
      form.phone_country,
    );
    if (!phoneIsValid && form.phone) {
      setErrors({
        phone: t('Please insert a valid phone number'),
      });
      return;
    }

    onUpdateUserData({
      private_data: {
        caregiver: {
          ...form,
          phone: phoneIsValid ? fullNumber(phoneValue) : undefined,
        },
      },
    });
  };

  return (
    <Layout style={MyAccountCaregiverStyles.wrapper}>
      <MyAccountCaregiverForm
        getValue={getValue}
        getErrors={getErrors}
        clearErrors={() => setErrors({})}
        handleChange={changeFormData}
        onPhoneDataChange={changePhoneData}
        t={t}
      />
      <Layout testID="formButton">
        <Button onPress={() => handleFormSubmit()} style={{marginTop: -15}}>
          {t('Save changes')}
        </Button>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  caregiver: getUserCaregiver,
  language: getLanguage,
});

const mapDispatchToProps = {
  onUpdateUserData: updateUserData,
  onClickMyAccountSave: clickMyAccountSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountCaregiver);

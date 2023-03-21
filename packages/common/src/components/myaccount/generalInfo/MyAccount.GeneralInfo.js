import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {MyAccountGeneralInfoStyles} from '../MyAccount.Styles';
import {
  getAvatarUrl,
  getUser,
  getUserPrivateData,
} from 'selectors/selected_user';
import {getNationalities, getCountries} from 'selectors/selected_entities';
import {getLanguage} from 'selectors/selected_settings';
import PersonalInformation from './PersonalInfo/PersonalForm';
import {fetchGeoLocationsAction} from '../../../actions/entities';
import {clickMyAccountSave, clickChangePhoto} from 'actions/datacollection';
import {TAB_SECTIONS} from '../../../constants/myAccount';
import {updateUserData, uploadUserAvatar} from '../../../actions/user';
import Button from 'components/common/Button';
import ProfilePictureSection from './ProfilePicture/ProfilePictureSection';
import {fullNumber, validatePhone} from '../../../utils/validations';
import {getCountryCode, trim} from '../../../utils';
import {isPersonalFormValid} from '../../../utils/forms';
import {moment} from 'utils/dates';
import {DEFAULT_DATE_FORMAT} from '../../../constants/dates';
import parsePhoneNumberFromString from 'libphonenumber-js';

const MyAccountGeneraInformation = ({
  user,
  privateData,
  fetchGeoLocations,
  nationalities,
  countries,
  language,
  onUpdateUserData,
  onUploadUserAvatar,
  avatar,
  onClickMyAccountSave,
  onClickChangePhoto,
}) => {
  const {t} = useTranslation();
  const [, phoneData] = validatePhone(user.phone, user.phone_country);
  const [form, setForm] = useState(
    {
      ...privateData,
      email: user.email || '',
      phone:
        phoneData && Object.keys(phoneData).length > 0
          ? phoneData.phone
          : user.phone,
      phone_country:
        phoneData && Object.keys(phoneData).length > 0
          ? phoneData.country
          : getCountryCode(user.phone_country, language),
    } || {},
  );

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  const buildPersonalDataRequest = (data) => {
    const [, _phoneData] = validatePhone(data.phone, data.phone_country);
    const bday = moment(data.birthdate).format(DEFAULT_DATE_FORMAT);

    return {
      email: data.email,
      phone: fullNumber(_phoneData),
      phone_country: data.phone_country,
      internal_id: data.internal_id,
      private_data: {
        name: data.name,
        birthdate: bday,
        gender: data.gender,
        country: data.country,
        state: data.state,
        city: data.city,
        nationality: data.nationality,
        nhs_id: data.nhs_id,
        national_id: data.national_id,
        vat_number: data.vat_number,
      },
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGeoLocations();
      setLoading(false);
    };

    fetchData();
  }, []);

  const changeFormData = (value, field) => {
    const newForm = {...form};
    newForm[field] = value;
    setErrors({...errors, [field]: ''});
    setForm(newForm);
  };

  const changePhoneInput = (phoneValue, phoneCountryValue) => {
    setErrors({...errors, phone: '', phone_country: ''});
    const newForm = {...form};
    newForm.phone = phoneValue;
    newForm.phone_country = phoneCountryValue;
    setForm(newForm);
  };

  const getValue = (field) => form[field] || '';
  const getErrors = (field) => errors[field] || undefined;

  const checkForm = () => {
    const [isValid, newErrors] = isPersonalFormValid(form);
    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = () => {
    setErrors({});
    onClickMyAccountSave({name: TAB_SECTIONS[0]?.title});
    const isValid = checkForm();
    if (!isValid) {
      return;
    }

    let data = buildPersonalDataRequest(trim(form));
    onUpdateUserData(data).then((response) => {
      if (response.status === 200) {
        let {phone} = response.data;
        if (phone) {
          phone = parsePhoneNumberFromString(response.data.phone)
            .formatNational()
            .replace(/\s/g, '');
        }
        setForm({...form, phone});
      }
    });
  };

  if (!loading) {
    return (
      <Layout style={MyAccountGeneralInfoStyles.container}>
        <ProfilePictureSection
          title={t('Profile picture')}
          description={t(
            'Doctors will see this picture when they view your account. Helps to identify you.',
          )}
          buttonLabel={t('Change profile image')}
          onSubmit={data => {
            onClickChangePhoto();
            onUploadUserAvatar(data);
          }}
          avatar={avatar}
          userName={privateData.name}
          hintText={t(
            'Allowed .png, .jpg and .jpeg file types at least 200px high by 200px wide with a maximum size of 10MB',
          )}
          t={t}
        />
        <PersonalInformation
          t={t}
          formData={form}
          errors={errors}
          getValue={getValue}
          getErrors={getErrors}
          clearErrors={() => setErrors({})}
          onChange={changeFormData}
          user={user}
          nationalities={nationalities}
          countries={countries}
          language={language}
          onPhoneDataChange={changePhoneInput}
        />
        <Button style={{marginTop: 0}} onPress={() => handleFormSubmit()}>
          {t('Save changes')}
        </Button>
      </Layout>
    );
  }

  return null;
};

const mapStateToProps = createStructuredSelector({
  user: getUser,
  privateData: getUserPrivateData,
  nationalities: getNationalities,
  countries: getCountries,
  language: getLanguage,
  avatar: getAvatarUrl,
});

const mapDispatchToProps = {
  fetchGeoLocations: fetchGeoLocationsAction,
  onUpdateUserData: updateUserData,
  onUploadUserAvatar: uploadUserAvatar,
  onClickMyAccountSave: clickMyAccountSave,
  onClickChangePhoto: clickChangePhoto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountGeneraInformation);

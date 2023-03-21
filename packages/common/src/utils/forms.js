import {GENERAL_INFO_REQUIRED_FIELDS} from '../constants/forms';
import {
  EMAIL_INVALID_MSG,
  INVALID_COUNTRY_PHONE_MSG,
  INVALID_VAT_NUMBER,
  REQUIRED_MSG,
} from '../constants/messages';
import {makeTrans} from './translations';
import {validateEmail, validatePhone} from './validations';

export const isPersonalFormValid = (form) => {
  let isValid = true;
  const newErrors = {};

  GENERAL_INFO_REQUIRED_FIELDS.forEach((key) => {
    if (form[key] === '' || form[key] === undefined) {
      newErrors[key] = makeTrans(REQUIRED_MSG);
      isValid = false;
    }
  });

  if (form.email !== '' && form.email) {
    if (!validateEmail(form.email)) {
      isValid = false;
      newErrors.email = makeTrans(EMAIL_INVALID_MSG);
    }
  }

  if (form.phone !== '' && form.phone) {
    const [isPhoneValid, _] = validatePhone(form.phone, form.phone_country);

    if (!isPhoneValid) {
      newErrors.phone = makeTrans(INVALID_COUNTRY_PHONE_MSG);
      isValid = false;
    }
  }

  if (form.email === '' && (form.phone === null || form.phone === '')) {
    newErrors.email = makeTrans(REQUIRED_MSG);
    newErrors.phone = makeTrans(REQUIRED_MSG);
    isValid = false;
  }

  if (form.vat_number !== '' && form.vat_number.length < 4) {
    isValid = false;
    newErrors.vat_number = makeTrans(INVALID_VAT_NUMBER);
  }

  return [isValid, newErrors];
};

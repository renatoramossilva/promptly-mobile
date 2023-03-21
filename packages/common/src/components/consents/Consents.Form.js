import React from 'react';
import {Text, Layout, CheckBox} from '@ui-kitten/components';
import Button from '../common/Button';
import {useTranslation} from 'react-i18next';
import {ConsentsFormStyles} from './Consents.Styles';

const ConsentsForm = ({
  consent,
  activeConsentIndex,
  handleConsentFormSubmit,
  checkedConsent,
  setCheckedConsent,
}) => {
  const {t} = useTranslation();

  return consent ? (
    <Layout style={ConsentsFormStyles.container} testID="ConsentsForm">
      <CheckBox
        testID="Checkbox"
        style={ConsentsFormStyles.checkbox}
        checked={checkedConsent}
        onChange={(nextChecked) => setCheckedConsent(nextChecked)}>
        <Text style={ConsentsFormStyles.checkboxText}>{t('I accept')}</Text>
      </CheckBox>
      <Button
        disabled={!checkedConsent}
        accessibilityLabel={t('Next')}
        onPress={() => {
          handleConsentFormSubmit(consent, activeConsentIndex);
        }}
        status="primary">
        {t('Next')}
      </Button>
    </Layout>
  ) : null;
};

export default ConsentsForm;

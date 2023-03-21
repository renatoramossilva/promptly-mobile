import React, {useEffect, useState} from 'react';
import {Layout} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import {getSelectedOption} from '../../../utils';
import Select from '../../common/Select';
import {MyAccountPreferencesStyles} from '../MyAccount.Styles';
import {TAB_SECTIONS} from '../../../constants/myAccount';

const MyAccountPreferencesForm = ({
  languageOptions,
  language,
  timezoneOptions,
  timezone,
  onSubmitRegionalPreferences,
  languageLabel,
  timezoneLabel,
  buttonLabel,
  onClickMyAccountSave,
}) => {
  const [languageValue, setlanguageValue] = useState(
    getSelectedOption(languageOptions, language),
  );
  const [timezoneValue, setTimezoneValue] = useState(
    getSelectedOption(timezoneOptions, timezone),
  );

  useEffect(() => {
    setTimezoneValue(getSelectedOption(timezoneOptions, timezoneValue?.value));
  }, [timezoneOptions]);

  const onSubmit = () => {
    onClickMyAccountSave({name: TAB_SECTIONS[2]?.title});
    onSubmitRegionalPreferences(languageValue?.value, timezoneValue?.value);
  };

  const onLanguageChange = (value) => {
    setlanguageValue(getSelectedOption(languageOptions, value));
  };

  const onTimezoneChange = (value) => {
    setTimezoneValue(getSelectedOption(timezoneOptions, value));
  };

  return (
    <>
      <Layout>
        <Select
          label={languageLabel}
          value={languageValue?.label}
          options={languageOptions}
          onChange={onLanguageChange}
        />
      </Layout>
      <Layout>
        <Select
          label={timezoneLabel}
          value={timezoneValue?.label}
          options={timezoneOptions}
          onChange={onTimezoneChange}
        />
      </Layout>
      <Button
        style={MyAccountPreferencesStyles.buttonWrapper}
        onPress={onSubmit}>
        {buttonLabel}
      </Button>
    </>
  );
};

MyAccountPreferencesForm.propTypes = {
  languageOptions: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  timezoneOptions: PropTypes.array.isRequired,
  timezone: PropTypes.string.isRequired,
  onSubmitRegionalPreferences: PropTypes.func.isRequired,
  onClickMyAccountSave: PropTypes.func.isRequired,
  languageLabel: PropTypes.string.isRequired,
  timezoneLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default MyAccountPreferencesForm;

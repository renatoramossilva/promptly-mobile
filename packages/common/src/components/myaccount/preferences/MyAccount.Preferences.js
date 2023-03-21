import React, {useState, useEffect} from 'react';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  getLanguage,
  getLanguageOptions,
  getTimeZone,
} from 'selectors/selected_settings';
import {
  changeRegionalPreferences,
  fetchLanguageOptionsAction,
} from 'actions/settings';
import {clickMyAccountSave} from 'actions/datacollection';
import {getTrans} from 'utils/translations';
import {TIMEZONES} from '../../../constants/myAccount';
import MyAccountPreferencesForm from './MyAccount.Preferences.Form';
import {MyAccountPreferencesStyles} from '../MyAccount.Styles';
import SubHeader from '../../common/SubHeader';

const MyAccountPreferences = ({
  language,
  languageOptions,
  timezone,
  onSubmitRegionalPreferences,
  fetchLanguageOptions,
  onClickMyAccountSave,
}) => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      await fetchLanguageOptions();
      setLoading(false);
    };

    fetchLanguages();
  }, []);

  const buildOptions = (lang, items) =>
    items.map((i) => ({
      label: getTrans(i, 'label', lang),
      value: i.value,
    }));

  return (
    <Layout style={MyAccountPreferencesStyles.container}>
      {!loading && (
        <>
          <Layout style={{marginBottom: 20}}>
            <SubHeader title={t('Regional preferences')} />
          </Layout>
          <MyAccountPreferencesForm
            languageLabel={t('Language')}
            timezoneLabel={t('Time zone')}
            buttonLabel={t('Save settings')}
            language={language}
            timezone={timezone}
            timezoneOptions={buildOptions(language, TIMEZONES)}
            languageOptions={buildOptions(language, languageOptions)}
            onSubmitRegionalPreferences={onSubmitRegionalPreferences}
            onClickMyAccountSave={onClickMyAccountSave}
            t={t}
          />
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  language: getLanguage,
  languageOptions: getLanguageOptions,
  timezone: getTimeZone,
});

const mapDispatchToProps = {
  onSubmitRegionalPreferences: changeRegionalPreferences,
  fetchLanguageOptions: fetchLanguageOptionsAction,
  onClickMyAccountSave: clickMyAccountSave,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountPreferences);

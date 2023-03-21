import React, {useState, useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {MyAccountPrivacyStyles} from '../MyAccount.Styles';
import {clickPrivacyOpenItem, clickPrivacySaveItem} from 'actions/datacollection';
import {getPatient} from 'selectors/selected_patients';
import {getClinicalTrials} from 'selectors/selected_settings';
import {fetchClinicalTrials, updateClinicalTrials} from 'actions/settings';
import StatusBanner from '../../common/StatusBanner';
import MyAccountPrivacyList from './MyAccount.Privacy.List';

const MyAccountPrivacy = ({
  patient,
  clinicalTrials,
  fetchClinicalTrialsFn,
  updateClinicalTrialsFn,
  clickOpenItem,
  clickSaveItem,
}) => {
  const [isLoading, setLoading] = useState(true);
  const {t} = useTranslation();

  useEffect(() => {
    const {id} = patient;
    fetchClinicalTrialsFn(id).then(() => {
      setLoading(false);
    });
  }, []);

  if (isLoading || !clinicalTrials) {
    return false;
  }

  if (clinicalTrials.length === 0) {
    const status = {
      image: require('../../../images/noresult.png'),
      imageFull: false,
      title: t("Your medical conditions don't require consent"),
      subtitle: t(
        'Some medical conditions require your autorization under GDPR',
      ),
    };
    return <StatusBanner status={status} />;
  }

  const handleSubmit = ({item, agreed}) => {
    clickSaveItem({name: item.title});
    const {id} = patient;
    const url = `/api/terms/patients/${id}/diseases/${item.pdid}/clinical-trials/${item.id}`;
    updateClinicalTrialsFn(url, agreed).then(() => {
      fetchClinicalTrialsFn(id).then(() => {
        setLoading(false);
      });
    });
  };

  return (
    <Layout style={MyAccountPrivacyStyles.wrapper}>
      <Text style={MyAccountPrivacyStyles.intro}>
        {t(
          'Consent management by clinical condition of institutions to your personal and clinical data.',
        )}
      </Text>
      <MyAccountPrivacyList
        clinicalTrials={clinicalTrials}
        t={t}
        handleClick={null}
        activeDropdown={null}
        handleSubmit={handleSubmit}
        clickOpenItem={clickOpenItem}
      />
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  patient: getPatient,
  clinicalTrials: getClinicalTrials,
});

const mapDispatchToProps = {
  fetchClinicalTrialsFn: fetchClinicalTrials,
  updateClinicalTrialsFn: updateClinicalTrials,
  clickOpenItem: clickPrivacyOpenItem,
  clickSaveItem: clickPrivacySaveItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountPrivacy);

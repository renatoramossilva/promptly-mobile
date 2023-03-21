import React, {useState} from 'react';
import {connect} from 'react-redux';
import Modal from '../../common/Modal';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import Button from '../../common/Button';
import MyAccountPrivacyPopUpOptions from './MyAccount.Privacy.Popup.Options';
import {MyAccountPrivacyPopupStyles} from '../MyAccount.Styles';
import {useNavigation} from '@react-navigation/native';
import {exportClinicalTrial} from 'actions/settings';
import {clickPrivacyDownloadItem} from 'actions/datacollection';

const MyAccountPrivacyPopup = ({
  item,
  open,
  closePopup,
  t,
  handleSubmit,
  handleClinicalTrialExport,
  onClickPrivacyDownloadItem,
}) => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState(item.agreed);
  const navigation = useNavigation();

  const handleDownloadClick = () => {
    onClickPrivacyDownloadItem({name: item.title});
    navigation.navigate('WebviewSimple', {
      url: item.downloadUrl,
      title: t('Consents'),
    });
    setTimeout(() => {
      navigation.goBack();
      closePopup();
      handleClinicalTrialExport();
    }, 2000);
  };

  return (
    <Modal modalVisible={open} hideModal={closePopup}>
      <Layout>
        <Text style={MyAccountPrivacyPopupStyles.title}>
          {t(`${item.diseaseName} consent`)}
        </Text>
        <Text
          style={[
            MyAccountPrivacyPopupStyles.subTitle,
            {color: theme['color-info-500']},
          ]}>
          {t(
            'If consent is revoked, {{institution}} will not be abble to follow your clinical condition',
            {
              institution: item.institution,
            },
          )}
        </Text>
        <MyAccountPrivacyPopUpOptions
          handleSelect={(data) => {
            setSelectedOption(data);
          }}
          t={t}
          agreed={item.agreed}
        />
        <Layout>
          <Button
            size="giant"
            status="primary"
            onPress={() => {
              const payload = {
                item,
                agreed: selectedOption,
              };
              handleSubmit(payload);
              closePopup();
            }}>
            {t('Save')}
          </Button>
          <Text
            onPress={handleDownloadClick}
            style={MyAccountPrivacyPopupStyles.link}>
            {t('Download consent')}
          </Text>
        </Layout>
      </Layout>
    </Modal>
  );
};

const mapDispatchToProps = {
  handleClinicalTrialExport: exportClinicalTrial,
  onClickPrivacyDownloadItem: clickPrivacyDownloadItem,
};

export default connect(null, mapDispatchToProps)(MyAccountPrivacyPopup);

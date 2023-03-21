import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import StatusBanner from 'components/common/StatusBanner';
import {CareplanStyles} from 'components/careplan/Careplan.Styles';

const Careplan = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const illustration = {
    image: require('../images/careplan.png'),
    title: t('Special care for you'),
    subtitle: t(
      'Some institutions and doctors will share here tailored health care plans to help you with your medical conditions',
    ),
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme['promptly-blue-200']}}>
      <StatusBanner
        style={CareplanStyles.banner}
        status={illustration}
        innerStyles={{
          textContainer: CareplanStyles.illustration,
          title: CareplanStyles.title,
          subtitle: CareplanStyles.subtitle,
        }}
      />
    </ScrollView>
  );
};

export default Careplan;

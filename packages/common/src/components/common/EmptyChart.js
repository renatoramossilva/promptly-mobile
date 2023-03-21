import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import {EmptyChartStyles} from './EmptyChart.Styles';

const EmptyChart = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Layout style={EmptyChartStyles.container} testID="EmptyChart">
      <Image
        source={require('../../images/empty-chart-device.png')}
        style={EmptyChartStyles.image}
      />
      <Text style={EmptyChartStyles.title}>{t('Waiting for data')}</Text>
      <Text
        style={[
          EmptyChartStyles.description,
          {color: theme['color-info-500']},
        ]}>
        {t(
          'We are ready to receive your health data from measurement devices. Make sure the device is properly connected with Promptly',
        )}
      </Text>
    </Layout>
  );
};

export default EmptyChart;

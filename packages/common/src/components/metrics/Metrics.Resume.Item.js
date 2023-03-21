import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {MetricsResumeItemStyles} from './Metrics.Styles';
import RoundIcon from 'components/common/RoundIcon';
import MetricReading from 'components/common/MetricReading';

const MetricsResumeItem = ({item, ClassifierComponent, onPressAdd}) => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Layout style={MetricsResumeItemStyles.card} testID="MetricsResumeItem">
      <Layout style={MetricsResumeItemStyles.containerLeft}>
        <Text
          category="h1"
          style={MetricsResumeItemStyles.title}
          testID="MetricsResumeItemTitle">
          {item.title}
        </Text>
        <MetricReading
          metric={item}
          ClassifierComponent={ClassifierComponent}
        />
        {item.label && (
          <Text
            category="h1"
            style={MetricsResumeItemStyles.label}
            testID="MetricsResumeItemLabel">
            {item.label}
          </Text>
        )}
        {!item.reading && (
          <Text
            testID="MetricsResumeItemWaiting"
            style={[
              MetricsResumeItemStyles.waiting,
              {color: theme['color-info-500']},
            ]}>
            {t('Waiting for data')}
          </Text>
        )}
      </Layout>
      {!item.readOnly && (
        <Layout style={MetricsResumeItemStyles.containerRight}>
          <TouchableOpacity
            testID="MetricsResumeItemAddMeasurement"
            onPress={() => {
              onPressAdd(item);
            }}
            style={MetricsResumeItemStyles.addButton}>
            <RoundIcon
              color={theme['color-primary-500']}
              size={35}
              iconName={'plus'}
              iconStyle={MetricsResumeItemStyles.addIcon}
            />
          </TouchableOpacity>
        </Layout>
      )}
    </Layout>
  );
};

export default MetricsResumeItem;

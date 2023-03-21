import React, {useMemo, useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {Dimensions, Linking, TouchableOpacity} from 'react-native';
import {DashboardMetricsItemStyles} from './Dashboard.Styles';
import {moment} from 'utils/dates';
import DashboardMetricsPopUp from './Dashboard.Metrics.PopUp';
import PromptlyIcon from '../common/PromptlyIcon';
import {useNavigation} from '@react-navigation/native';
import {validMetrics, deviceTypeMap} from '../../constants/metrics';
import MetricReading from 'components/common/MetricReading';

const DashboardMetricsItem = ({
  metric,
  devices,
  syncMeasurements,
  updateMeasurements,
  index,
  onclickDashboardMeasurementsDetail = () => {},
}) => {
  const [activeDropdown, setActiveDropdown] = useState(0);
  const [hasDevice, setHasDevice] = useState(false);

  const {t} = useTranslation();
  const navigation = useNavigation();
  const {description, date} = metric;

  const getDescription = useMemo(
    () =>
      !description && date ? moment(date).format('L | HH:mm') : description,
    [description, date],
  );

  const checkDevice = (type) => {
    setHasDevice(
      devices.some(
        (item) =>
          item.connected &&
          item.providerType === 'bluetooth' &&
          item.type === type,
      ),
    );
  };

  const toggleDrop = (m) => {
    const {category} = m;
    if (deviceTypeMap[category]) {
      checkDevice(deviceTypeMap[category].type);
    }
    setActiveDropdown(m.id === activeDropdown ? 0 : m.id);
  };

  const openUrl = url => {
    Linking.openURL(url);
  };

  return (
    <Layout
      style={[
        DashboardMetricsItemStyles.outerContainer,
        {
          marginLeft: index % 2 !== 0 ? 10 : 0,
          width: (Dimensions.get('window').width - 40) / 2,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          onclickDashboardMeasurementsDetail(validMetrics[metric.category]);
          navigation.navigate('DashboardMetricsDetails', {
            category: validMetrics[metric.category].tabId,
            syncMeasurements: syncMeasurements,
          });
        }}
        style={[
          DashboardMetricsItemStyles.innerContainer,
          {backgroundColor: metric.color},
        ]}
        testID="DashboardMetricsItem">
        <Layout style={DashboardMetricsItemStyles.dataContainer}>
          <Text
            testID="DashboardMetricsItemTitle"
            category="h1"
            style={DashboardMetricsItemStyles.title}>
            {metric.title}
          </Text>
          {metric.description || metric.date ? (
            <Text
              testID="DashboardMetricsItemSubtitle"
              category="h1"
              style={DashboardMetricsItemStyles.subtitle}>
              {getDescription}
            </Text>
          ) : null}
          <Layout style={DashboardMetricsItemStyles.readingContainer}>
            <MetricReading metric={metric} color={'white'} />
          </Layout>
          {metric.label ? (
            <Text
              style={DashboardMetricsItemStyles.noData}
              testID="DashboardMetricsItemLabel">
              {metric.label}
            </Text>
          ) : null}
          {!metric.reading && (
            <Text style={DashboardMetricsItemStyles.noData}>
              {t('Waiting for data')}
            </Text>
          )}
        </Layout>
        {!metric.readOnly && (
          <TouchableOpacity
            onPress={() => toggleDrop(metric)}
            style={DashboardMetricsItemStyles.newReadingContainer}
            testID="DashboardMetricsItemAddReading">
            <PromptlyIcon name="plus" style={DashboardMetricsItemStyles.icon} />
            <Text style={DashboardMetricsItemStyles.newReadingLabel}>
              {t('Add reading')}
            </Text>
          </TouchableOpacity>
        )}
        {metric.download_url ? (
          <TouchableOpacity
            onPress={() => openUrl(metric.download_url)}
            style={DashboardMetricsItemStyles.newReadingContainer}
            testID="DashboardMetricsItemDownload">
            <PromptlyIcon
              name="icon-download"
              style={DashboardMetricsItemStyles.icon}
            />
            <Text style={DashboardMetricsItemStyles.newReadingLabel}>
              {t('Download Report')}
            </Text>
          </TouchableOpacity>
        ) : null}
      </TouchableOpacity>
      <DashboardMetricsPopUp
        metric={metric}
        open={activeDropdown === metric.id}
        closePopup={() => setActiveDropdown(false)}
        hasDevice={hasDevice}
        deviceTypeMap={deviceTypeMap}
        syncMeasurements={syncMeasurements}
        updateMeasurements={updateMeasurements}
        isUpdate={false}
      />
    </Layout>
  );
};

export default DashboardMetricsItem;

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {getPatient} from 'selectors/selected_patients';
import {getDashboardMeasurementItems} from 'selectors/selected_measurements';
import {fetchDashboardMeasurements} from 'actions/measurements';
import {clickDashboardMeasurementsDetail} from 'actions/datacollection';
import DashboardMetricsList from './Dashboard.Metrics.List';
import {
  validMetrics,
  GLUCOSE_CATEGORY,
  dashboardMetricsDeviceMap,
} from '../../constants/metrics';
import Button from '../common/Button';
import {DashboardMetricsStyles} from './Dashboard.Styles';

const metricsFilter = (metrics, devices) => {
  const deviceTypes = devices.map(item => item.type);
  return metrics.filter(
    metric =>
      validMetrics[metric.category] &&
      (!dashboardMetricsDeviceMap[metric.category] ||
        deviceTypes.includes(dashboardMetricsDeviceMap[metric.category])),
  );
};

const DashboardMetrics = ({
  patient,
  metrics,
  devices,
  syncMeasurements,
  updateMeasurements,
  onclickDashboardMeasurementsDetail,
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  useEffect(() => {
    updateMeasurements();
  }, [patient]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () =>
      updateMeasurements(),
    );
    return unsubscribe;
  }, []);

  const filteredMetrics = metricsFilter(metrics, devices);

  return (
    <Layout style={{paddingHorizontal: 15}}>
      {filteredMetrics.length > 0 && (
        <>
          <Text category="h1" style={DashboardMetricsStyles.title}>
            {t('Measurements')}
          </Text>
          <DashboardMetricsList
            metrics={filteredMetrics}
            devices={devices}
            syncMeasurements={syncMeasurements}
            updateMeasurements={updateMeasurements}
            onclickDashboardMeasurementsDetail={
              onclickDashboardMeasurementsDetail
            }
          />
          <Button
            onPress={() => {
              onclickDashboardMeasurementsDetail();
              navigation.navigate('DashboardMetricsDetails', {
                category: validMetrics[GLUCOSE_CATEGORY].tabId,
                syncMeasurements: syncMeasurements,
              });
            }}
            style={DashboardMetricsStyles.button}>
            {t('View all measurements')}
          </Button>
        </>
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  metrics: getDashboardMeasurementItems,
  patient: getPatient,
  diseases: getDiseaseItems,
});

const mapDispatchToProps = {
  fetchDashboardMeasurementsfn: fetchDashboardMeasurements,
  onclickDashboardMeasurementsDetail: clickDashboardMeasurementsDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMetrics);

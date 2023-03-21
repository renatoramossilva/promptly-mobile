import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import Modal from '../common/Modal';
import {DashboardMetricFormStyles} from './Dashboard.Styles';
import {Layout, Text, Divider} from '@ui-kitten/components';
import DashboardMetricsForm from './Dashboard.Metrics.Form';
import {
  saveMeasurement,
  storeMeasurements,
  changeMeasurementCode,
} from 'actions/measurements';
import {showToast} from 'actions/toasts';
import {getPatient} from 'selectors/selected_patients';
import {getMeasurementsURL} from 'selectors/selected_api';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import Device from 'models/Device';
import {getDevices} from 'selectors/selected_devices';
import {
  clickCategorizeMeasurement,
  clickAddMeasurement,
  clickCloseMeasurement,
  clickAddReading,
  clickGetMeasurementFromDevice,
} from 'actions/datacollection';

const DashboardMetricsPopUp = ({
  metric,
  open,
  closePopup,
  saveMeasurementFn,
  changeMeasurementCodefn,
  patient,
  measurementsURL,
  hasDevice,
  deviceTypeMap,
  syncMeasurements,
  devicesResult,
  updateMeasurements,
  isUpdate,
  name,
  onClickCategorizeMeasurement,
  onClickAddMeasurement,
  onClickCloseMeasurement,
  onClickAddReading,
  onClickGetMeasurementFromDevice,
}) => {
  const [disabledButton, setDisabledButton] = useState(false);
  const navigation = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    if (open && metric.slug) {
      onClickAddReading({
        measurementType: metric.slug,
      });
    }
  }, [open, metric.slug]);

  const getMeasurementFormSubtitle = (m) => {
    const {category} = m;
    if (category === '15074-8') {
      return t('Choose post meal if you have eaten in the last 2 hours');
    }
    return t('You can manually add some measurements');
  };

  const onMeasurementSent = () => {
    closePopup();
    setDisabledButton(false);
    updateMeasurements();
  };

  const onHideModal = () => {
    onClickCloseMeasurement();
    closePopup();
  };

  return (
    <Modal modalVisible={open} hideModal={onHideModal}>
      <Layout testID="DashboardMetricsPopup">
        <DashboardMetricsForm
          handleClick={(fields, measurementDate, code) => {
            onClickAddMeasurement({
              measurementType: metric.slug,
            });
            setDisabledButton(true);
            return !isUpdate
              ? saveMeasurementFn(measurementsURL, {
                  device: patient.id,
                  category: metric.category,
                  code,
                  id: metric.id,
                  fields,
                  date: measurementDate,
                  name: name,
                }).then(() => onMeasurementSent())
              : changeMeasurementCodefn({
                  url: measurementsURL,
                  category: metric.category,
                  code: code,
                  id: metric.id,
                }).then(() => onMeasurementSent());
          }}
          form={metric.editableForm}
          t={t}
          saveBtnTxt={t('Add measurement')}
          defaultValueTxt={t('Value')}
          title={isUpdate ? t('Add measurement moment') : t('Add measurement')}
          subtitle={getMeasurementFormSubtitle(metric)}
          errorMessageTxt={t('Please fill all values')}
          disabledButton={disabledButton}
          isUpdate={isUpdate}
          icons={(metric.classifier || {}).icons || undefined}
          onClickCategorizeMeasurement={onClickCategorizeMeasurement}
        />
        {!isUpdate && hasDevice && deviceTypeMap[metric.category] && (
          <Layout
            style={{padding: 15}}
            testID="DashboardMetricsPopupDeviceReading">
            <Layout style={DashboardMetricFormStyles.separator}>
              <Divider style={DashboardMetricFormStyles.divider} />
              <Text style={DashboardMetricFormStyles.orSeparator}>
                {t('or')}
              </Text>
              <Divider style={DashboardMetricFormStyles.divider} />
            </Layout>
            <Button
              size="giant"
              status="primary"
              onPress={() => {
                closePopup();
                onClickGetMeasurementFromDevice({
                  deviceType: deviceTypeMap[metric.category].label,
                });
                if (deviceTypeMap[metric.category].type === 'scale') {
                  navigation.navigate('DevicesInstantWeightReading', {
                    item: new Device(devicesResult.scale[0]),
                  });
                } else {
                  syncMeasurements([
                    new Device(
                      devicesResult[deviceTypeMap[metric.category].type][0],
                    ),
                  ]);
                  updateMeasurements();
                }
              }}>
              {t('Get measurement from {{device}}', {
                device: t(deviceTypeMap[metric.category].label),
              })}
            </Button>
          </Layout>
        )}
      </Layout>
    </Modal>
  );
};

DashboardMetricsPopUp.defaultProps = {
  deviceTypeMap: {},
  syncMeasurements: () => {},
  hasDevice: false,
};

const mapStateToProps = (state) => ({
  patient: getPatient(state),
  measurementsURL: getMeasurementsURL(state),
  devicesResult: getDevices(state),
});

const mapDispatchToProps = {
  saveMeasurementFn: saveMeasurement,
  changeMeasurementCodefn: changeMeasurementCode,
  showToastFn: showToast,
  storeMeasurementsFn: storeMeasurements,
  onClickCategorizeMeasurement: clickCategorizeMeasurement,
  onClickAddMeasurement: clickAddMeasurement,
  onClickCloseMeasurement: clickCloseMeasurement,
  onClickAddReading: clickAddReading,
  onClickGetMeasurementFromDevice: clickGetMeasurementFromDevice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardMetricsPopUp);

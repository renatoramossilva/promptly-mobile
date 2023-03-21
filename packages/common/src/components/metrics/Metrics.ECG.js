import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Linking} from 'react-native';
import {createStructuredSelector} from 'reselect';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {getLanguage} from 'selectors/selected_settings';
import {getMeasurementsURL} from 'selectors/selected_api';
import {getECGTimeline} from 'selectors/selected_measurements';
import {MetricsStyles, MetricsECGCardStyles} from './Metrics.Styles';
import MetricsECGPopUp from './Metrics.ECG.PopUp';
import MetricsECGCard from './Metrics.ECG.Card';
import Card from 'components/common/Card';
import EmptyChart from 'components/common/EmptyChart';
import {IDENTIFIER_TYPE_ECGREADER} from '../../constants/devices';
import {getLinkedDeviceType} from 'selectors/selected_devices';

const MetricsECG = ({readings, ecgDevices}) => {
  const {t} = useTranslation();
  const [selectedReading, setSelectedReading] = useState(readings[0]);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDownloadPress = url => Linking.openURL(url);
  const handleDropDownPress = () => setActiveDropdown(!activeDropdown);
  const handleSelectItem = item => {
    setSelectedReading(item);
    handleDropDownPress();
  };

  useEffect(() => {
    setSelectedReading(readings[0]);
  }, [readings]);

  if (!ecgDevices.length > 0) {
    return null;
  }

  return (
    <Layout style={MetricsStyles.chartsContainer} testID="MetricsECG">
      <Text category="h1">{t('ECG')}</Text>
      {readings.length > 0 && selectedReading ? (
        <>
          <MetricsECGCard
            selectedReading={selectedReading}
            handleDropDownPress={handleDropDownPress}
            handleDownloadPress={handleDownloadPress}
          />
          <MetricsECGPopUp
            open={activeDropdown}
            closePopup={handleDropDownPress}
            items={readings}
            onSelectItem={handleSelectItem}
            activeItem={selectedReading}
          />
        </>
      ) : (
        <Card style={MetricsECGCardStyles.header}>
          <EmptyChart />
        </Card>
      )}
    </Layout>
  );
};

MetricsECG.propTypes = {
  readings: PropTypes.array.isRequired,
  ecgDevices: PropTypes.array.isRequired,
};

MetricsECG.defaultProps = {
  readings: [],
};

const mapStateToProps = createStructuredSelector({
  lang: getLanguage,
  measurementsURL: getMeasurementsURL,
  readings: getECGTimeline,
  ecgDevices: getLinkedDeviceType(IDENTIFIER_TYPE_ECGREADER),
});

export default connect(mapStateToProps, null)(MetricsECG);

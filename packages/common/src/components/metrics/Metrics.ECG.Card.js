import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {moment} from 'utils/dates';
import PropTypes from 'prop-types';
import {noop} from 'utils';
import Circle from 'components/common/Circle';
import Button from 'components/common/Button';
import DropDown from 'components/common/DropDown';
import Card from 'components/common/Card';
import {MetricsECGCardStyles} from './Metrics.Styles';

const MetricsECGCard = ({
  selectedReading,
  handleDropDownPress,
  handleDownloadPress,
}) => {
  const {t} = useTranslation();

  return (
    <Card
      header={() => (
        <DropDown
          title={moment(selectedReading.date).local().format('LL - HH:mm')}
          onPress={handleDropDownPress}
        />
      )}
      style={MetricsECGCardStyles.header}>
      <Layout style={MetricsECGCardStyles.container}>
        <Circle
          color={selectedReading?.color}
          size={MetricsECGCardStyles.circleSize}
          border={0}
          shadow={false}
          style={MetricsECGCardStyles.circle}
        />
        {selectedReading?.title ? (
          <Text
            category="h1"
            style={MetricsECGCardStyles.title}
            testID="MetricsECGCardTitle">
            {selectedReading.title}
          </Text>
        ) : null}
      </Layout>
      <Layout>
        {selectedReading?.description ? (
          <Text
            style={MetricsECGCardStyles.description}
            testID="MetricsECGCardDescription">
            {selectedReading.description}
          </Text>
        ) : null}
        {selectedReading?.url ? (
          <Button onPress={() => handleDownloadPress(selectedReading.url)}>
            {t('Share PDF Report')}
          </Button>
        ) : null}
      </Layout>
    </Card>
  );
};

MetricsECGCard.defaultProps = {
  handleDropDownPress: noop,
  handleDownloadPress: noop,
};

MetricsECGCard.propTypes = {
  selectedReading: PropTypes.object,
  handleDropDownPress: PropTypes.func.isRequired,
  handleDownloadPress: PropTypes.func.isRequired,
};

export default MetricsECGCard;

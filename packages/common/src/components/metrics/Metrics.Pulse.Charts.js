import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import PropTypes from 'prop-types';
import {clickChartMarker} from 'actions/datacollection';
import {getLanguage} from 'selectors/selected_settings';
import {getMeasurementsURL} from 'selectors/selected_api';
import MetricsChartsAll from './Metrics.Charts.All';
import {MetricsStyles} from './Metrics.Styles';
import {getPulseAllReadings} from '../../selectors/selected_measurements';

const MetricsPulseCharts = ({readings, onClickChartMarker}) => {
  const {t} = useTranslation();

  return (
    <Layout style={MetricsStyles.chartsContainer}>
      <MetricsChartsAll
        dataArr={[{color: '#24629e', readings: readings}]}
        type="line"
        headerTitle={t('Pulse')}
        onMarkerSelect={onClickChartMarker}
      />
    </Layout>
  );
};

MetricsPulseCharts.propTypes = {
  readings: PropTypes.array.isRequired,
  onClickChartMarker: PropTypes.func.isRequired,
};

MetricsPulseCharts.defaultProps = {
  readings: [],
  onClickChartMarker: () => {},
};

const mapStateToProps = createStructuredSelector({
  lang: getLanguage,
  measurementsURL: getMeasurementsURL,
  readings: getPulseAllReadings,
});

const mapDispatchToProps = {
  onClickChartMarker: clickChartMarker,
};

export default connect(mapStateToProps, mapDispatchToProps)(MetricsPulseCharts);

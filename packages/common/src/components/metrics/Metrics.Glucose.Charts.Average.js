import React, {useState} from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MetricsGlucoseChartsLegendModal from './Metrics.Glucose.Charts.Legend.Modal';
import MetricsGlucoseChartsItem from './Metrics.Glucose.Charts.Item';
import Modal from '../common/Modal';
import {MetricsChartsStyles} from './Metrics.Styles';

const MetricsGlucoseChartsAverage = ({
  readingsRanges,
  numberOfReadings,
  pieCharts,
  onMarkerSelect,
}) => {
  const {t} = useTranslation();
  const [legendModal, setLegendModal] = useState(undefined);
  const windowWidth = useWindowDimensions().width;
  const chartWidth = windowWidth - 80;

  const _renderItem = ({item}) => {
    return (
      <MetricsGlucoseChartsItem
        item={item}
        chartWidth={chartWidth}
        readingsRanges={readingsRanges}
        numberOfReadings={numberOfReadings}
        setLegendModal={setLegendModal}
        onMarkerSelect={onMarkerSelect}
      />
    );
  };

  return (
    <>
      <Text category="h1" style={MetricsChartsStyles.title}>
        {t('Average glucose')}
      </Text>
      <Layout style={MetricsChartsStyles.container}>
        <Carousel
          layout={'default'}
          data={pieCharts}
          renderItem={_renderItem}
          sliderWidth={windowWidth + 15}
          itemWidth={windowWidth - 50}
          inactiveSlideOpacity={1}
          contentContainerCustomStyle={MetricsChartsStyles.carouselContainer}
        />
      </Layout>
      <Modal
        modalVisible={legendModal !== undefined}
        hideModal={() => {
          setLegendModal();
        }}>
        {legendModal && (
          <MetricsGlucoseChartsLegendModal legendModal={legendModal} />
        )}
      </Modal>
    </>
  );
};

export default MetricsGlucoseChartsAverage;

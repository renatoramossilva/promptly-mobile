import React from 'react';
import {formatedData} from 'utils/dates';
import {useWindowDimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import ChartScatter from '../charts/Chart.Scatter';
import ChartLine from '../charts/Chart.Line';

const MetricsChartsSelect = ({type, dataArr, limitLines, onMarkerSelect}) => {
  const {t} = useTranslation();
  const windowWidth = useWindowDimensions().width;
  const chartWidth = windowWidth - 40;

  const xLabels = dataArr[0].readings.map((item) =>
    formatedData(item.date, 'DD/MM'),
  );

  const dataSets = dataArr.map((data) => {
    return {
      ...data,
      readings: data.readings.map((item) => {
        return {
          y: parseInt(item.value, 10),
          marker: `${formatedData(item.date, 'DD/MM')} - ${item.value} ${
            item.unit
          }`,
        };
      }),
    };
  });

  switch (type) {
    case 'line':
      return (
        <ChartLine
          noValues={t('No scores available')}
          height={200}
          width={chartWidth}
          dataSets={dataSets}
          xLabels={xLabels}
          maxVisibleValues={5}
          limitLines={limitLines}
          onMarkerSelect={onMarkerSelect}
        />
      );
    default:
      return (
        <ChartScatter
          noValues={t('No scores available')}
          height={200}
          width={chartWidth}
          dataSets={dataSets}
          xLabels={xLabels}
          maxVisibleValues={5}
          limitLines={limitLines}
          onMarkerSelect={onMarkerSelect}
        />
      );
  }
};

export default MetricsChartsSelect;

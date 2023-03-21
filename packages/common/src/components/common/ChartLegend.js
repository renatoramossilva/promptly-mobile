import React from 'react';
import {Layout} from '@ui-kitten/components';
import ChartLegendItem from './ChartLegendItem';
import {ChartLegendStyles} from './ChartLegend.Styles';
import {getRangeText} from '../../utils';

const ChartLegend = ({
  ranges,
  measurementCategories,
  setLegendModal,
  hoverTitle,
  unit,
}) => (
  <Layout style={ChartLegendStyles.container}>
    {Object.keys(ranges).map((level) => (
      <ChartLegendItem
        key={level}
        text={getRangeText(ranges[level])}
        rangeLevel={ranges[level]}
        setLegendModal={setLegendModal}
        measurementCategories={measurementCategories}
        hoverTitle={hoverTitle}
        unit={unit}
      />
    ))}
  </Layout>
);

export default ChartLegend;

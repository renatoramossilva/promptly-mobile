import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '@ui-kitten/components';
import Circle from './Circle';
import {ChartLegendItemStyles} from './ChartLegend.Styles';
import {getRangeValues, getCategory} from '../../utils';

const ChartLegendItem = ({
  rangeLevel,
  text,
  setLegendModal,
  measurementCategories,
  hoverTitle,
  unit,
}) => {
  const modalContent = rangeLevel
    ? rangeLevel.map((item) => {
        return {
          value: getRangeValues(item, unit),
          label: getCategory(item.code, measurementCategories),
        };
      })
    : [];

  const renderText = text ? (
    <Text testID="ChartLegendItemTitle">{text}</Text>
  ) : null;

  return rangeLevel ? (
    <TouchableOpacity
      testID="ChartLegendItem"
      onPress={() => {
        setLegendModal({title: hoverTitle, content: modalContent});
      }}
      style={ChartLegendItemStyles.container}>
      <Circle
        color={rangeLevel && rangeLevel[0] && rangeLevel[0].color}
        border={0}
        size={15}
        style={ChartLegendItemStyles.circle}
      />
      {renderText}
    </TouchableOpacity>
  ) : null;
};

export default ChartLegendItem;

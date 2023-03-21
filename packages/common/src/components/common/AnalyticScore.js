import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {AnalyticScoreStyles} from './AnalyticScore.Styles';
import PromptlyIcon from './PromptlyIcon';

const UP = 'up';
const DOWN = 'down';

const getVariationString = (diff) => `${Math.round(Math.abs(diff))}`;

export const getDiff = (data) => {
  const actual = data ? data.percentage : 0;
  const comparative =
    data && data.comparative ? data.comparative.percentage || 0 : 0;

  return actual - comparative;
};

export const getVariationSignal = (diff) => (diff >= 0 ? UP : DOWN);

const getArrowClassName = (signal) => {
  switch (signal) {
    case UP:
      return 'arrowFullTop';
    case DOWN:
      return 'arrowFullBottom';
    default:
      return 'arrowFullTop';
  }
};

const getVariationColor = (signal) => {
  switch (signal) {
    case UP:
      return 'color-success-500';
    case DOWN:
      return 'color-danger-500';
    default:
      return 'color-success-500';
  }
};

export const getValue = (data) => (data ? Math.round(data.percentage) : 0);

const AnalyticScore = ({data}) => {
  const theme = useTheme();
  const isFirst = data && data.comparative && !data.comparative.percentage;
  const isEmpty = Object.keys(data).length === 0;
  const signal = getVariationSignal(getDiff(data));
  const variation = getVariationString(getDiff(data));
  const arrowClassName = getArrowClassName(signal);
  const color = theme[getVariationColor(signal)];
  const hasVariation = !isFirst && getDiff(data) !== 0;

  return (
    <Layout style={AnalyticScoreStyles.container}>
      {hasVariation && (
        <Layout style={AnalyticScoreStyles.variationContainer}>
          <PromptlyIcon name={arrowClassName} style={{color: color}} />
          <Text
            category="h1"
            style={[AnalyticScoreStyles.variationText, {color: color}]}>
            {variation}%
          </Text>
        </Layout>
      )}
      {!isEmpty && (
        <Text category="h1" style={AnalyticScoreStyles.percentage}>
          {getValue(data)}%
        </Text>
      )}
    </Layout>
  );
};
export default AnalyticScore;

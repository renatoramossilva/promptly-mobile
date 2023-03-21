import {processColor} from 'react-native';

export const buildLineDataSets = (dataSets) => dataSets.map((data) => {
    return {
      values: data.readings,
      label: data.label || '',
      config: {
        mode: 'HORIZONTAL_BEZIER',
        lineWidth: 3,
        color: processColor(data.color),
        valueTextSize: 12,
        valueTextColor: processColor(data.color),
        drawValues: false,
        circleRadius: 6,
        drawCircleHole: false,
        circleColor: processColor(data.color),
        drawHighlightIndicators: false,
      },
    };
  });

export const buildScatterDataSets = (dataSets) => dataSets.map((data) => {
    return {
      values: data.readings,
      label: data.label || '',
      config: {
        scatterShape: 'CIRCLE',
        scatterShapeHoleRadius: 7,
        scatterShapeHoleColor: processColor(data.color),
        valueTextSize: 20,
        drawValues: false,
        drawHighlightIndicators: false,
      },
    };
  });

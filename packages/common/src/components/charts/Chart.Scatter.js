import React from 'react';
import {processColor} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import {ScatterChart} from 'react-native-charts-wrapper';
import {ChartStyles} from './Chart.Styles';
import {buildScatterDataSets} from '../../utils/graphs';

const ChartScatter = ({
  title,
  noValues,
  xLabels = [],
  dataSets = [],
  width = 200,
  height = 200,
  maxVisibleValues = 0,
  limitLines = [],
  onMarkerSelect = () => {},
}) => {
  const chartDataSets = buildScatterDataSets(
    dataSets.filter((dataSet) => dataSet.readings.length > 0),
  );

  return (
    <Layout>
      {title && (
        <Text category="h1" testID="chartTitle" style={ChartStyles.title}>
          {title}
        </Text>
      )}
      {chartDataSets.length > 0 ? (
        <ScatterChart
          testID="scatterChart"
          style={{
            width: width,
            height: height,
            backgroundColor: '#fff',
          }}
          data={{
            dataSets: chartDataSets,
          }}
          zoom={{
            scaleX: 1,
            scaleY: 1,
            xValue:
              chartDataSets[0]?.values.length >= maxVisibleValues
                ? chartDataSets[0]?.values.length
                : 0,
            yValue: 0,
            axisDependency: 'LEFT',
          }}
          yAxis={{
            right: {
              enabled: false,
            },
            left: {
              limitLines: limitLines,
            },
          }}
          xAxis={{
            valueFormatter: xLabels,
            granularityEnabled: true,
            position: 'BOTTOM',
            drawGridLines: false,
          }}
          legend={{
            xEntrySpace: 10,
            yEntrySpace: 10,
            enabled: chartDataSets[0]?.label ? true : false,
            textSize: 14,
            form: 'CIRCLE',
            formSize: 15,
            wordWrapEnabled: true,
          }}
          visibleRange={{
            x: {
              min:
                chartDataSets[0]?.values.length >= maxVisibleValues
                  ? maxVisibleValues
                  : chartDataSets[0]?.values.length,
              max:
                chartDataSets[0]?.values.length >= maxVisibleValues
                  ? maxVisibleValues
                  : chartDataSets[0]?.values.length,
            },
          }}
          chartDescription={{text: ''}}
          marker={{
            enabled: true,
            markerColor: processColor('#24629e'),
            textColor: processColor('white'),
          }}
          onSelect={onMarkerSelect}
        />
      ) : (
        <Text testID="noValues">{noValues}</Text>
      )}
    </Layout>
  );
};
export default ChartScatter;

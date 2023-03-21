import React from 'react';
import {processColor} from 'react-native';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {PieChart} from 'react-native-charts-wrapper';
import {ChartStyles} from './Chart.Styles';

const ChartPie = ({
  title,
  noValues,
  values = [],
  width = 200,
  height = 200,
  colors,
  onMarkerSelect = () => {},
}) => {
  const theme = useTheme();
  return (
    <Layout testID="ChartPie">
      {title && (
        <Text category="h1" testID="ChartPieTitle" style={ChartStyles.title}>
          {title}
        </Text>
      )}
      {values.length > 0 ? (
        <PieChart
          testID="pieChart"
          style={{width: width, height: height, backgroundColor: '#fff'}}
          data={{
            dataSets: [
              {
                values: values,
                label: '',
                config: {
                  colors: colors,
                  valueTextSize: 14,
                  valueTextColor: processColor('white'),
                  sliceSpace: 5,
                  selectionShift: 0,
                  valueFormatter: "#.#'%'",
                },
              },
            ],
          }}
          holeRadius={65}
          usePercentValues={true}
          rotationEnabled={false}
          legend={{
            xEntrySpace: 10,
            yEntrySpace: 10,
            enabled: false,
            textSize: 14,
            form: 'CIRCLE',
            formSize: 15,
            wordWrapEnabled: true,
          }}
          chartDescription={{text: ''}}
          marker={{
            enabled: true,
            markerColor: processColor(theme['color-primary-700']),
            textColor: processColor('white'),
          }}
          onSelect={onMarkerSelect}
        />
      ) : (
        <Text testID="ChartPieNoValues">{noValues}</Text>
      )}
    </Layout>
  );
};
export default ChartPie;

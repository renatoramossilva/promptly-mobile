import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsGlucoseChartsItem from '../Metrics.Glucose.Charts.Item';
import {readingsRanges} from '../../../__mocks__/ranges';

const item = {
  id: '0.6909230253159444',
  category: 'LP14635-4',
  slug: 'glucose',
  title: 'Last 30 days',
  display: '{0}',
  reading: '132.50',
  unit: 'mg/dL',
  values: ['132.50'],
  readOnly: true,
  editableForm: {
    code: 'LP14635-4',
    fields: [
      {
        code: 'LP14635-4',
        widget: 'text',
        unit: 'mg/dL',
      },
    ],
  },
  code: 'LP14635-4',
  chart: {
    series: [
      {
        value: 1,
        marker: 'Significant: 1',
      },
      {
        value: 2,
        marker: 'No problems: 2',
      },
      {
        value: 1,
        marker: 'Uncategorized: 1',
      },
    ],
    colors: [-1797087, -10963183, -7826275],
    scale: [
      {
        text: 'Significant',
        color: '#E49421',
        id: 'significant',
      },
      {
        text: 'No problems',
        color: '#58B711',
        id: 'no-problems',
      },
      {
        text: 'Uncategorized',
        color: '#88949D',
        id: 'uncategorized',
      },
    ],
    type: 'donut',
  },
  count: 4,
  avg: '132.50',
};

const chartWidth = 200;

const numberOfReadings = 20;

const mockedOnPressAddFn = jest.fn();

jest.useFakeTimers();

describe('Test MetricsGlucoseChartsItem component', () => {
  it('Should render correct title and graph', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsItem
          item={item}
          chartWidth={chartWidth}
          readingsRanges={readingsRanges}
          numberOfReadings={numberOfReadings}
          setLegendModal={mockedOnPressAddFn}
        />
      </ApplicationProvider>,
    );
    const title = queryByTestId('MetricsGlucoseChartsItemTitle');
    expect(title.props.children).toBe(item.title);
    const graph = queryByTestId('ChartPie');
    expect(graph).toBeTruthy();
    const resume = queryByTestId('MetricsGlucoseChartsItemResume');
    expect(resume).toBeTruthy();
  });

  it('Should NOT render graph', () => {
    item.chart = undefined;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsItem
          item={item}
          chartWidth={chartWidth}
          readingsRanges={readingsRanges}
          numberOfReadings={numberOfReadings}
          setLegendModal={mockedOnPressAddFn}
        />
      </ApplicationProvider>,
    );
    const graph = queryByTestId('ChartPie');
    expect(graph).toBeNull();
  });

  it('Should NOT render resume', () => {
    item.reading = undefined;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsItem
          item={item}
          chartWidth={chartWidth}
          readingsRanges={readingsRanges}
          numberOfReadings={numberOfReadings}
          setLegendModal={mockedOnPressAddFn}
        />
      </ApplicationProvider>,
    );
    const resume = queryByTestId('MetricsGlucoseChartsItemResume');
    expect(resume).toBeNull();
  });
});

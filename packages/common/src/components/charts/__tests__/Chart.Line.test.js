import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ChartLine from '../Chart.Line';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const chartValues = [
  {
    color: 'red',
    readings: [
      {
        y: 14,
        marker: '12/05 - Score: 14%',
      },
      {
        y: 15,
        marker: '18/05 - Score: 15%',
      },
      {
        y: 35,
        marker: '22/05 - Score: 35%',
      },
      {
        y: 79,
        marker: '25/05 - Score: 79%',
      },
      {
        y: 60,
        marker: '01/06 - Score: 60%',
      },
    ],
  },
];
const xLabels = ['12/05', '18/05', '22/05', '25/05', '01/06'];

describe('Test ChartLine component', () => {
  it('Should render title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          height={200}
          width={400}
          dataSets={chartValues}
          xLabels={xLabels}
          maxVisibleValues={5}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('chartTitle');

    expect(element.props.children).toBe('Score overview');
  });

  it('Should render no values text', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          height={200}
          width={400}
          maxVisibleValues={5}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('noValues');

    expect(element.props.children).toBe('No scores available');
  });

  it('Should render chart', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          height={200}
          width={400}
          dataSets={chartValues}
          xLabels={xLabels}
          maxVisibleValues={5}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element).toBeTruthy();
  });

  it('Should render correct input size', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          height={400}
          width={400}
          dataSets={chartValues}
          xLabels={xLabels}
          maxVisibleValues={5}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element.props.style.width).toBe(400);
    expect(element.props.style.height).toBe(400);
  });

  it('Should render correct default values', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element.props.style.width).toBe(200);
    expect(element.props.style.height).toBe(200);
  });

  it('Should render correct input visible range and zoom values (max < values)', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          maxVisibleValues={3}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element.props.zoom.xValue).toBe(5);
    expect(element.props.visibleRange.x.min).toBe(3);
    expect(element.props.visibleRange.x.max).toBe(3);
  });

  it('Should render correct input visible range and zoom values (max > values)', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          maxVisibleValues={6}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element.props.zoom.xValue).toBe(0);
    expect(element.props.visibleRange.x.min).toBe(5);
    expect(element.props.visibleRange.x.max).toBe(5);
  });

  it('Should render correct default visible range and zoom values', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLine
          title={'Score overview'}
          noValues={'No scores available'}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('lineChart');

    expect(element.props.zoom.xValue).toBe(5);
    expect(element.props.visibleRange.x.min).toBe(0);
    expect(element.props.visibleRange.x.max).toBe(0);
  });
});

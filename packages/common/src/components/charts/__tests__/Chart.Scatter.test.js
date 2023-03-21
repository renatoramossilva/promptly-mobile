import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ChartScatter from '../Chart.Scatter';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const chartValues = [
  {
    color: 'red',
    readings: [
      {
        y: 69,
        marker: '12/05 - Score: 69%',
      },
      {
        y: 44,
        marker: '18/05 - Score: 44%',
      },
      {
        y: 35,
        marker: '22/05 - Score: 35%',
      },
      {
        y: 12,
        marker: '25/05 - Score: 12%',
      },
      {
        y: 56,
        marker: '01/06 - Score: 56%',
      },
    ],
  },
];
const xLabels = ['12/05', '18/05', '22/05', '25/05', '01/06'];

describe('Test ChartScatter component', () => {
  it('Should render title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
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

  it('Should render chart', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
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
    const element = getByTestId('scatterChart');

    expect(element).toBeTruthy();
  });

  it('Should render correct input size', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
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
    const element = getByTestId('scatterChart');

    expect(element.props.style.width).toBe(400);
    expect(element.props.style.height).toBe(400);
  });

  it('Should render correct default values', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
          title={'Score overview'}
          noValues={'No scores available'}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('scatterChart');

    expect(element.props.style.width).toBe(200);
    expect(element.props.style.height).toBe(200);
  });

  it('Should render correct input visible range and zoom values (max < values)', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
          title={'Score overview'}
          noValues={'No scores available'}
          maxVisibleValues={3}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('scatterChart');

    expect(element.props.zoom.xValue).toBe(5);
    expect(element.props.visibleRange.x.min).toBe(3);
    expect(element.props.visibleRange.x.max).toBe(3);
  });

  it('Should render correct input visible range and zoom values (max > values)', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
          title={'Score overview'}
          noValues={'No scores available'}
          maxVisibleValues={6}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('scatterChart');

    expect(element.props.zoom.xValue).toBe(0);
    expect(element.props.visibleRange.x.min).toBe(5);
    expect(element.props.visibleRange.x.max).toBe(5);
  });

  it('Should render correct default visible range and zoom values', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
          title={'Score overview'}
          noValues={'No scores available'}
          dataSets={chartValues}
          xLabels={xLabels}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('scatterChart');

    expect(element.props.zoom.xValue).toBe(5);
    expect(element.props.visibleRange.x.min).toBe(0);
    expect(element.props.visibleRange.x.max).toBe(0);
  });

  it('Should render no scores text', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
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

  it('Should render no scores text with chartValues without readings', () => {
    chartValues[0].readings = [];
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartScatter
          title={'Score overview'}
          noValues={'No scores available'}
          height={200}
          width={400}
          maxVisibleValues={5}
          dataSets={chartValues}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('noValues');

    expect(element.props.children).toBe('No scores available');
  });
});

import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ChartPie from '../Chart.Pie';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const values = [
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
];

describe('Test ChartLine component', () => {
  it('Should render title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie
          noValues={'No scores available'}
          height={200}
          width={400}
          title={'Average Scores'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('ChartPieTitle');

    expect(element.props.children).toBe('Average Scores');
  });

  it('Should NOT render title', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie noValues={'No scores available'} height={200} width={400} />
      </ApplicationProvider>,
    );
    const element = queryByTestId('ChartPieTitle');

    expect(element).toBeNull();
  });

  it('Should render no values text', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie noValues={'No scores available'} height={200} width={400} />
      </ApplicationProvider>,
    );
    const element = getByTestId('ChartPieNoValues');

    expect(element.props.children).toBe('No scores available');
  });

  it('Should render chart', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie
          noValues={'No scores available'}
          height={200}
          width={400}
          title={'Average Scores'}
          values={values}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('pieChart');

    expect(element).toBeTruthy();
  });

  it('Should render correct input size', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie
          noValues={'No scores available'}
          height={400}
          width={400}
          title={'Average Scores'}
          values={values}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('pieChart');

    expect(element.props.style.height).toBe(400);
    expect(element.props.style.width).toBe(400);
  });

  it('Should render correct default values', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartPie
          noValues={'No scores available'}
          title={'Average Scores'}
          values={values}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('pieChart');

    expect(element.props.style.width).toBe(200);
    expect(element.props.style.height).toBe(200);
  });
});

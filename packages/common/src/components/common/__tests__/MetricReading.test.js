import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricReading from '../MetricReading';
import {metrics} from '../../../__mocks__/metrics';

jest.useFakeTimers();

describe('Test MetricReading component', () => {
  it('Should render correct value, unit and white color', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricReading metric={metrics[1]} color={'red'} />
      </ApplicationProvider>,
    );
    const reading = getByTestId('MetricReading');
    expect(reading.props.children).toBe('170/130');
    expect(reading.props.style[1][1].color).toBe('red');
    const unit = getByTestId('MetricReadingUnit');
    expect(unit.props.children).toBe('mmHg');
  });

  it('Should render empty value', () => {
    metrics[1].reading = undefined;
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricReading metric={metrics[1]} />
      </ApplicationProvider>,
    );
    const reading = getByTestId('MetricReading');
    expect(reading.props.children).toBe('__');
  });

  it('Should render default color', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricReading metric={metrics[1]} />
      </ApplicationProvider>,
    );
    const reading = getByTestId('MetricReading');
    expect(reading.props.style[1][1].color).toBe('black');
  });
});

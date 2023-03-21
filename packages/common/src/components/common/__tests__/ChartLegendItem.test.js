import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ChartLegendItem from '../ChartLegendItem';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {glucoseCategories as measurementCategories} from '../../../constants/metrics';
import {ranges} from '../../../__mocks__/ranges';

jest.useFakeTimers();

const mockedOnPressFn = jest.fn();

const rangeLevel = ranges.urgent;

describe('Test ChartLegendItem component', () => {
  it('Should render correct title and circle, and run press function once', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLegendItem
          key={312}
          text={'Urgent'}
          rangeLevel={rangeLevel}
          setLegendModal={mockedOnPressFn}
          measurementCategories={measurementCategories}
          hoverTitle={'Average glucose'}
        />
      </ApplicationProvider>,
    );
    const title = getByTestId('ChartLegendItemTitle');
    expect(title.props.children).toBe('Urgent');
    const circle = getByTestId('Circle');
    expect(circle.props.style[2].backgroundColor).toBe('#CA1930');
    const element = getByTestId('ChartLegendItem');
    fireEvent.press(element);
    expect(mockedOnPressFn).toHaveBeenCalledTimes(1);
  });

  it('Should render correct no title and no circle', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLegendItem
          key={312}
          setLegendModal={mockedOnPressFn}
          measurementCategories={measurementCategories}
          hoverTitle={'Average glucose'}
        />
      </ApplicationProvider>,
    );
    const title = queryByTestId('ChartLegendItemTitle');
    expect(title).toBeNull();
    const circle = queryByTestId('Circle');
    expect(circle).toBeNull();
  });
});

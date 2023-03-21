import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ChartLegend from '../ChartLegend';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {glucoseCategories} from '../../../constants/metrics';
import {ranges} from '../../../__mocks__/ranges';

jest.useFakeTimers();

const mockedOnPressFn = jest.fn();

describe('Test ChartLegend component', () => {
  it('Should render correct amount of items', async () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ChartLegend
          ranges={ranges}
          measurementCategories={glucoseCategories}
          setLegendModal={mockedOnPressFn}
          hoverTitle={'Normal range values'}
        />
      </ApplicationProvider>,
    );

    const elements = queryAllByTestId('ChartLegendItem');
    expect(elements.length).toBe(5);
  });
});

import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsChartsAll from '../Metrics.Charts.All';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const storeData = {
  devices: {
    result: {},
  },
};

jest.useFakeTimers();
const readings = [
  {
    id: 85,
    category: '3141-9',
    code: '3141-9',
    device: '22748f29-7658-4728-aa22-6e5adac105f2',
    unit: 'kg',
    value: '130',
    date: '2021-08-31T15:25:58.227000Z',
  },
];
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MetricsChartsAll component', () => {
  it('Should render line chart', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsChartsAll
            dataArr={[
              {color: '#24629e', label: 'Systolic', readings: readings},
            ]}
            type="line"
          />
        </Provider>
      </ApplicationProvider>,
    );
    const line = queryAllByTestId('lineChart');
    expect(line.length).toBe(1);
    const scatter = queryAllByTestId('scatterChart');
    expect(scatter.length).toBe(0);
  });

  it('Should render scatter chart', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsChartsAll
            dataArr={[
              {color: '#24629e', label: 'Systolic', readings: readings},
            ]}
          />
        </Provider>
      </ApplicationProvider>,
    );
    const line = queryAllByTestId('lineChart');
    expect(line.length).toBe(0);
    const scatter = queryAllByTestId('scatterChart');
    expect(scatter.length).toBe(1);
  });

  it('Should not render chart', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsChartsAll dataArr={[{color: '#24629e', label: 'Systolic'}]} />
        </Provider>
      </ApplicationProvider>,
    );
    const line = queryAllByTestId('lineChart');
    expect(line.length).toBe(0);
    const scatter = queryAllByTestId('scatterChart');
    expect(scatter.length).toBe(0);
  });
});

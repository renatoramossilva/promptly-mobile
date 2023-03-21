import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsECG from '../Metrics.ECG';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {moment} from 'utils/dates';
import {storedMeasurements} from '../../../__mocks__/measurements';
import {mockedDevices} from '../../../__mocks__/devices';
import {user} from '../../../__mocks__/user';
const storeData = {
  measurements: storedMeasurements,
  devices: mockedDevices,
  settings: user.preferences,
};

jest.useFakeTimers();

moment.locale('pt');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MetricsECG component', () => {
  it('Should not render card', () => {
    const store2 = mockStore({...storeData, devices: {result: {linked: []}}});
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store2}>
          <MetricsECG />
        </Provider>
      </ApplicationProvider>,
    );
    const container = queryAllByTestId('MetricsECG');
    expect(container.length).toBe(0);
  });

  it('Should render card without data', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECG />
        </Provider>
      </ApplicationProvider>,
    );
    const container = queryAllByTestId('MetricsECG');
    expect(container.length).toBe(1);
    const emptychart = queryAllByTestId('EmptyChart');
    expect(emptychart.length).toBe(0);
  });

  it('Should render card with data', () => {
    const store3 = mockStore({
      ...storeData,
      measurements: {...storeData.measurements, timelines: {}},
    });
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store3}>
          <MetricsECG />
        </Provider>
      </ApplicationProvider>,
    );
    const container = queryAllByTestId('MetricsECG');
    expect(container.length).toBe(1);
    const emptychart = queryAllByTestId('EmptyChart');
    expect(emptychart.length).toBe(1);
  });
});

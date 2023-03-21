import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {metrics} from '../../../__mocks__/metrics';
import DashboardMetricsList from '../Dashboard.Metrics.List';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const storeData = {
  patient: {
    id: 1,
  },
  diseases: {
    id: 1,
  },
  devices: {
    result: {},
  },
  measurements: {
    auth: {
      URL: '',
    },
  },
};

jest.useFakeTimers();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test DashboardMetricsList component', () => {
  it('Should render 5 DashboardMetricsItem s', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsList metrics={metrics} />
        </Provider>
      </ApplicationProvider>,
    );
    const evaluationCards = queryByTestId('DashboardMetricsListContainer');
    expect(evaluationCards.props.children.length).toBe(6);
  });
  it('Should render 4 DashboardMetricsItem', () => {
    metrics.splice(-1, 1);
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsList metrics={metrics} />
        </Provider>
      </ApplicationProvider>,
    );
    const evaluationCards = queryByTestId('DashboardMetricsListContainer');
    expect(evaluationCards.props.children.length).toBe(5);
  });
});

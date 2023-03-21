import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import DashboardMetricsItem from '../Dashboard.Metrics.Item';
import {metrics} from '../../../__mocks__/metrics';
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

const weightMetric = metrics[4];
const ecgMetric = metrics[5];

describe('Test DashboardMetricsItem component', () => {
  it('Should DashboardMetricsItem with subtitle, without label, with reading button and without download button', () => {
    const {getByTestId, queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={weightMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const title = getByTestId('DashboardMetricsItemTitle');
    expect(title.props.children).toStrictEqual(weightMetric.title);
    const subtitle = getByTestId('DashboardMetricsItemSubtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle.props.children).toStrictEqual('16/07/2021 | 10:45');
    const reading = getByTestId('MetricReading');
    expect(reading.props.children).toStrictEqual(weightMetric.reading);
    const label = queryByTestId('DashboardMetricsItemLabel');
    expect(label).toBeFalsy();
    const addReadingButton = queryByTestId('DashboardMetricsItemAddReading');
    expect(addReadingButton).toBeTruthy();
    const downloadButton = queryByTestId('DashboardMetricsItemDownload');
    expect(downloadButton).toBeFalsy();
  });

  it('Should DashboardMetricsItem without subtitle', () => {
    weightMetric.date = undefined;
    weightMetric.description = undefined;
    const {getByTestId, queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={weightMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const title = getByTestId('DashboardMetricsItemTitle');
    expect(title.props.children).toStrictEqual(weightMetric.title);
    const subtitle = queryByTestId('DashboardMetricsItemSubtitle');
    expect(subtitle).toBeNull();
  });

  it('Should DashboardMetricsItem without reading', () => {
    weightMetric.reading = undefined;
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={weightMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const reading = getByTestId('MetricReading');
    expect(reading.props.children).toStrictEqual('__');
  });

  it('Should render DashboardMetricsItem with label', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={ecgMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const reading = getByTestId('DashboardMetricsItemLabel');
    expect(reading.props.children).toStrictEqual('Normal synus rhythm');
  });

  it('Should render DashboardMetricsItem without Add Reading button and with Download button', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={ecgMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const addReadingButton = queryByTestId('DashboardMetricsItemAddReading');
    expect(addReadingButton).toBeFalsy();

    const downloadButton = queryByTestId('DashboardMetricsItemDownload');
    expect(downloadButton).toBeTruthy();
  });

  it('Should render DashboardMetricsItem with specific color', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsItem metric={ecgMetric} />
        </Provider>
      </ApplicationProvider>,
    );
    const item = getByTestId('DashboardMetricsItem');
    expect(item.props.style.backgroundColor).toBe('#ff4400');
  });
});

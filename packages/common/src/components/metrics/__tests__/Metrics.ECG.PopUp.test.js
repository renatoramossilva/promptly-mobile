import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsECGPopUp from '../Metrics.ECG.PopUp';
import {ecgMetrics} from '../../../__mocks__/metrics';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {moment} from 'utils/dates';

const storeData = {
  devices: {
    result: {},
  },
};

jest.useFakeTimers();

moment.locale('pt');
const mockedOnSelectItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MetricsECGPopUp component', () => {
  it('Should render correct amount of items', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGPopUp items={ecgMetrics} />
        </Provider>
      </ApplicationProvider>,
    );
    const items = queryAllByTestId('MetricsECGPopUpItem');
    expect(items.length).toBe(3);
  });

  it('Should render 1 item with correct title, description and check mark', () => {
    const {queryAllByTestId, getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGPopUp items={[ecgMetrics[0]]} activeItem={ecgMetrics[0]} />
        </Provider>
      </ApplicationProvider>,
    );
    const items = queryAllByTestId('MetricsECGPopUpItem');
    expect(items.length).toBe(1);
    const title = getByTestId('MetricsECGPopUpItemTitle');
    expect(title.props.children).toBe('Não categorizado');
    const date = getByTestId('MetricsECGPopUpItemDate');
    expect(date.props.children).toBe('3 de janeiro de 2022 - 00:00');
    const check = queryAllByTestId('MetricsECGPopUpItemCheck');
    expect(check.length).toBe(1);
  });

  it('Should render 1 item without check mark and trigger click', () => {
    const {queryAllByTestId, getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGPopUp
            items={[ecgMetrics[0]]}
            onSelectItem={mockedOnSelectItem}
          />
        </Provider>
      </ApplicationProvider>,
    );
    const items = queryAllByTestId('MetricsECGPopUpItem');
    expect(items.length).toBe(1);
    const check = queryAllByTestId('MetricsECGPopUpItemCheck');
    expect(check.length).toBe(0);
    expect(mockedOnSelectItem).toHaveBeenCalledTimes(0);
    const button = getByTestId('MetricsECGPopUpItem');
    fireEvent.press(button);
    expect(mockedOnSelectItem).toHaveBeenCalledTimes(1);
  });
});

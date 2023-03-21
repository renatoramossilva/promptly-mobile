import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsECGCard from '../Metrics.ECG.Card';
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
const mockedHandleDropDownPress = jest.fn();
const mockedHandleDownloadPress = jest.fn();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MetricsECGCard component', () => {
  it('Should render correct title with no description', () => {
    const {getByTestId, queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGCard selectedReading={ecgMetrics[0]} />
        </Provider>
      </ApplicationProvider>,
    );
    const title = getByTestId('MetricsECGCardTitle');
    expect(title.props.children).toBe('Não categorizado');
    const description = queryAllByTestId('MetricsECGCardDescription');
    expect(description.length).toBe(0);
  });

  it('Should render correct description and without download button', () => {
    ecgMetrics[0].description = 'Normal sinus rhythm';

    const {getByTestId, queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGCard selectedReading={ecgMetrics[0]} />
        </Provider>
      </ApplicationProvider>,
    );
    const title = getByTestId('MetricsECGCardTitle');
    expect(title.props.children).toBe('Não categorizado');
    const description = queryAllByTestId('MetricsECGCardDescription');
    expect(description.length).toBe(1);
    const download = queryAllByTestId('Button');
    expect(download.length).toBe(1);
  });

  it('Should render and trigger download and dropdown click', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGCard
            selectedReading={ecgMetrics[0]}
            handleDropDownPress={mockedHandleDropDownPress}
            handleDownloadPress={mockedHandleDownloadPress}
          />
        </Provider>
      </ApplicationProvider>,
    );

    expect(mockedHandleDropDownPress).toHaveBeenCalledTimes(0);
    const toggle = getByTestId('DropDown');
    fireEvent.press(toggle);
    expect(mockedHandleDropDownPress).toHaveBeenCalledTimes(1);

    expect(mockedHandleDownloadPress).toHaveBeenCalledTimes(0);
    const button = getByTestId('Button');
    fireEvent.press(button);
    expect(mockedHandleDownloadPress).toHaveBeenCalledTimes(1);
  });

  it('Should render without download button', () => {
    ecgMetrics[0].url = '';

    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsECGCard selectedReading={ecgMetrics[0]} />
        </Provider>
      </ApplicationProvider>,
    );
    const download = queryAllByTestId('Button');
    expect(download.length).toBe(0);
  });
});

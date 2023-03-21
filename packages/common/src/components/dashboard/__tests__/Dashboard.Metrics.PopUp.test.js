import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {metrics} from '../../../__mocks__/metrics';
import DashboardMetricsPopUp from '../Dashboard.Metrics.PopUp';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {deviceTypeMap} from '../../../constants/metrics';

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

describe('Test DashboardMetricsPopUp component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsPopUp
            metric={metrics[0]}
            open
            closePopup={() => {}}
            hasDevice={false}
            deviceTypeMap={{}}
            syncMeasurements={() => {}}
          />
        </Provider>
      </ApplicationProvider>,
    );
  });

  it('Should render a DashboardMetricsPopUp', () => {
    expect(component.queryByTestId('DashboardMetricsPopup')).toBeTruthy();
    expect(component.queryByTestId('DashboardMetrisForm')).toBeTruthy();
    expect(component.getByTestId('FormTitle').props.children).toBe(
      'Add measurement',
    );
  });

  it('Should render a DashboardMetricsPopUp for glucose metric', () => {
    expect(component.queryByTestId('GlucoseForm')).toBeTruthy();
    expect(component.queryAllByTestId('GlucoseIcons')).toHaveLength(3);
  });

  it('Should render text input', () => {
    expect(component.queryByTestId('DashboardMetricsFormInput')).toBeTruthy();
  });

  it('Should not render button to get reading from device', () => {
    expect(
      component.queryByTestId('DashboardMetricsPopupDeviceReading'),
    ).toBeNull();
  });

  it('Should render button to get reading from device', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsPopUp
            metric={metrics[0]}
            open
            closePopup={() => {}}
            hasDevice={true}
            deviceTypeMap={deviceTypeMap}
            syncMeasurements={() => {}}
          />
        </Provider>
      </ApplicationProvider>,
    );
    const deviceReadingEl = queryByTestId('DashboardMetricsPopupDeviceReading');

    expect(deviceReadingEl).toBeTruthy();
  });

  it('Should only render elements to update readings', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <DashboardMetricsPopUp
            metric={metrics[0]}
            open
            closePopup={() => {}}
            hasDevice={true}
            deviceTypeMap={deviceTypeMap}
            syncMeasurements={() => {}}
            isUpdate
          />
        </Provider>
      </ApplicationProvider>,
    );
    const deviceReadingEl = queryByTestId('DashboardMetricsPopupDeviceReading');
    expect(deviceReadingEl).toBeNull();
    const formInputEl = queryByTestId('DashboardMetricsFormInput');
    expect(formInputEl).toBeNull();
  });
});

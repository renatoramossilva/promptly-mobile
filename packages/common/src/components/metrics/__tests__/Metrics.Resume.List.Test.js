import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsResumeList from '../Metrics.Resume.List';
import {glucoseMetrics} from '../../../__mocks__/metrics';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const storeData = {
  devices: {
    result: {},
  },
};

jest.useFakeTimers();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MetricsResumeList component', () => {
  it('Should render correct amount of items', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MetricsResumeList items={glucoseMetrics} />
        </Provider>
      </ApplicationProvider>,
    );
    const items = queryAllByTestId('MetricsResumeItem');
    expect(items.length).toBe(3);
  });
});

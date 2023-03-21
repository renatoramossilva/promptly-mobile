import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MyAccountPrivacyList from '../privacy/MyAccount.Privacy.List';
import {clinicalTrials} from '../../../__mocks__/settings';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

jest.useFakeTimers();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Test MyAccountPrivacyList component', () => {
  let component;
  const handleSubmitFn = jest.fn();
  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MyAccountPrivacyList
            clinicalTrials={clinicalTrials}
            t={(key) => key}
            handleClick={null}
            activeDropdown={null}
            handleSubmit={handleSubmitFn}
          />
        </Provider>
      </ApplicationProvider>,
    );
  });

  it('Should render a list with one clinical trial', () => {
    expect(component.getAllByTestId('groupDisease').length).toBe(1);
    expect(component.getByTestId('itemTitle').props.children).toBe('Cataract');
    expect(component.getAllByTestId('itemCard').length).toBe(2);
  });

  it('Should render a clinical trial card', () => {
    expect(component.queryAllByTestId('statusLabel')[0].props.children).toBe(
      'Active',
    );
    expect(
      component.queryAllByTestId('clinicalTrialDisplay')[0].props.children,
    ).toBe('CUF Value Based Healthcare - Cataract');
    expect(component.getAllByTestId('configButton').length).toBe(2);
  });
});

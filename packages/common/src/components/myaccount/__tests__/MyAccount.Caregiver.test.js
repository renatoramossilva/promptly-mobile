import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MyAccountCaregiver from '../caregiver/MyAccount.Caregiver';

const storeData = {
  user: {
    uuid: 1,
    privateData: {
      caregiver: {},
    },
  },
  settings: {
    regional: {
      language: 'pt',
    },
  },
};

jest.useFakeTimers();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(storeData);

describe('Test MyAccountCaregiver component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <MyAccountCaregiver updateUserDataFn={() => {}} />
        </Provider>
      </ApplicationProvider>,
    );
  });

  it('Should render a form with three fields and a button', () => {
    expect(component.getByTestId('textInputContainer')).toBeTruthy();
    expect(component.getByTestId('selectContainer')).toBeTruthy();
    expect(component.getByTestId('phoneFieldContainer')).toBeTruthy();
    expect(component.getByTestId('formButton')).toBeTruthy();
  });
});

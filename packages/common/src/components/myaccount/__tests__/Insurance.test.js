import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import InsuranceSection from '../complementaryInfo/insurance';

jest.useFakeTimers();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Insurance component with items', () => {
  let component;
  const onChangeMocked = jest.fn();
  const textInput = '111';
  const store = mockStore({
    entities: {
      insurances: {
        items: [
          {
            name: 'Multicare',
            id: 1,
          },
        ],
      },
    },
  });

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <InsuranceSection
            getValue={() => textInput}
            getErrors={() => {}}
            onChange={onChangeMocked}
            clearErrors={() => {}}
            t={(key) => key}
          />
        </Provider>
      </ApplicationProvider>,
    );
  });

  it('Should render a header', () => {
    expect(component.getByTestId('headerContainer')).toBeTruthy();
  });

  it('Should render a form for insurance data', () => {
    expect(component.getByTestId('insuranceFormContainer')).toBeTruthy();
  });

  it('Should trigger onChange', () => {
    fireEvent.changeText(component.getByTestId('textInputField'), textInput);
    expect(component.getByTestId('textInputField').props.value).toBe(textInput);
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });
});

describe('Test Insurance component without items', () => {
  let component;
  const onChangeMocked = jest.fn()
  const store = mockStore({
    entities: {
      insurances: {
        items: [],
      },
    },
  });
  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Provider store={store}>
          <InsuranceSection
            getValue={(field) => field}
            getErrors={() => {}}
            onChange={onChangeMocked}
            clearErrors={() => {}}
            t={(key) => key}
          />
        </Provider>
      </ApplicationProvider>,
    );
  });

  it('Should render null', () => {
    expect(component.getByTestId('noInsurances')).toBeTruthy();
  });
});

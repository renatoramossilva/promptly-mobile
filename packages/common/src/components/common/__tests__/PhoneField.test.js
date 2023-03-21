import '../../../__mocks__/global';
import React from 'react';
import {act, render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import PhoneField from '../PhoneField';

jest.useFakeTimers();

describe('Test PhoneField component', () => {
  let component;
  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <PhoneField
          countryValue="PT"
          phoneNumber="911222333"
          label="Cell phone number"
          errorText="Please enter a valid phone number!"
          onCountryChange={() => {}}
          onPhoneNumberChange={() => {}}
          clearErrors={() => {}}
        />
      </ApplicationProvider>,
    );
  });

  it('Should render an input field with data and error text', async () => {
    await act(async () => {
      expect(component.getByTestId('phoneFieldLabel').props.children).toBe(
        'Cell phone number',
      );
      expect(component.getByTestId('errorText').props.children).toBe(
        'Please enter a valid phone number!',
      );
    });
  });
});

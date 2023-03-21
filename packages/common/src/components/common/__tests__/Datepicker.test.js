import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import Datepicker from '../Datepicker';
jest.useFakeTimers();

describe('Test Datepicker component', () => {
  let component;
  const onChangeMocked = jest.fn();

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Datepicker
          label="Birthdate"
          fieldKey="birthdate"
          value="25/08/1994"
          noFutureDate
          onChange={onChangeMocked}
        />
      </ApplicationProvider>,
    );
  });

  it('Should render a date input picker', () => {
    expect(component.getByTestId('datePickerContainer')).toBeTruthy();
    expect(component.getByTestId('datePickerLabel').props.children).toBe(
      'Birthdate',
    );
  });
});

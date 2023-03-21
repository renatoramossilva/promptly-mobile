import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import Select from '../Select';

jest.useFakeTimers();

describe('Test TextInput component', () => {
  let component;
  const onChangeMocked = jest.fn();
  const input = 'test';
  const options = [
    {
      value: 1,
      label: 'test',
    },
  ];

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <Select
          label="Marital status"
          fieldKey="marital_status"
          value={input}
          options={options}
          onChange={onChangeMocked}
        />
      </ApplicationProvider>,
    );
  });

  it('Should render a select input field with options', () => {
    expect(component.getByTestId('selectContainer')).toBeTruthy();
    expect(component.getByTestId('selectLabel').props.children).toBe(
      'Marital status',
    );
  });
});

import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import TextInput from '../TextInput';

jest.useFakeTimers();

describe('Test TextInput component', () => {
  let component;
  const onChangeMocked = jest.fn();
  const input = 'Test';

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TextInput
          label="Name you like to be called"
          fieldKey="name"
          value={input}
          onChange={onChangeMocked}
        />
      </ApplicationProvider>,
    );
  });

  it('Should render a text input field', () => {
    expect(component.getByTestId('textInputLabel').props.children).toBe(
      'Name you like to be called',
    );
    expect(component.getByTestId('textInputField').props.value).toBe('Test');
  });

  it('Should trigger onChange method', () => {
    fireEvent.changeText(component.getByTestId('textInputField'), input);
    expect(component.getByTestId('textInputField').props.value).toBe(input);
    expect(onChangeMocked).toHaveBeenCalledTimes(1);
  });
});

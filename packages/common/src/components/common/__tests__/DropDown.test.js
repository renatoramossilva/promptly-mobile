import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import DropDown from '../DropDown';

describe('Test DropDown component', () => {
  let component;
  const mockedOnPress = jest.fn();

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DropDown title="test" onPress={mockedOnPress} />
      </ApplicationProvider>,
    );
  });

  it('Should render a date input picker', () => {
    expect(component.getByTestId('DropDown')).toBeTruthy();
    expect(component.getByTestId('DropDownTitle').props.children).toBe('test');
    expect(mockedOnPress).toHaveBeenCalledTimes(0);
    fireEvent.press(component.getByTestId('DropDown'));
    expect(mockedOnPress).toHaveBeenCalledTimes(1);
  });
});

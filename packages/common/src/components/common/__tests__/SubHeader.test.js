import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import SubHeader from '../SubHeader';

jest.useFakeTimers();

describe('Test TextInput component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <SubHeader
          title="Health insurance"
          description="Important for health institution administrative services"
        />
      </ApplicationProvider>,
    );
  });

  it('Should render a select input field with options', () => {
    expect(component.getByTestId('headerTitle').props.children).toBe(
      'Health insurance',
    );
    expect(component.getByTestId('headerDescription').props.children).toBe(
      'Important for health institution administrative services',
    );
  });
});

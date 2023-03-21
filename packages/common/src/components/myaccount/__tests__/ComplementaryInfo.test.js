import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ComplementaryForm from '../complementaryInfo/ComplementaryForm';

jest.useFakeTimers();

describe('Test TextInput component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ComplementaryForm
          onChange={() => {}}
          getValue={() => {}}
          t={(key) => key}
        />
      </ApplicationProvider>,
    );
  });

  it('Should render a select input field with options', () => {
    expect(component.getByTestId('complementaryFormContainer')).toBeTruthy();
  });
});

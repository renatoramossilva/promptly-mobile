import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import ProfilePicture from '../ProfilePicture';

jest.useFakeTimers();

describe('Test ProfilePicture component', () => {
  let component;
  const onSubmitMocked = jest.fn();

  it('Should render a profile picture section with hint', () => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ProfilePicture
          buttonLabel="Change profile picture"
          onSubmit={onSubmitMocked}
          avatar="../../../images/education.png"
          userName="Paciente Teste"
          hintText="Just an hint text"
          t={(key) => key}
        />
      </ApplicationProvider>,
    );
    expect(component.getByTestId('profilePictureContainer')).toBeTruthy();
    expect(component.getByTestId('profilePictureHint').props.children).toBe(
      'Just an hint text',
    );
  });

  it('Should render a profile picture section without hint', () => {
    component = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ProfilePicture
          buttonLabel="Change profile picture"
          onSubmit={onSubmitMocked}
          avatar="../../../images/education.png"
          userName="Paciente Teste"
          t={(key) => key}
        />
      </ApplicationProvider>,
    );
    expect(component.getByTestId('profilePictureContainer')).toBeTruthy();
    expect(component.getByTestId('profilePictureHint').props.children).toBe(
      undefined,
    );
  });
});

import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import MobileHeader from '../MobileHeader';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {user} from '../../../__mocks__/user';

jest.useFakeTimers();
const mockedOnPressFn = jest.fn();

describe('Test MobileHeader component', () => {
  it('Should render with default promptly logo', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MobileHeader
          name={user.private_data.name}
          avatar={user.private_data.avatar_url}
          onPress={mockedOnPressFn}
        />
      </ApplicationProvider>,
    );
    const logo = queryByTestId('mobileheader-logo-default');
    expect(logo).toBeTruthy();
  });
  it('Should render with institution logo png', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MobileHeader
          name={user.private_data.name}
          avatar={user.private_data.avatar_url}
          onPress={mockedOnPressFn}
          imgSrc="../../images/home.png"
        />
      </ApplicationProvider>,
    );
    const logo = queryByTestId('mobileheader-logo-default');
    expect(logo).toBeFalsy();
  });
  it('Should render with institution logo svg', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MobileHeader
          name={user.private_data.name}
          avatar={user.private_data.avatar_url}
          onPress={mockedOnPressFn}
          imgSrc="logo.svg"
        />
      </ApplicationProvider>,
    );
    const logo = queryByTestId('mobileheader-logo-default');
    expect(logo).toBeFalsy();
  });
});

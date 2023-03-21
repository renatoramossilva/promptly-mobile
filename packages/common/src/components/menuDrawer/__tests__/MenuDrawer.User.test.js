import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MenuDrawerUser from '../MenuDrawer.User';
import {user} from '../../../__mocks__/user';

jest.useFakeTimers();

describe('Test MenuDrawerUser component', () => {
  it('Should render MenuDrawerUser correct user name and email', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MenuDrawerUser
          user={user}
          userName={user.private_data.name}
          userAvatar={user.private_data.avatar_url}
        />
      </ApplicationProvider>,
    );
    const userName = getByTestId('userName');
    expect(userName.props.children).toStrictEqual(user.private_data.name);
    const userContact = getByTestId('userContact');
    expect(userContact.props.children).toStrictEqual(user.email);
  });

  it('Should render MenuDrawerUser correct user phone', () => {
    user.email = undefined;
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MenuDrawerUser
          user={user}
          userName={user.private_data.name}
          userAvatar={user.private_data.avatar_url}
        />
      </ApplicationProvider>,
    );
    const userContact = getByTestId('userContact');
    expect(userContact.props.children).toStrictEqual(user.phone);
  });
});

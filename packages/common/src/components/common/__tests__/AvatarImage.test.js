import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import AvatarImage from '../AvatarImage';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const image = {
  name: 'CUF Infante Santo',
  src: '/static/avatar/inst/cuf.png',
};

describe('Test AvatarImage component', () => {
  it('Should render avatar image', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarImage image={image} />
      </ApplicationProvider>,
    );
    const element = getByTestId('avatarImage');
    expect(element).toBeTruthy();
  });

  it('Should render avatar text', () => {
    image.src = '';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarImage image={image} />
      </ApplicationProvider>,
    );
    const element = getByTestId('avatarText');
    expect(element).toBeTruthy();
  });
});

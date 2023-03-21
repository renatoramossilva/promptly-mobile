import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import AvatarItem from '../AvatarItem';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const data = {
  id: 'cuf',
  image: {
    name: 'CUF Infante Santo',
    src: '/static/avatar/inst/cuf.png',
  },
  name: 'CUF Infante Santo',
  description: 'Porto',
  childrens: [],
};

describe('Test AvatarItem component', () => {
  it('Should render correct simple title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarItem item={data} />
      </ApplicationProvider>,
    );
    const title = getByTestId('h1');
    expect(title.props.children).toBe('CUF Infante Santo');
  });

  it('Should render correct composed title', () => {
    data.short_name = 'HCIS';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarItem item={data} />
      </ApplicationProvider>,
    );
    const element = getByTestId('composedTitle');
    expect(element).toBeTruthy();
    const title = getByTestId('h1');
    expect(title.props.children).toBe('HCIS');
  });
});

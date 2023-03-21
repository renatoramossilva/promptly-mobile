import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import AvatarDropdown from '../AvatarDropdown';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

let item = {
  name: 'CUF Infante Santo ',
  image: {
    name: 'CUF Infante Santo ',
    src: '/static/avatar/inst/cuf.png',
  },
  diseaseName: 'Diabetes',
  childrens: [
    {
      id: '5bec2155-ab95-48fc-93c4-9f50e7f92197',
      image: {
        name: 'doctor',
        src: '',
      },
      name: ' doctor',
      shortName: ' doctor',
      description: '',
      childrens: [],
    },
  ],
  description: 'Diabetes team',
};

describe('Test AvatarDropdown component', () => {
  it('Should render 1 child', async () => {
    const {getByTestId, queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarDropdown item={item} />
      </ApplicationProvider>,
    );
    const button = getByTestId('avatarPressable');
    fireEvent.press(button);

    await waitFor(() =>
      expect(queryByTestId('avatarDropdownChildren')).toBeTruthy(),
    );
    const childrenHolder = queryByTestId('avatarDropdownChildren');
    expect(childrenHolder.props.children.length).toBe(1);
  });

  it('Should render 2 children', async () => {
    item.childrens.push({
      id: '1231245-4122-48f2c-3212-ff2f2f22f',
      image: {
        name: 'doctor 2',
        src: '',
      },
      name: 'doctor 2',
      shortName: ' doctor2',
      description: '',
      childrens: [],
    });
    const {getByTestId, queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <AvatarDropdown item={item} />
      </ApplicationProvider>,
    );
    const button = getByTestId('avatarPressable');
    fireEvent.press(button);

    await waitFor(() =>
      expect(queryByTestId('avatarDropdownChildren')).toBeTruthy(),
    );
    const childrenHolder = queryByTestId('avatarDropdownChildren');
    expect(childrenHolder.props.children.length).toBe(2);
  });
});

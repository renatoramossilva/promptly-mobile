import React from 'react';
import {render} from '@testing-library/react-native';
import MenuTabBottomItem from '../MenuTabBottom.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test MenuTabBottomItem component', () => {
  it('Should render correct unread notification value', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MenuTabBottomItem notificationsCount="3" />
      </ApplicationProvider>,
    );
    const element = getByTestId('CounterIconValue');

    expect(element.props.children).toBe('3');
  });

  it('Should render right opacity on selected', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MenuTabBottomItem notificationsCount="3" selected="true" />
      </ApplicationProvider>,
    );
    const element = getByTestId('PromptlyIcon');

    expect(element.props.style[1][1]).toMatchObject({opacity: 1});
  });

  it('Should render right opacity on not selected', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MenuTabBottomItem notificationsCount="3" />
      </ApplicationProvider>,
    );
    const element = getByTestId('PromptlyIcon');

    expect(element.props.style[1][1]).toMatchObject({opacity: 0.6});
  });
});

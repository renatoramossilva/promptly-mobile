import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NotificationsItem from '../Notifications.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test NotificationsItem component', () => {
  const item = {
    category: 'PATIENT_CAREPLAN_CHANGED',
    count: 0,
    created: '2021-03-12T11:15:41.230589Z',
    id: '3e5631ae-d743-4c1c-a212-dd5c9556b671',
    message: 'Far quitting dwelling graceful the likewise received building.',
    open: false,
    read: true,
    uid: '3e5631ae-d743-4c1c-a212-dd5c9556b671',
    uri: 'promptly://pdisease/1/prom',
  };

  const onPressFn = jest.fn();

  it('Should render correct message', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsItem
          item={item}
          isOpenned
          itemPress={null}
          language={'pt'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('message');

    expect(element.props.children).toBe(item.message);
  });

  it('Should render correct read color', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsItem
          item={item}
          isOpenned
          itemPress={null}
          language={'pt'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('pressable');

    expect(element.props.style[1]).toMatchObject({backgroundColor: 'white'});
  });

  it('Should render correct unread color', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsItem item={item} itemPress={null} language={'pt'} />
      </ApplicationProvider>,
    );
    const element = getByTestId('pressable');

    expect(element.props.style[1]).toMatchObject({backgroundColor: '#E6EFF6'});
  });

  it('Should not call onPress function', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsItem isOpenned item={item} language={'pt'} />
      </ApplicationProvider>,
    );
    const element = getByTestId('pressable');

    fireEvent.press(element);
    expect(onPressFn).toHaveBeenCalledTimes(0);
  });

  it('Should call onPress function', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsItem
          isOpenned
          item={item}
          itemPress={onPressFn()}
          language={'pt'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('pressable');

    fireEvent.press(element);
    expect(onPressFn).toHaveBeenCalled();
  });
});

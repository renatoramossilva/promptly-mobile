import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import NotificationsList from '../Notifications.List';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

describe('Test NotificationsItem component', () => {
  const notifications = {
    loading: false,
    result: [
      {
        category: 'PATIENT_CAREPLAN_CHANGED',
        count: 0,
        created: '2021-03-12T11:15:41.230589Z',
        id: '3e5631ae-d743-4c1c-a212-dd5c9556b671',
        message: 'Far quitting dwelling graceful the likewise received building.',
        open: false,
        read: true,
        uid: '3e5631ae-d743-4c1c-a212-dd5c9556b671',
        uri: 'promptly://pdisease/1/education',
      },
      {
        category: 'INSTITUTION_OVERVIEW_TODO',
        count: 0,
        created: '2021-03-12T11:15:41.230589Z',
        id: '04119b59-b9fa-4978-8d26-e78ed08abf35',
        message:
          'If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood.',
        open: true,
        read: true,
        uid: '3e5631ae-d743-4c1c-a212-dd5c9556b671',
        uri: 'promptly://pdisease/1/prom',
      },
    ],
  };

  const openedNotifications = ['04119b59-b9fa-4978-8d26-e78ed08abf35'];
  const onPressFn = jest.fn();
  const t = jest.fn();

  it('Should render no results', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsList
          notifications={{
            result: [],
            loading: false,
          }}
          language={'pt'}
          t={t}
          notificationAction={onPressFn}
          openedNotifications={openedNotifications}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('statusbanner');

    expect(element).not.toBeNull();
  });

  it('Should render items', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <NotificationsList
          notifications={notifications}
          language={'pt'}
          t={t}
          notificationAction={onPressFn}
          openedNotifications={openedNotifications}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('list');
    expect(element).not.toBeNull();
  });
});

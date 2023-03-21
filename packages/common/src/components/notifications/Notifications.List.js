import React from 'react';
import {List} from '@ui-kitten/components';
import NotificationsItem from './Notifications.Item';
import LoadingScreen from '../common/LoadingScreen';
import StatusBanner from '../common/StatusBanner';
import {NotificationsStyles} from './Notifications.Styles';

const NotificationsList = ({
  t,
  notificationAction,
  language,
  openedNotifications,
  notifications,
}) => {
  const noResults = {
    image: require('../../images/nonotifications.png'),
    title: t('You have no notifications right now. Come back later.'),
  };

  const renderItem = ({item}) => {
    const {id, uri, category} = item;
    const isOpenned = openedNotifications.includes(id);

    return (
      <NotificationsItem
        isOpenned={isOpenned}
        item={item}
        language={language}
        itemPress={() => {
          notificationAction(id, uri, category);
        }}
      />
    );
  };

  const {loading, result} = notifications;
  if (loading) {
    return <LoadingScreen />;
  }
  if (!result || result.length === 0) {
    return (
      <StatusBanner
        status={noResults}
        style={NotificationsStyles.statusbanner}
      />
    );
  }
  return (
    <List
      testID="list"
      contentContainerStyle={NotificationsStyles.notificationsListContainer}
      data={result.slice().reverse()}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default NotificationsList;

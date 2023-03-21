import React, {useState, useEffect} from 'react';
import Axios from 'utils/axios';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Config from 'react-native-config';
import {
  BottomNavigation,
  BottomNavigationTab,
  useTheme,
} from '@ui-kitten/components';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {isAndroid} from 'utils';
import {getUser} from 'selectors/selected_user';
import MenuTabBottomItem from './MenuTabBottom.Item';
import {MenuTabBottomStyles} from './MenuTabBottom.Styles';
import {getSessionCookies} from 'selectors/selected_session';
import {clickBottomMenuItem} from 'actions/datacollection';

const MenuTabBottom = ({
  navigation,
  descriptors,
  state,
  user,
  onClickBottomMenuItem,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const theme = useTheme();
  const [notificationsCount, setNotificationsCount] = useState(0);

  useEffect(() => {
    if (!user.uuid) {
      return undefined;
    }
    getAlerts();
    const interval = setInterval(
      () => getAlerts(),
      parseInt(Config.NOTIFICATIONS_REFRESH, 10),
    );
    return () => {
      clearInterval(interval);
    };
  }, [user]);

  const getAlerts = () => {
    const options = {
      method: 'get',
      url: `${Config.WEBVIEW_URL}/api/notifications/count`,
      cache: false,
    };
    Axios(options).then(response => {
      const unread =
        response && response.data && response.data.unread
          ? response.data.unread
          : 0;
      if (!isAndroid) {
        PushNotificationIOS.setApplicationIconBadgeNumber(unread);
      }
      setNotificationsCount(unread);
    });
  };

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const menuMap = [
    {
      iconName: 'home',
    },
    {
      iconName: 'conditions',
    },
    {
      iconName: 'education',
    },
    {
      iconName: 'bell',
      notificationsCount,
    },
  ];

  const NavTabs = menuMap.map((item, index) => (
    <BottomNavigationTab
      key={index}
      icon={() => (
        <MenuTabBottomItem
          iconName={item.iconName}
          selected={state.index === index}
          notificationsCount={item.notificationsCount}
        />
      )}
    />
  ));
  const handleNavigation = index => {
    onClickBottomMenuItem({name: state.routeNames[index]});
    navigation.reset({
      index: 0,
      routes: [{name: state.routeNames[index]}],
    });
  };
  return (
    <SafeAreaView style={{backgroundColor: theme['color-primary-500']}}>
      <BottomNavigation
        indicatorStyle={MenuTabBottomStyles.indicator}
        style={{backgroundColor: theme['color-primary-500']}}
        selectedIndex={state.index}
        onSelect={index => handleNavigation(index)}>
        {NavTabs}
      </BottomNavigation>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  user: getUser(state),
  cookies: getSessionCookies,
});

const mapDispatchToProps = {
  onClickBottomMenuItem: clickBottomMenuItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuTabBottom);

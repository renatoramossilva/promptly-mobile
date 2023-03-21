import React from 'react';
import PromptlyIcon from '../common/PromptlyIcon';
import {Text, useTheme} from '@ui-kitten/components';
import {View} from 'react-native';
import {MenuTabBottomItemStyles} from './MenuTabBottom.Styles';

const CounterIcon = ({notificationCount}) => {
  const theme = useTheme();
  return (
    <View style={MenuTabBottomItemStyles.counterIconWrapper}>
      <Text
        testID="CounterIconValue"
        style={[
          MenuTabBottomItemStyles.counterIconText,
          {
            borderColor: theme['color-primary-500'],
            backgroundColor: theme['color-danger-600'],
          },
        ]}>
        {notificationCount}
      </Text>
    </View>
  );
};

const MenuTabBottomItem = ({iconName, notificationsCount, selected}) => {
  return (
    <>
      <PromptlyIcon
        testID="PromptlyIcon"
        name={iconName}
        style={[MenuTabBottomItemStyles.icon, {opacity: selected ? 1 : 0.6}]}
      />
      {notificationsCount && notificationsCount > 0 ? (
        <CounterIcon notificationCount={notificationsCount} />
      ) : null}
    </>
  );
};

export default MenuTabBottomItem;

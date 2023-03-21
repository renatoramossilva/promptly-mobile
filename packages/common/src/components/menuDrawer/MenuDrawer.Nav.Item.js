import React from 'react';
import {Text, useTheme} from '@ui-kitten/components';
import {Pressable} from 'react-native';
import PromptlyIcon from '../common/PromptlyIcon';
import {MenuDrawerNavItemStyles} from './MenuDrawer.Styles';

const MenuDrawerNavItem = ({title, icon, handleClick}) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
        MenuDrawerNavItemStyles.item,
      ]}
      onPress={handleClick}>
      <PromptlyIcon
        name={icon}
        style={[
          {color: theme['promptly-blue-500']},
          MenuDrawerNavItemStyles.icon,
        ]}
      />
      <Text
        category="h1"
        style={[
          {color: theme['color-basic-300']},
          MenuDrawerNavItemStyles.title,
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default MenuDrawerNavItem;

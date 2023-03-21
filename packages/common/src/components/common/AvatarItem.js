import React from 'react';
import {Pressable} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {AvatarStyles} from './Avatar.Styles';
import AvatarImage from './AvatarImage';
import PromptlyIcon from './PromptlyIcon';

const AvatarItem = ({item, isChild, onPress, hasChildren}) => {
  const theme = useTheme();

  return (
    <Layout
      style={[
        AvatarStyles.holder,
        isChild && AvatarStyles.childHolder,
        {borderLeftColor: theme['color-info-300']},
      ]}>
      <Pressable
        style={AvatarStyles.container}
        onPress={onPress}
        testID="avatarPressable">
        <AvatarImage image={item.image} />
        <Layout style={AvatarStyles.textContainer}>
          {item.short_name ? (
            <Layout style={AvatarStyles.title} testID="composedTitle">
              <Text category="h1" style={AvatarStyles.firstTitle} testID="h1">
                {item.short_name}
              </Text>
              <Text category="p1" style={AvatarStyles.secondTitle}>
                {` - ${item.name}`}
              </Text>
            </Layout>
          ) : (
            <Text
              category="h1"
              style={AvatarStyles.firstTitle}
              numberOfLines={1}
              testID="h1">
              {item.name}
            </Text>
          )}
          {item.description ? (
            <Text
              category="p1"
              numberOfLines={1}
              style={[
                AvatarStyles.description,
                {color: theme['color-info-500']},
              ]}
              testID="avatarItemDescription">
              {item.description}
            </Text>
          ) : null}
        </Layout>
        {hasChildren ? (
          <Layout style={AvatarStyles.dropIconContainer}>
            <PromptlyIcon
              name="arrowFullBottom"
              style={AvatarStyles.dropIcon}
            />
          </Layout>
        ) : null}
      </Pressable>
    </Layout>
  );
};
export default AvatarItem;

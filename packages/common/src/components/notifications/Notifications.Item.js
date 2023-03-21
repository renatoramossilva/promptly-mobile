import React from 'react';
import {Pressable} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {dateDiffInWords, moment} from 'utils/dates';
import {NotificationsItemStyles} from './Notifications.Styles';

const NotificationsItem = ({item, isOpenned, itemPress, language}) => {
  const date = item.created;
  const theme = useTheme();
  return (
    <Pressable
      testID="pressable"
      onPress={() => (itemPress ? itemPress(item) : false)}
      style={({pressed}) => [
        NotificationsItemStyles.listItem,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: item.open || isOpenned ? 'white' : '#E6EFF6',
        },
      ]}>
      <Text
        testID="message"
        style={[
          NotificationsItemStyles.title,
          {color: theme['color-basic-300']},
        ]}>
        {item.message}
      </Text>
      <Text
        testID="date"
        style={[
          NotificationsItemStyles.date,
          {color: theme['color-basic-200']},
        ]}>
        {dateDiffInWords(date, language, moment())}
      </Text>
    </Pressable>
  );
};

export default NotificationsItem;

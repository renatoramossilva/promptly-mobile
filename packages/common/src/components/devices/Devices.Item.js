import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar, useTheme} from '@ui-kitten/components';
import {DevicesItemStyles} from './Devices.Styles';
import {getImageAbsoluteUrl} from 'utils';

const DevicesItem = ({device, itemPress}) => {
  const theme = useTheme();

  const ItemImage = () => (
    <Avatar
      style={{borderRadius: 5}}
      source={{uri: getImageAbsoluteUrl(device.avatarUrl)}}
      size="large"
    />
  );

  return (
    <TouchableOpacity
      onPress={() => (itemPress ? itemPress(device) : false)}
      style={DevicesItemStyles.listItem}>
      <ItemImage />
      <View style={DevicesItemStyles.contentContainer}>
        <Text
          style={[DevicesItemStyles.title, {color: theme['color-basic-1100']}]}>
          {device.name}
        </Text>
        {device.description && (
          <Text
            style={[
              DevicesItemStyles.subtitle,
              {color: theme['color-basic-700']},
            ]}>
            {device.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DevicesItem;

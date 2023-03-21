import React from 'react';
import {Text, Avatar} from '@ui-kitten/components';
import {UserAvatarStyles} from './UserAvatar.Styles';
import {getInitials} from '../../utils';

const UserAvatar = ({userAvatar, userName, avatarStyle, textStyle}) => {
  return userAvatar ? (
    <Avatar
      style={[UserAvatarStyles.avatar, avatarStyle]}
      source={{uri: userAvatar}}
      size="large"
    />
  ) : (
    <Text category="c1" style={[UserAvatarStyles.avatarText, textStyle]}>
      {userName && getInitials(userName)}
    </Text>
  );
};
export default UserAvatar;

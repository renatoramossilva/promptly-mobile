import React from 'react';
import {Image} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {AvatarStyles} from './Avatar.Styles';
import {UserAvatarStyles} from './UserAvatar.Styles';
import {getInitials, getImageAbsoluteUrl} from 'utils';

const AvatarImage = ({image, style}) => {
  const theme = useTheme();

  return image?.src && image?.src?.length > 0 ? (
    <Image
      testID="avatarImage"
      style={[AvatarStyles.avatar, style]}
      source={{uri: getImageAbsoluteUrl(image.src)}}
    />
  ) : (
    <Layout
      testID="avatarText"
      style={[
        AvatarStyles.textAvatar,
        {backgroundColor: theme['promptly-blue-300']},
      ]}>
      <Text
        category="h5"
        style={([UserAvatarStyles.avatarText], {color: '#fff'})}>
        {image?.name && getInitials(image.name)}
      </Text>
    </Layout>
  );
};

export default AvatarImage;

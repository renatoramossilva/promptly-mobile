import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import Button from './Button';
import {MyAccountGeneralInfoStyles} from '../myaccount/MyAccount.Styles';
import {ProfilePictureStyles} from './ProfilePicture.Styles';
import UserAvatar from './UserAvatar';
import ImagePicker from 'react-native-image-crop-picker';

const ProfilePicture = ({
  buttonLabel,
  onSubmit,
  avatar,
  hintText,
  userName,
  t,
}) => {
  const theme = useTheme();
  const [errorText, setErrorText] = useState(undefined);

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then((image) => {
      const {size, mime, path, data} = image;
      setErrorText(undefined);
      if ((size / 1048576).toFixed(2) > 10) {
        setErrorText(
          t(
            'Image must be at least 200px high by 200px wide with a maximum size of 10MB',
          ),
        );
        return;
      }

      const splittedPath = path.split('/');
      const filename = splittedPath[splittedPath.length - 1];
      onSubmit({
        image: `data:${mime};base64,${data}`,
        filename,
        extension: mime,
      });
    });
  };

  return (
    <Layout testID="profilePictureContainer">
      <Layout
        style={[
          ProfilePictureStyles.profileImage,
          {backgroundColor: theme['color-info-500']},
        ]}>
        <UserAvatar
          userAvatar={avatar}
          userName={userName}
          avatarStyle={{width: 140, height: 140}}
          textStyle={{fontSize: 60}}
        />
      </Layout>
      <Layout style={ProfilePictureStyles.uploadPhotoButtonWrapper}>
        <Button onPress={() => handleChoosePhoto()}>{buttonLabel}</Button>
        <Text
          style={[
            MyAccountGeneralInfoStyles.hintText,
            {color: theme['color-info-500']},
          ]}
          testID="profilePictureHint">
          {hintText}
        </Text>
        {!!errorText && (
          <Text
            style={[
              MyAccountGeneralInfoStyles.hintText,
              {color: theme['color-danger-500']},
            ]}
            testID="profilePictureError">
            {errorText}
          </Text>
        )}
      </Layout>
    </Layout>
  );
};

ProfilePicture.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  avatar: PropTypes.string,
  userName: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfilePicture;

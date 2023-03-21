import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import SubHeader from '../../../common/SubHeader';
import ProfilePicture from '../../../common/ProfilePicture';
import {MyAccountGeneralInfoStyles} from '../../MyAccount.Styles';

const ProfilePictureSection = ({
  title,
  description,
  buttonLabel,
  onSubmit,
  avatar,
  userName,
  hintText,
  t,
}) => (
  <Layout style={MyAccountGeneralInfoStyles.profileWrapper}>
    <SubHeader title={title} description={description} />
    <ProfilePicture
      buttonLabel={buttonLabel}
      onSubmit={onSubmit}
      avatar={avatar}
      userName={userName}
      hintText={hintText}
      t={t}
    />
  </Layout>
);

ProfilePictureSection.defaultProps = {
  buttonLabel: 'Change profile image',
  hintText:
    'Allowed .png, .jpg and .jpeg file types at least 200px high by 200px wide with a maximum size of 10MB',
};

ProfilePictureSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  userName: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  avatar: PropTypes.string,
};

export default ProfilePictureSection;

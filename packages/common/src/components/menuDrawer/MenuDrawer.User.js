import React from 'react';
import {useTheme, Layout, Text} from '@ui-kitten/components';
import UserAvatar from '../common/UserAvatar';
import {MenuDrawerUserStyles} from './MenuDrawer.Styles';

const MenuDrawerUser = (props) => {
  const {userName, userAvatar, user} = props;
  const theme = useTheme();

  return (
    <Layout style={MenuDrawerUserStyles.wrapper}>
      <Layout
        style={[
          MenuDrawerUserStyles.avatarWrapper,
          {backgroundColor: theme['color-info-500']},
        ]}>
        <UserAvatar
          userAvatar={userAvatar}
          userName={userName}
          avatarStyle={{width: '100%'}}
        />
      </Layout>
      <Layout style={MenuDrawerUserStyles.textWrapper}>
        <Text testID="userName" category="h1" style={MenuDrawerUserStyles.text}>
          {userName}
        </Text>
        <Text
          testID="userContact"
          category="s1"
          style={[
            MenuDrawerUserStyles.contact,
            {color: theme['color-basic-300']},
          ]}>
          {user.email || user.phone}
        </Text>
      </Layout>
    </Layout>
  );
};

export default MenuDrawerUser;

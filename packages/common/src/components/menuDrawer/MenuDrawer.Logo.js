import React from 'react';
import {Image} from 'react-native';
import {Layout, useTheme} from '@ui-kitten/components';
import {MenuDrawerLogoStyles} from './MenuDrawer.Styles';

const MenuDrawerLogo = () => {
  const theme = useTheme();

  return (
    <Layout
      style={[
        MenuDrawerLogoStyles.wrapper,
        {backgroundColor: theme['promptly-blue-500']},
      ]}>
      <Image
        source={require('../../images/prom-logo-white.png')}
        style={MenuDrawerLogoStyles.logo}
      />
    </Layout>
  );
};

export default MenuDrawerLogo;

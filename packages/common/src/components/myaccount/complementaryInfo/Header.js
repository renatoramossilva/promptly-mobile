import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {MyAccountComplementaryInfoStyles} from '../MyAccount.Styles';

const Header = ({title, description}) => {
  const theme = useTheme();
  return (
    <Layout testID="headerContainer">
      <Text
        style={[
          MyAccountComplementaryInfoStyles.insuranceContainerTitle,
          {color: theme['color-basic-900']},
        ]}
        testID="headerTitle">
        {title}
      </Text>
      <Text
        style={[
          MyAccountComplementaryInfoStyles.insuranceContainerDescription,
          {color: theme['color-info-500']},
        ]}
        testID="headerDescription">
        {description}
      </Text>
    </Layout>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {SubHeaderStyles} from './SubHeader.Styles';

const SubHeader = ({title, description}) => {
  const theme = useTheme();
  return (
    <Layout testID="headerContainer">
      <Text
        style={[SubHeaderStyles.title, {color: theme['color-basic-900']}]}
        testID="headerTitle">
        {title}
      </Text>
      {Boolean(description) && (
        <Text
          style={[
            SubHeaderStyles.description,
            {color: theme['color-info-500']},
          ]}
          testID="headerDescription">
          {description}
        </Text>
      )}
    </Layout>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SubHeader;

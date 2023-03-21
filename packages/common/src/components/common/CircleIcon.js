import React from 'react';
import {Layout, useTheme} from '@ui-kitten/components';
import {CircleIconStyles} from './CircleIcon.Styles';

const CircleIcon = () => {
  const theme = useTheme();

  return (
    <Layout style={CircleIconStyles.container} testID="CircleIcon">
      <Layout
        style={[
          CircleIconStyles.icon,
          {backgroundColor: theme['color-primary-500']},
        ]}
      />
    </Layout>
  );
};
export default CircleIcon;

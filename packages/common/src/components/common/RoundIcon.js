import React from 'react';
import {Layout} from '@ui-kitten/components';
import PromptlyIcon from './PromptlyIcon';
import {RoundIconStyles} from './RoundIcon.Styles';

const RoundIcon = ({color, size, iconName, iconStyle}) => {
  return (
    <Layout
      style={[
        RoundIconStyles.container,
        {
          backgroundColor: color,
          borderRadius: size,
          width: size,
          height: size,
        },
      ]}>
      <PromptlyIcon name={iconName} style={iconStyle} />
    </Layout>
  );
};

export default RoundIcon;

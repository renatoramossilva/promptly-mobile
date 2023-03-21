import React from 'react';
import {Layout, useTheme} from '@ui-kitten/components';
import RoundIcon from './RoundIcon';
import {GlucoseIconStyles} from './GlucoseIcon.Styles';
import {TouchableOpacity} from 'react-native';

const GlucoseIcon = ({item, onPressFn, style = {}}) => {
  const theme = useTheme();
  const iconName = item.icon ? item.icon.class : '';

  return (
    <Layout style={[GlucoseIconStyles.container, style]}>
      {item.code === '15074-8' ? (
        <TouchableOpacity
          testID="GlucoseIconEdit"
          onPress={() => onPressFn(item)}
          style={[
            GlucoseIconStyles.iconsContainer,
            {borderColor: theme['color-basic-200']},
          ]}>
          <Layout style={GlucoseIconStyles.iconsAligner}>
            <RoundIcon
              color={theme['color-basic-200']}
              size={35}
              iconName={item.icon.class}
              iconStyle={GlucoseIconStyles.leftIcon}
            />
            <RoundIcon
              color={'transparent'}
              size={35}
              iconName={'pencil'}
              iconStyle={GlucoseIconStyles.rightIcon}
            />
          </Layout>
        </TouchableOpacity>
      ) : (
        <Layout
          testID="GlucoseIconNoEdit"
          style={GlucoseIconStyles.iconsContainer}>
          <RoundIcon
            color={theme['color-primary-500']}
            size={35}
            iconName={iconName}
            iconStyle={GlucoseIconStyles.leftIcon}
          />
        </Layout>
      )}
    </Layout>
  );
};

export default GlucoseIcon;

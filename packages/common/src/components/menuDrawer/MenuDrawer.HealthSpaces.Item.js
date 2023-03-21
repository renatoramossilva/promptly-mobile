import React from 'react';
import {Layout, Text, Avatar, useTheme} from '@ui-kitten/components';
import {Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import {getImageAbsoluteUrl} from '../../utils';
import PromptlyIcon from '../common/PromptlyIcon';
import {HealthSpacesItemStyles} from './MenuDrawer.Styles';

const isSelected = (selected, inst) => selected.id === inst.id;

const HealthSpacesItem = ({selectedInstitution, inst, handleClick}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <Pressable
      onPress={handleClick}
      style={({pressed}) => [
        HealthSpacesItemStyles.button,
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}>
      <Layout>
        {inst.image?.src ? (
          <Avatar
            style={HealthSpacesItemStyles.avatar}
            source={{uri: getImageAbsoluteUrl(inst.image.src)}}
            size="large"
          />
        ) : null}
      </Layout>
      <Layout style={HealthSpacesItemStyles.textWrapper}>
        <Text
          category="h5"
          numberOfLines={1}
          style={HealthSpacesItemStyles.title}>
          {inst.name}
        </Text>
        <Text
          category="p1"
          numberOfLines={1}
          style={[
            HealthSpacesItemStyles.subTitle,
            {color: theme['color-basic-200']},
          ]}>
          {t('Conditions followed in {{short_name}}', {
            short_name: inst.short_name,
          })}
        </Text>
      </Layout>
      {isSelected(selectedInstitution, inst) && (
        <Layout style={HealthSpacesItemStyles.selectedWrapper}>
          <Layout
            style={[
              HealthSpacesItemStyles.selectedIconWrapper,
              {
                backgroundColor: theme['color-success-500'],
              },
            ]}>
            <PromptlyIcon
              name="check"
              style={HealthSpacesItemStyles.selectedIcon}
            />
          </Layout>
        </Layout>
      )}
    </Pressable>
  );
};

export default HealthSpacesItem;

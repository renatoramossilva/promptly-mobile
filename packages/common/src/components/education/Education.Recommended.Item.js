import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import {
  EducationItemStyles,
  EducationRecommendedItemStyles,
} from './Education.Styles';
import {getRGBACode} from 'utils/color';

const EducationRecommendedItem = ({article, handlePress}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      testID="EducationRecommendedItem"
      onPress={() => handlePress(article)}
      style={[
        EducationItemStyles.headerContainer,
        EducationRecommendedItemStyles.container,
      ]}>
      {article.headerImage ? (
        <Image
          source={{uri: article.headerImage}}
          style={EducationItemStyles.image}
          testID="EducationRecommendedItemImage"
        />
      ) : null}
      <LinearGradient
        colors={[
          getRGBACode(theme['color-primary-500'], 0),
          theme['color-primary-500'],
        ]}
        style={EducationItemStyles.headerGradientContainer}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.2}}>
        <Layout style={EducationItemStyles.headerTextContainer}>
          <Text
            category="h1"
            style={EducationItemStyles.title}
            testID="EducationRecommendedItemTitle">
            {article.title}
          </Text>
          {article.description ? (
            <Text
              style={EducationRecommendedItemStyles.description}
              testID="EducationRecommendedItemDescription">
              {article.description}
            </Text>
          ) : null}
        </Layout>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default EducationRecommendedItem;

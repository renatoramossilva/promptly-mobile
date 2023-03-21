import React from 'react';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {Image, Pressable} from 'react-native';
import {EducationDiseaseListItemStyles} from './Education.Styles';

const EducationDiseaseListItem = ({article, onPress}) => {
  const theme = useTheme();
  return (
    <Pressable
      style={EducationDiseaseListItemStyles.container}
      onPress={onPress}>
      <Image
        source={{uri: article.image}}
        style={EducationDiseaseListItemStyles.image}
        testID="image"
      />
      <Layout style={EducationDiseaseListItemStyles.textContainer}>
        <Text
          category="h1"
          style={EducationDiseaseListItemStyles.title}
          testID="title">
          {article.title}
        </Text>
        <Text
          style={[
            EducationDiseaseListItemStyles.description,
            {color: theme['color-basic-300']},
          ]}
          testID="description">
          {article.description}
        </Text>
        <Layout style={EducationDiseaseListItemStyles.author}>
          <Image
            source={{uri: article.author.logo}}
            style={EducationDiseaseListItemStyles.logo}
            testID="EducationListItemSignatureLogo"
          />
          <Text
            style={[
              EducationDiseaseListItemStyles.name,
              {color: theme['color-basic-200']},
            ]}
            testID="EducationListItemSignatureName">
            {article.author.name}
          </Text>
        </Layout>
      </Layout>
    </Pressable>
  );
};

export default EducationDiseaseListItem;

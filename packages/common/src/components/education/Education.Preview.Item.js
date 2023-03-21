import React from 'react';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {Image, Pressable} from 'react-native';
import {EducationPreviewItemStyles} from './Education.Styles';

const EducationPreviewItem = ({article, onPress}) => {
  const theme = useTheme();
  return (
    <Pressable style={EducationPreviewItemStyles.container} onPress={onPress}>
      <Image
        source={{uri: article.previewImage}}
        style={EducationPreviewItemStyles.image}
        testID="image"
      />
      <Layout style={EducationPreviewItemStyles.textContainer}>
        <Text
          category="h1"
          style={EducationPreviewItemStyles.title}
          testID="title">
          {article.title}
        </Text>
        <Text
          style={[
            EducationPreviewItemStyles.description,
            {color: theme['color-basic-300']},
          ]}
          testID="description">
          {article.description}
        </Text>
      </Layout>
    </Pressable>
  );
};

export default EducationPreviewItem;

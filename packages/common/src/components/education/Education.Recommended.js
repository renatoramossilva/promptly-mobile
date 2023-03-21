import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import EducationRecommendedItem from './Education.Recommended.Item';
import Article from '../../models/Article';
import {EducationRecommendedStyles} from './Education.Styles';

const EducationRecommended = ({articles}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const _handlePress = (article) => {
    navigation.navigate('Education', {
      screen: 'EducationDetail',
      params: {
        articleId: article.id,
        diseaseSlug: article.disease_slug,
      },
    });
  };

  const _renderItem = ({item}) => {
    return (
      <EducationRecommendedItem
        article={new Article(item, t)}
        handlePress={_handlePress}
      />
    );
  };

  return articles && articles.length > 0 ? (
    <Layout
      style={EducationRecommendedStyles.container}
      testID="EducationRecommended">
      <Text category="h1" style={EducationRecommendedStyles.title}>
        {t('Recommended reading')}
      </Text>
      <Carousel
        layout={'default'}
        data={articles}
        renderItem={_renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 20}
        inactiveSlideOpacity={1}
        contentContainerCustomStyle={{alignItems: 'center'}}
      />
    </Layout>
  ) : null;
};

export default EducationRecommended;

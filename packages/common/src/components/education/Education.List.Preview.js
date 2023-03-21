import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, Layout} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import ArticlePreviewItem from './Education.Preview.Item';
import {EducationListPreviewStyles} from './Education.Styles';
import Button from '../common/Button';
import ArticleModel from '../../models/Article';

const EducationListPreview = ({disease, articles}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {items} = articles;

  if (!items || items.length === 0) {
    return <></>;
  }

  return (
    <Layout
      style={EducationListPreviewStyles.container}
      testID="educationDiseaseContainer">
      <Text
        category="h1"
        style={EducationListPreviewStyles.title}
        testID="diseaseTitle">
        {disease.disease.name}
      </Text>
      <Layout
        style={EducationListPreviewStyles.container}
        testID="educationListPreviewArticlesContainer">
        {items.map(item => (
          <ArticlePreviewItem
            key={item.id}
            article={new ArticleModel(item, t)}
            onPress={() => {
              navigation.navigate('EducationDetail', {
                articleId: item.id,
                diseaseId: disease?.id,
              });
            }}
          />
        ))}
        <Button
          status="primary"
          style={EducationListPreviewStyles.diseaseButton}
          onPress={() => {
            navigation.navigate('EducationDisease', {diseaseId: disease?.id});
          }}>
          {t('View all articles')}
        </Button>
      </Layout>
    </Layout>
  );
};

export default EducationListPreview;

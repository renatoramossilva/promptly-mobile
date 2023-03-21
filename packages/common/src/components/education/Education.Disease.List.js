import React from 'react';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {noop} from 'utils';
import ArticleModel from 'models/Article';
import StatusBanner from 'components/common/StatusBanner';
import EducationDiseaseListItem from './Education.Disease.List.Item';
import {EducationDiseaseListStyles} from './Education.Styles';
import {clickArticleFromAllArticles} from 'actions/datacollection';

const EducationDiseaseList = ({
  selectedArticles,
  diseaseId,
  onClickArticleFromAllArticles,
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const noDiseases = {
    image: require('../../images/education.png'),
    title: t('Nothing to read yet!'),
    subtitle: t(
      'We are working in content to help you with your medical conditions.',
    ),
  };

  if (selectedArticles.length === 0) {
    return (
      <StatusBanner
        status={noDiseases}
        style={EducationDiseaseListStyles.noDiseasesBanner}
      />
    );
  }

  return (
    <FlatList
      testID="EducationDiseaseListFlatlist"
      style={EducationDiseaseListStyles.list}
      contentContainerStyle={EducationDiseaseListStyles.container}
      data={selectedArticles}
      renderItem={({item}) => (
        <EducationDiseaseListItem
          article={new ArticleModel(item, t)}
          onPress={() => {
            onClickArticleFromAllArticles({
              articleId: item.id,
              diseaseId: diseaseId,
            });
            navigation.navigate('EducationDetail', {
              articleId: item.id,
              diseaseId: diseaseId,
            });
          }}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

EducationDiseaseList.propTypes = {
  selectedArticles: PropTypes.array.isRequired,
  diseaseId: PropTypes.number.isRequired,
  onClickArticleFromAllArticles: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onClickArticleFromAllArticles: clickArticleFromAllArticles,
};

export default connect(null, mapDispatchToProps)(EducationDiseaseList);

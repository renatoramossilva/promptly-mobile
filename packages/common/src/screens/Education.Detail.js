import React, {PureComponent} from 'react';
import {Text} from '@ui-kitten/components';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getEducationArticle} from '../selectors/selected_education';
import {getDiseaseItems} from '../selectors/selected_diseases';
import LoadingScreen from 'components/common/LoadingScreen';
import {fetchArticle} from '../actions/articles';
import EducationItem from 'components/education/Education.Item';
import ArticleModel from '../models/Article';
import {NavigatorStyles} from '../navigation/Navigator.Styles';
import {clickEducationArticle} from '../actions/datacollection';

class EducationDetail extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {route, diseases, onClickEducationArticle} = this.props;
    const {params} = route;
    const selectedDisease = params?.diseaseSlug
      ? diseases.find(d => d.disease.slug === params?.diseaseSlug)
      : diseases.find(d => d.id === params?.diseaseId);
    const diseaseURL = selectedDisease?.education_urls?.article_endpoint;

    if (params && params.articleId && diseaseURL) {
      this.props.fetchArticle(diseaseURL, params.articleId);
      const {navigation} = this.props;
      // clear header title otherwise it shows 'EducationDetail'
      navigation.setOptions({
        title: '',
      });
    }

    onClickEducationArticle({
      articleId: params?.articleId,
      diseaseId: params?.diseaseId,
      from: params?.from,
    });
  }

  componentDidUpdate() {
    const {article, navigation} = this.props;
    navigation.setOptions({
      title: !article.loading && (
        <Text style={NavigatorStyles.title}>{article.data.title}</Text>
      ),
    });
  }

  render() {
    const {article, t, route} = this.props;

    if (!article.data || article.loading) {
      return <LoadingScreen />;
    }

    return (
      <EducationItem
        article={new ArticleModel(article.data, t)}
        diseaseId={route.params?.diseaseId}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  diseases: getDiseaseItems,
  article: getEducationArticle,
});

const mapDispatchToProps = {
  fetchArticle,
  onClickEducationArticle: clickEducationArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(EducationDetail));

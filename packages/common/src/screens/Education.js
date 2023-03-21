import React, {PureComponent} from 'react';
import {withTranslation} from 'react-i18next';
import {Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import EducationList from 'components/education/Education.List';
import {getDiseaseItems} from 'selectors/selected_diseases';
import {getEducationPreviewArticles} from 'selectors/selected_education';
import {fetchArticlesFromDiseases, clearArticleDetail} from 'actions/articles';
import Config from 'react-native-config';

class Education extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleLinking(url) {
    const {navigation, route} = this.props;

    navigation.setParams({url: null});

    const [source, action] = url.split('://');
    if (action && source && source === Config.APP_SCHEMA) {
      const urlSplited = action.split('/');
      const diseaseId = urlSplited[1];
      const articleId = urlSplited[3];
      const {params} = route;

      if (articleId) {
        navigation.navigate('EducationDetail', {
          articleId: articleId,
          diseaseId: diseaseId,
          from: params?.from,
        });
      } else {
        navigation.navigate('EducationDisease', {
          diseaseId: diseaseId,
          from: params?.from,
        });
      }
    }
  }

  componentDidUpdate() {
    if (this.props.route?.params?.url) {
      this.handleLinking(this.props.route.params.url);
    }
    this.props.clearArticleDetail();
  }

  componentDidMount() {
    const {navigation, diseases, route} = this.props;
    this.props.fetchArticlesFromDiseases(diseases);

    this._unsubscribe = navigation.addListener('focus', () => {
      this.props.fetchArticlesFromDiseases(diseases);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {t, diseases, articles} = this.props;

    return (
      <Layout style={{flex: 1}}>
        <EducationList diseases={diseases} articles={articles} t={t} />
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  diseases: getDiseaseItems,
  articles: getEducationPreviewArticles,
});

const mapDispatchToProps = {
  fetchArticlesFromDiseases,
  clearArticleDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Education));

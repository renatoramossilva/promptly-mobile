import React, {Component} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
  fetchEducationArticles,
  fetchSections,
  setSelectedTab,
} from '../actions/articles';
import {
  getEducationArticles,
  getSections,
  getSelectedTab,
} from '../selectors/selected_education';
import {getDiseaseItems} from '../selectors/selected_diseases';
import LoadingScreen from 'components/common/LoadingScreen';
import TopTab from 'components/common/TopTab';
import EducationDiseaseList from 'components/education/Education.Disease.List';
import {NavigatorStyles} from '../navigation/Navigator.Styles';
import {clickEducationAllArticles} from '../actions/datacollection';

class EducationDisease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDiseaseId: this.props.route?.params?.diseaseId,
      selectedSectionIndex: 0,
    };
  }

  getAllArticles(selectedDisease) {
    const {fetchEducationArticlesFn, sections, articles} = this.props;
    const {education_urls: educationUrls} = selectedDisease;

    if (sections && !Object.keys(articles).length) {
      const promises = Object.values(sections).reduce(
        (p, section) => [
          ...p,
          fetchEducationArticlesFn(educationUrls.articles_endpoint, section.id),
        ],
        [],
      );
      Promise.all(promises);
    }
  }

  setSelectedSection(index) {
    this.setState({selectedSectionIndex: index});
  }

  getDiseasefromID(id) {
    return this.props.diseases.find(d => d.id == id);
  }

  componentDidMount() {
    const {
      navigation,
      fetchSectionsFn,
      onClickEducationAllArticles,
      route,
    } = this.props;
    const selectedDisease = this.getDiseasefromID(this.state.selectedDiseaseId);
    const {education_urls: educationUrls, disease} = selectedDisease;
    const {params} = route;

    navigation.setOptions({
      title: <Text style={NavigatorStyles.title}>{disease?.name}</Text>,
    });
    fetchSectionsFn(educationUrls.sections_endpoint);

    this._unsubscribe = navigation.addListener('focus', () => {
      fetchSectionsFn(educationUrls.sections_endpoint);
    });

    onClickEducationAllArticles({
      diseaseId: this.state.selectedDiseaseId,
      from: params?.from,
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate() {
    const selectedDisease = this.getDiseasefromID(this.state.selectedDiseaseId);
    this.getAllArticles(selectedDisease);
  }

  render() {
    const {articles, sections} = this.props;
    const selectedSectionId = Object.keys(sections)[
      this.state.selectedSectionIndex
    ];

    const selectedArticles = articles[selectedSectionId] || [];

    if (!Object.keys(articles).length || !Object.keys(sections).length) {
      return <LoadingScreen />;
    }

    return (
      <Layout style={{flex: 1}}>
        <TopTab
          items={sections}
          selectedIndex={this.state.selectedSectionIndex}
          onSelect={index => this.setSelectedSection(index)}
        />
        <EducationDiseaseList
          selectedArticles={selectedArticles}
          diseaseId={this.state.selectedDiseaseId}
        />
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articles: getEducationArticles,
  selectedTab: getSelectedTab,
  sections: getSections,
  diseases: getDiseaseItems,
});

const mapDispatchToProps = {
  fetchEducationArticlesFn: fetchEducationArticles,
  fetchSectionsFn: fetchSections,
  setSelectedTabFn: setSelectedTab,
  onClickEducationAllArticles: clickEducationAllArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationDisease);

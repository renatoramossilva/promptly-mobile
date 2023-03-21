import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Image, ScrollView, useWindowDimensions} from 'react-native';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import {EducationItemStyles, htmlStyles} from './Education.Styles';
import {moment} from 'utils/dates';
import {getRGBACode} from 'utils/color';
import TopTab from '../common/TopTab';
import HTML from 'react-native-render-html';
import {clickArticleQuickReference} from 'actions/datacollection';

const EducationItem = ({article, diseaseId, onClickArticleQuickReference}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const renderAuthors = (authors) => authors.map((a) => a.name).join(', ');
  const hasQuickReference =
    article && !!article.quick_reference && article.quick_reference.length > 0;

  const sections = [
    {id: 'article', title: t('Article'), content: article.body},
    {
      id: 'quick-reference',
      title: t('Quick reference'),
      content: article?.quick_reference[0]?.value,
    },
  ];

  const contentWidth = useWindowDimensions().width;

  return (
    <ScrollView style={EducationItemStyles.scrollContainer}>
      <Layout style={EducationItemStyles.headerContainer}>
        <Image
          source={{uri: article.headerImage}}
          style={EducationItemStyles.image}
          testID="EducationItemImage"
        />
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
              testID="EducationItemTitle">
              {article.title}
            </Text>
            <Layout style={EducationItemStyles.author}>
              <Image
                source={{uri: article.author.logo}}
                style={EducationItemStyles.logo}
              />
              <Text style={EducationItemStyles.name}>
                {t('Written by {{authors}} on {{date}}', {
                  authors: renderAuthors(article.authors),
                  date: moment(article.date_published).format('L'),
                })}
              </Text>
            </Layout>
          </Layout>
        </LinearGradient>
      </Layout>
      {hasQuickReference && (
        <TopTab
          items={sections}
          selectedIndex={activeSection}
          onSelect={(index) => {
            if (sections[index].id === 'quick-reference') {
              onClickArticleQuickReference({
                articleId: article.id,
                diseaseId: diseaseId,
              });
            }
            setActiveSection(index);
          }}
        />
      )}
      {sections[activeSection].content && (
        <Layout
          style={EducationItemStyles.htmlContainer}
          testID="EducationItemDescription">
          <HTML
            source={{html: sections[activeSection].content}}
            contentWidth={contentWidth}
            tagsStyles={htmlStyles(theme, contentWidth)}
            listsPrefixesRenderers={{
              ul: () => {
                return (
                  <Text
                    style={[
                      EducationItemStyles.htmlUl,
                      {color: theme['color-primary-500']},
                    ]}>
                    •
                  </Text>
                );
              },
            }}
          />
        </Layout>
      )}
    </ScrollView>
  );
};

const mapDispatchToProps = {
  onClickArticleQuickReference: clickArticleQuickReference,
};

export default connect(null, mapDispatchToProps)(EducationItem);

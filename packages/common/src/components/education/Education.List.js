import React from 'react';
import {useTranslation} from 'react-i18next';
import {Layout, useTheme} from '@ui-kitten/components';
import {ScrollView} from 'react-native';
import StatusBanner from '../common/StatusBanner';
import {EducationStyles} from './Education.Styles';
import EducationListPreview from './Education.List.Preview';
import LoadingScreen from '../common/LoadingScreen';

const EducationList = ({diseases, articles}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const noDiseases = {
    image: require('../../images/education.png'),
    title: t('Nothing to read yet!'),
    subtitle: t(
      'We are working in content to help you with your medical conditions.',
    ),
  };

  const {loading, data} = articles;

  if (loading) {
    return <LoadingScreen />;
  }

  if (!diseases || !diseases.length || !data || !Object.keys(data).length) {
    return (
      <StatusBanner
        status={noDiseases}
        style={EducationStyles.noDiseasesBanner}
        innerStyles={{
          textContainer: EducationStyles.noDiseasestextContainer,
          title: EducationStyles.noDiseasestitle,
          subtitle: EducationStyles.noDiseasessubtitle,
        }}
      />
    );
  }

  const illustration = {
    image: require('../../images/education.png'),
    title: t('Improve your health'),
    subtitle: t('Learn more about your medical conditions.'),
  };

  return (
    <ScrollView>
      <StatusBanner
        status={illustration}
        innerStyles={{
          textContainer: EducationStyles.illustration,
          title: EducationStyles.title,
          subtitle: [
            EducationStyles.subTitle,
            {color: theme['color-basic-200']},
          ],
        }}
        style={EducationStyles.statusBanner}
      />
      <Layout style={EducationStyles.listHolder}>
        {diseases.map(disease => (
          <EducationListPreview
            key={disease.id}
            disease={disease}
            articles={data[disease.id] || []}
          />
        ))}
      </Layout>
    </ScrollView>
  );
};

export default EducationList;

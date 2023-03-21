import React from 'react';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {TreatmentEventsTimelineStyles} from './TreatmentEventsTimeline.Styles';
import TreatmentEventsTimelineItem from './TreatmentEventsTimeline.Item';
import {useTranslation} from 'react-i18next';

const verifyLaterality = (options) => {
  const lateralitySet = new Set();
  options.map((item) => lateralitySet.add(item.laterality));
  return lateralitySet.size > 1 ? true : false;
};

const TreatmentEventsTimeline = ({options}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const hasLaterality = verifyLaterality(options);

  return (
    <Layout style={TreatmentEventsTimelineStyles.container}>
      {hasLaterality && (
        <Layout
          style={TreatmentEventsTimelineStyles.header}
          testID="lateralityHeader">
          <Layout style={TreatmentEventsTimelineStyles.titleContainer}>
            <Text
              style={[
                TreatmentEventsTimelineStyles.title,
                {color: theme['color-info-500']},
              ]}>
              {t('Left')}
            </Text>
          </Layout>
          <Layout style={TreatmentEventsTimelineStyles.titleContainer}>
            <Text
              style={[
                TreatmentEventsTimelineStyles.title,
                {color: theme['color-info-500']},
              ]}>
              {t('Right')}
            </Text>
          </Layout>
        </Layout>
      )}
      <Layout testID="treatmentEventsTimelineContainer">
        {options.map((item, index) => (
          <TreatmentEventsTimelineItem
            item={item}
            index={index}
            length={options.length}
            key={item.id}
            hasLaterality={hasLaterality}
          />
        ))}
      </Layout>
    </Layout>
  );
};

export default TreatmentEventsTimeline;

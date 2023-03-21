import React from 'react';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {moment} from 'utils/dates';
import {getLatToString} from '../../utils';
import {TreatmentEventsTimelineItemStyles} from './TreatmentEventsTimeline.Styles';
import TreatmentEventsTimelineItemIcon from './TreatmentEventsTimeline.Item.Icon';

const TreatmentEventsTimelineItem = ({item, index, length, hasLaterality}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  const isFirst = index === 0;
  const isLast = index === length - 1;

  return (
    <Layout>
      <Layout
        style={[
          TreatmentEventsTimelineItemStyles.line,
          isFirst && TreatmentEventsTimelineItemStyles.lineFirst,
          isLast && TreatmentEventsTimelineItemStyles.lineLast,
          isLast &&
            hasLaterality &&
            TreatmentEventsTimelineItemStyles.lateralityLineLast,
          hasLaterality && TreatmentEventsTimelineItemStyles.lateralityLine,
          {backgroundColor: theme['promptly-blue-400']},
        ]}
      />
      <Layout
        style={[
          TreatmentEventsTimelineItemStyles.iconContainer,
          hasLaterality &&
            TreatmentEventsTimelineItemStyles.lateralityIconContainer,
          item.laterality &&
            TreatmentEventsTimelineItemStyles[
              `${item.laterality}IconContainer`
            ],
        ]}>
        <TreatmentEventsTimelineItemIcon item={item} />
      </Layout>
      <Layout
        testID="container"
        style={[
          TreatmentEventsTimelineItemStyles.container,
          hasLaterality &&
            TreatmentEventsTimelineItemStyles.lateralityContainer,
          item.laterality &&
            TreatmentEventsTimelineItemStyles[`${item.laterality}Container`],
        ]}>
        <Layout
          style={[
            TreatmentEventsTimelineItemStyles.triangle,
            hasLaterality &&
              TreatmentEventsTimelineItemStyles.lateralityTriangle,
            item.laterality &&
              TreatmentEventsTimelineItemStyles[`${item.laterality}Triangle`],
          ]}
        />
        <Text
          style={[
            TreatmentEventsTimelineItemStyles.title,
            {color: theme['color-basic-300']},
          ]}
          testID="title">
          {item.title}
          {item.laterality === 'both' &&
            ` - ${t(getLatToString(item.laterality))}`}
        </Text>
        <Text
          style={[
            TreatmentEventsTimelineItemStyles.date,
            {color: theme['color-basic-300']},
          ]}
          testID="date">
          {moment(item.date).format('L')}
        </Text>
      </Layout>
    </Layout>
  );
};

export default TreatmentEventsTimelineItem;

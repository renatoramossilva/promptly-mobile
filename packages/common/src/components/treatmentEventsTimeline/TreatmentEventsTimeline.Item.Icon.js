import React from 'react';
import {useTheme} from '@ui-kitten/components';
import PromptlyIcon from '../common/PromptlyIcon';
import CircleIcon from '../common/CircleIcon';
import {TreatmentEventsTimelineItemStyles} from './TreatmentEventsTimeline.Styles';

const TreatmentEventsTimelineItemIcon = ({item}) => {
  const theme = useTheme();
  const exceptionIcons = ['disease-creation'];

  return item.extraAttrs && exceptionIcons.includes(item.extraAttrs.uid) ? (
    <CircleIcon />
  ) : (
    <PromptlyIcon
      testID="promptlyIcon"
      name={item.icon}
      style={[
        TreatmentEventsTimelineItemStyles.icon,
        {color: theme['promptly-blue-400']},
      ]}
    />
  );
};
export default TreatmentEventsTimelineItemIcon;

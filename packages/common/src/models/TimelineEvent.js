import {get} from 'lodash';

const iconClass = {
  event: 'careplan',
  exam: 'icon-exam',
  assessment: {
    patient: 'icon-prom',
    clinician: 'careplan',
  },
  treatment: 'icon-surgery',
};

const getIcon = (data) => {
  if (data.source === 'assessment') {
    const {extra_args: args} = data;
    if (get(args, 'assessment_source')) {
      return iconClass[data.source][args.assessment_source];
    }
    return '';
  }
  return iconClass[data.source] || '';
};

class TimelineEvent {
  constructor(data) {
    this.id = data.id && data.id !== '' ? data.id : `${Math.random()}`;
    this.icon = getIcon(data);
    this.laterality = data.extra_args.laterality || '';
    this.title = data.title;
    this.date = data.date;
    this.source = data.source;
    this.extraAttrs = {...data.extra_args};
    this.links = {...data.links};
    this.form = data.extra_args.form || [];
    this.status = data.extra_args.status || undefined;
  }
}

export default TimelineEvent;

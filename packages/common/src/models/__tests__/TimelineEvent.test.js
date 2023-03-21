import TimelineEvent from '../TimelineEvent';
const t = (val) => val;

const data = {
  id: 1,
  title: 'Pré-operatório',
  date: '2021-05-27',
  source: 'assessment',
  extra_args: {
    status: 'uncompleted',
    laterality: 'right',
    assessment_source: 'clinician',
  },
  links: {
    webapp_uri:
      'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/11',
  },
};

describe('Test EventTimeline model', () => {
  it('Should return correct timeline event format', () => {
    const event = new TimelineEvent(data, t);

    const expected = {
      id: 1,
      icon: 'careplan',
      laterality: 'right',
      title: 'Pré-operatório',
      date: '2021-05-27',
      source: 'assessment',
      extraAttrs: {
        status: 'uncompleted',
        laterality: 'right',
        assessment_source: 'clinician',
      },
      links: {
        webapp_uri:
          'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/11',
      },
      form: [],
      status: 'uncompleted',
    };

    expect(event).toEqual(expected);
  });
});

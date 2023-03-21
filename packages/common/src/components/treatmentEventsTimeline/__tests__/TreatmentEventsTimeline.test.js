import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import TreatmentEventsTimeline from '../TreatmentEventsTimeline';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const options = [
  {
    id: '0.09988376333820703',
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
  },
  {
    id: '0.32723286252948625',
    icon: 'careplan',
    laterality: 'left',
    title: 'Pré-operatório',
    date: '2021-05-27',
    source: 'assessment',
    extraAttrs: {
      status: 'uncompleted',
      laterality: 'left',
      assessment_source: 'clinician',
    },
    links: {
      webapp_uri:
        'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/14',
    },
    form: [],
    status: 'uncompleted',
  },
  {
    id: '0.9550028732906477',
    icon: 'careplan',
    laterality: 'both',
    title: 'Pré-operatório',
    date: '2021-05-27',
    source: 'assessment',
    extraAttrs: {
      status: 'uncompleted',
      laterality: 'both',
      assessment_source: 'clinician',
    },
    links: {
      webapp_uri:
        'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/17',
    },
    form: [],
    status: 'uncompleted',
  },
  {
    id: '0.9268702617729643',
    icon: 'careplan',
    laterality: '',
    title: 'Início de seguimento',
    date: '2021-05-27',
    source: 'event',
    extraAttrs: {
      laterality: null,
      form: '',
      uid: 'disease-creation',
    },
    links: {
      edit_url: {
        verb: 'patch',
        url:
          'https://127.0.0.1:8000/api/patients/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/diseases/3/events/3',
      },
    },
    form: [],
  },
];

describe('Test TreatmentEventsTimelineItem component', () => {
  it('Should render laterality header', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimeline options={options} />
      </ApplicationProvider>,
    );
    const element = getByTestId('lateralityHeader');

    expect(element).toBeTruthy();
  });

  it('Should render correct number of events', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimeline options={options} />
      </ApplicationProvider>,
    );
    const element = getByTestId('treatmentEventsTimelineContainer');
    expect(element.props.children.length).toBe(options.length);
  });
});

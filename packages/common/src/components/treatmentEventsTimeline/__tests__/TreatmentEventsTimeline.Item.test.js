import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import TreatmentEventsTimelineItem from '../TreatmentEventsTimeline.Item';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const item = {
  id: '0.30677399468153665',
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
      'promptly://institution/cuf-descobertas/patient/71a82e4e-eaf6-4f2f-bfc7-24f3f39cd80c/pdisease/3/assessment/11',
  },
  form: [],
  status: 'uncompleted',
};

describe('Test TreatmentEventsTimelineItem component', () => {
  it('Should render correct title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimelineItem
          item={item}
          index="3"
          length="4"
          hasLaterality
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('title');

    expect(element.props.children[0]).toBe(item.title);
    expect(element.props.children[1]).toBe(false);
  });

  it('Should render correct laterality - Left', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimelineItem
          item={item}
          index="3"
          length="4"
          hasLaterality
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('container');
    expect(element.props.style[1][2]).toMatchObject({left: 0});
  });

  it('Should render correct laterality - Right', () => {
    item.laterality = 'right';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimelineItem
          item={item}
          index="3"
          length="4"
          hasLaterality
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('container');
    expect(element.props.style[1][2]).toMatchObject({left: 375});
  });

  it('Should render correct laterality - Both', () => {
    item.laterality = 'both';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimelineItem
          item={item}
          index="3"
          length="4"
          hasLaterality
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('container');
    expect(element.props.style[1][1]).toMatchObject({left: '25%'});
    const title = getByTestId('title');
    expect(title.props.children[1]).toBe(' - Both');
  });

  it('Should render correct CircleIcon', () => {
    item.extraAttrs.uid = 'disease-creation';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <TreatmentEventsTimelineItem
          item={item}
          index="3"
          length="4"
          hasLaterality
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('CircleIcon');
    expect(element).toBeTruthy();
  });
});

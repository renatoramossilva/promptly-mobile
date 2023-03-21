import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ResumeChartLabelHolder from '../ResumeChart.LabelHolder';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const entries = [
  {label: 'average', color: 'red'},
  {label: 'score', color: 'green'},
];

describe('Test ResumeChartLabelHolder component', () => {
  it('Should render two items', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ResumeChartLabelHolder entries={entries} />
      </ApplicationProvider>,
    );
    const elements = queryByTestId('CircleLabelHolderItems');

    expect(elements.props.children.length).toBe(2);
  });
  it('Should render no items', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ResumeChartLabelHolder entries={[]} />
      </ApplicationProvider>,
    );
    const elements = queryByTestId('CircleLabelHolderItems');

    expect(elements.props.children.length).toBe(0);
  });
});

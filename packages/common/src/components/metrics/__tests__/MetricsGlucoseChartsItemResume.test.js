import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsGlucoseChartsItemResume from '../Metrics.Glucose.Charts.Item.Resume';

const item = {
  count: 10,
  avg: 132,
  unit: 'mg/dl',
};

jest.useFakeTimers();

describe('Test MetricsGlucoseChartsLegendModal component', () => {
  it('Should render correct title', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsItemResume item={item} />
      </ApplicationProvider>,
    );
    const count = queryByTestId('MetricsGlucoseChartsItemResumeCount');
    expect(count.props.children).toBe(item.count);

    const avg = queryByTestId('MetricsGlucoseChartsItemResumeAverage');
    expect(avg.props.children[0]).toBe(item.avg);
    expect(avg.props.children[2]).toBe(item.unit);
  });
});

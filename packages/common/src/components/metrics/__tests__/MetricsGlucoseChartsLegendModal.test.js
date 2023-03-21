import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsGlucoseChartsLegendModal from '../Metrics.Glucose.Charts.Legend.Modal';

const legendModal = {
  title: 'Normal range values',
  content: [
    {
      value: '131 - 140 mg/dl',
      label: 'Fasting',
    },
    {
      value: '181 - 200 mg/dl',
      label: 'After meal',
    },
    {
      value: '131 - 180 mg/dl',
      label: 'Before meal',
    },
  ],
};

jest.useFakeTimers();

describe('Test MetricsGlucoseChartsLegendModal component', () => {
  it('Should render correct title', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsLegendModal legendModal={legendModal} />
      </ApplicationProvider>,
    );
    const title = queryByTestId('MetricsGlucoseChartsLegendModalTitle');
    expect(title.props.children).toBe(legendModal.title);
  });

  it('Should render correct amount of items', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsLegendModal legendModal={legendModal} />
      </ApplicationProvider>,
    );

    const items = queryAllByTestId('MetricsGlucoseChartsLegendModalItem');
    expect(items.length).toBe(3);
  });

  it('Should render correct item values', () => {
    const {queryAllByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsGlucoseChartsLegendModal legendModal={legendModal} />
      </ApplicationProvider>,
    );

    const values = queryAllByTestId('MetricsGlucoseChartsLegendModalItemValue');
    expect(values[0].props.children).toBe('131 - 140 mg/dl');

    const labels = queryAllByTestId('MetricsGlucoseChartsLegendModalItemLabel');
    expect(labels[0].props.children).toBe('Fasting');
  });
});

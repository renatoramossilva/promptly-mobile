import '../../../__mocks__/global';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import MetricsResumeItem from '../Metrics.Resume.Item';
import {glucoseMetrics} from '../../../__mocks__/metrics';

jest.useFakeTimers();

const mockedOnPressAddFn = jest.fn();

const metric1 = glucoseMetrics[0];
const metric2 = glucoseMetrics[1];

describe('Test MetricsResumeItem component', () => {
  it('Should render correct title and no label', () => {
    const {getByTestId, queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsResumeItem item={metric1} onPressAdd={mockedOnPressAddFn} />
      </ApplicationProvider>,
    );
    const title = getByTestId('MetricsResumeItemTitle');
    expect(title.props.children).toBe(metric1.title);
    const label = queryByTestId('MetricsResumeItemLabel');
    expect(label).toBeNull();
  });

  it('Should render Add button and call onPressAdd once', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsResumeItem item={metric1} onPressAdd={mockedOnPressAddFn} />
      </ApplicationProvider>,
    );

    const addMeasurement = queryByTestId('MetricsResumeItemAddMeasurement');
    expect(addMeasurement).not.toBeNull();
    expect(mockedOnPressAddFn).toHaveBeenCalledTimes(0);
    fireEvent.press(addMeasurement);
    expect(mockedOnPressAddFn).toHaveBeenCalledTimes(1);
  });

  it('Should render correct title', () => {
    metric1.label = 'testing label';
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsResumeItem item={metric1} onPressAdd={mockedOnPressAddFn} />
      </ApplicationProvider>,
    );
    const label = getByTestId('MetricsResumeItemLabel');
    expect(label.props.children).toBe(metric1.label);
  });

  it('Should NOTrender waiting for data', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsResumeItem item={metric1} onPressAdd={mockedOnPressAddFn} />
      </ApplicationProvider>,
    );
    const waiting = queryByTestId('MetricsResumeItemWaiting');
    expect(waiting).toBeNull();
  });

  it('Should render waiting for data', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <MetricsResumeItem item={metric2} onPressAdd={mockedOnPressAddFn} />
      </ApplicationProvider>,
    );
    const waiting = queryByTestId('MetricsResumeItemWaiting');
    expect(waiting).not.toBeNull();
  });
});

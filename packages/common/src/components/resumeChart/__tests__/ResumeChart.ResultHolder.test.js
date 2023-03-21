import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import ResumeChartResultHolder from '../ResumeChart.ResultHolder';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';

jest.useFakeTimers();

const lastScore = {
  id: 2,
  serverdate: '2021-07-08T15:15:20.465937Z',
  prom_key: 'PAID',
  score: 91.25,
  range_description: '',
  isInvalidScore: false,
  percentage: 9,
  date: '08/07/2021',
  scale: {
    min: 0,
    max: 100,
  },
  comparative: {
    score: 53.75,
    percentage: 46.25,
  },
  literature_average: 10,
};

const graphHeight = 400;

describe('Test ResumeChartResultHolder component', () => {
  it('Should render default ResumeChartResultHolder', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ResumeChartResultHolder
          lastScore={lastScore}
          label={'Your assessment score'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('ResumeChartResultHolder');
    expect(element.props.style[1].bottom).toBe(180);
    const value1 = getByTestId('ResumeChartResultHolderScore1');
    expect(value1.props.children).toBe(lastScore.percentage);
    const value2 = getByTestId('ResumeChartResultHolderScore2');
    expect(value2.props.children).toStrictEqual(['/', 100]);
  });

  it('Should render ResumeChartResultHolder with values', () => {
    lastScore.scale.percentage = 300;
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <ResumeChartResultHolder
          graphHeight={graphHeight}
          lastScore={lastScore}
          label={'Your assessment score'}
        />
      </ApplicationProvider>,
    );
    const element = getByTestId('ResumeChartResultHolder');
    expect(element.props.style[1].bottom).toBe(graphHeight - 20);
    const value1 = getByTestId('ResumeChartResultHolderScore1');
    expect(value1.props.children).toBe(lastScore.percentage);
    const value2 = getByTestId('ResumeChartResultHolderScore2');
    expect(value2.props.children).toStrictEqual(['/', 300]);
  });
});

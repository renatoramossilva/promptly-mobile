import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import DashboardCoaHistoryItem from '../Dashboard.Coa.History.Item';

jest.useFakeTimers();

const score = {
  percentage: 20,
  date: '18/07/2020',
  scale: {
    percentage: 130,
  },
};

describe('Test DashboardCoaHistoryItem component', () => {
  it('Should render DashboardCoaHistoryItem correct date and score', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaHistoryItem score={score} />
      </ApplicationProvider>,
    );
    const itemDate = getByTestId('historyItemDate');
    expect(itemDate.props.children).toStrictEqual(score.date);
    const itemScore = getByTestId('historyItemScore');
    expect(itemScore.props.children[0].props.children).toStrictEqual(
      score.percentage,
    );
    expect(itemScore.props.children[1].props.children[1]).toStrictEqual(
      score.scale.percentage,
    );
  });

  it('Should render DashboardCoaHistoryItem correct date and default score max', () => {
    score.scale.percentage = undefined;
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaHistoryItem score={score} />
      </ApplicationProvider>,
    );
    const itemDate = getByTestId('historyItemDate');
    expect(itemDate.props.children).toStrictEqual(score.date);
    const itemScore = getByTestId('historyItemScore');
    expect(itemScore.props.children[0].props.children).toStrictEqual(
      score.percentage,
    );
    expect(itemScore.props.children[1].props.children[1]).toStrictEqual(100);
  });
});

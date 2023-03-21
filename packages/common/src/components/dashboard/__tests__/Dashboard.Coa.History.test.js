import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import DashboardCoaHistory from '../Dashboard.Coa.History';

jest.useFakeTimers();

const scores = [
  {
    id: 4,
    percentage: 20,
    date: '18/07/2020',
    scale: {
      percentage: 130,
    },
  },
];

describe('Test DashboardCoaHistoryItem component', () => {
  it('Should render DashboardCoaHistory results', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaHistory scores={scores} />
      </ApplicationProvider>,
    );
    const results = queryByTestId('dashboardCoaHistoryResults');
    expect(results).toBeTruthy();
  });

  it('Should render DashboardCoaHistory no results', () => {
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaHistory />
      </ApplicationProvider>,
    );
    const results = queryByTestId('dashboardCoaHistoryResults');
    expect(results).toBeNull();
  });
});

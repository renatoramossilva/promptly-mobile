import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {START_STATE} from '../../../__mocks__/diseases';
import DashboardCoaCardList from '../Dashboard.CoaCard.List';

jest.useFakeTimers();

describe('Test DashboardCoaCardList component', () => {
  it('Should render 2 DashboardCoaCard s', () => {
    const diseases = START_STATE;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaCardList diseases={diseases} />
      </ApplicationProvider>,
    );
    const evaluationCards = queryByTestId('dashboardCoaCardList');
    expect(evaluationCards.props.children.length).toBe(2);
  });
  it('Should render 1 DashboardCoaCard s', () => {
    const diseases = START_STATE.splice(-1, 1);
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaCardList diseases={diseases} />
      </ApplicationProvider>,
    );
    const evaluationCards = queryByTestId('dashboardCoaCardList');
    expect(evaluationCards.props.children.length).toBe(1);
  });
});

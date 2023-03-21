import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import DashboardCoaReview from '../Dashboard.Coa.Review';

jest.useFakeTimers();

const selectedCoa = {
  name: 'teste',
  scores: [
    {
      percentage: 20,
      scale: {
        percentage: 100,
      },
    },
  ],
};

describe('Test DashboardCoaReview component', () => {
  it('Should render 2 DashboardCoaCard s', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaReview
          coa={selectedCoa}
          avgLabel={'Average'}
          scoreLabel={'Your score'}
        />
      </ApplicationProvider>,
    );
    const title = getByTestId('DashboardCoaReviewTitle');
    expect(title.props.children).toStrictEqual('teste');
  });
  it('Should render invalid scores screen', () => {
    selectedCoa.scores[0].percentage = null;
    const {queryByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <DashboardCoaReview
          coa={selectedCoa}
          avgLabel={'Average'}
          scoreLabel={'Your score'}
        />
      </ApplicationProvider>,
    );
    expect(queryByTestId('resumeChartInvalidScore')).toBeTruthy();
  });
});

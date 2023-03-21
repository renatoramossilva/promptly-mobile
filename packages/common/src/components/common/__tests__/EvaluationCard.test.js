import '../../../__mocks__/global';
import React from 'react';
import {render} from '@testing-library/react-native';
import EvaluationCard from '../EvaluationCard';
import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light} from '@eva-design/eva';
import {selectedDisease} from '../../../__mocks__/diseases';
import {getDiseasePromScore} from 'utils/diseases';

jest.useFakeTimers();

const diseasePromScore = getDiseasePromScore(selectedDisease);

describe('Test EvaluationCard component', () => {
  it('Should render correct second title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EvaluationCard
          handleClick={() => {}}
          key={selectedDisease.id}
          data={Object.keys(diseasePromScore).length ? [diseasePromScore] : []}
          lastScoreText={'Last assessment score'}
          fistScoreText={'Do your first assessment'}
          btnText={'Do a new assessment now'}
          showButton={false}
          fullWidth
        />
      </ApplicationProvider>,
    );
    const title = getByTestId('secondTitle');
    expect(title.props.children).toBe('Last assessment score');
  });

  it('Should render correct title', () => {
    const {getByTestId} = render(
      <ApplicationProvider mapping={mapping} theme={light}>
        <EvaluationCard
          title={'Evaluation Card'}
          handleClick={() => {}}
          key={selectedDisease.id}
          data={Object.keys(diseasePromScore).length ? [diseasePromScore] : []}
          lastScoreText={'Last assessment score'}
          fistScoreText={'Do your first assessment'}
          btnText={'Do a new assessment now'}
          showButton={false}
          fullWidth
        />
      </ApplicationProvider>,
    );
    const title = getByTestId('firstTitle');
    expect(title.props.children).toBe('Evaluation Card');
  });
});

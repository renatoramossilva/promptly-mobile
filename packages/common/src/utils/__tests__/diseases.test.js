import {getDiseasePromScore} from 'utils/diseases';

test('getDiseasePromScore', () => {
  expect(
    getDiseasePromScore({
      scores: [],
    }),
  ).toEqual({});

  expect(
    getDiseasePromScore({
      scores: [{id: 1}, {id: 2}],
    }),
  ).toEqual({id: 1});
});

import {moment} from 'utils/dates';
import {Score, PatientScore} from '../Score';
const DATE_TEST = moment('1970-01-01');
const mockScore = {
  id: 'test',
  date: DATE_TEST,
  percentage: 100,
  prom_key: 'test_prom_key',
  score: 60,
  range_description: undefined,
  scale: {
    min: 0,
    max: 100,
    percentage: 60,
  },
  comparative: {
    percentage: 100,
    score: 60,
  },
};

const mockPatientScore = {
  name: 'Zé',
  uid: '1l3k2m3l21km3',
  short_description: 'just a simple short description',
  description: 'long description',
  avg: '24',
  is_generic: 0,
  scores: [mockScore],
};

describe('Test Score model', () => {
  it('Should return Score data', () => {
    const score = Score(mockScore);

    expect(score).toEqual({
      ...mockScore,
      date: moment(DATE_TEST).format('L'),
      serverdate: DATE_TEST,
      assessment: undefined,
      title: undefined,
      disease: undefined,
      isInvalidScore: false,
    });
  });

  it('Should return Score data with null percentage', () => {
    mockScore.percentage = null;
    const score = Score(mockScore);

    expect(score).toEqual({
      ...mockScore,
      percentage: null,
      date: moment(DATE_TEST).format('L'),
      serverdate: DATE_TEST,
      assessment: undefined,
      title: undefined,
      disease: undefined,
      isInvalidScore: true,
    });
  });

  it('Should return PatientScore data', () => {
    const patientScore = PatientScore(mockPatientScore);

    expect(patientScore).toEqual({
      name: mockPatientScore.name,
      uid: mockPatientScore.uid,
      short_description: mockPatientScore.short_description,
      description: mockPatientScore.description,
      avg: mockPatientScore.avg,
      is_generic: mockPatientScore.is_generic,
      scores: mockPatientScore.scores.map((s) => new Score(s)),
    });
  });
});

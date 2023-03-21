import {moment} from '../utils/dates';

export const Score = (data) => {
  const date = data.date && moment(data.date).format('L');
  return {
    id: data.id,
    title: data.title,
    serverdate: data.date,
    prom_key: data.prom_key,
    score: data.score,
    range_description: data.range_description,
    disease: data.disease,
    assessment: data.assessment,
    isInvalidScore: data.percentage === null,
    percentage:
      data.percentage !== null ? Number(data.percentage.toFixed(0)) : null,
    date,
    scale: {
      min: data.scale.min,
      max: data.scale.max,
      percentage: data.scale.percentage,
    },
    comparative: {
      score: data.comparative.score,
      percentage: data.comparative.percentage,
    },
    literature_average: data.literature_average,
  };
};

export const PatientScore = (data) => {
  return {
    name: data.name,
    uid: data.uid,
    short_description: data.short_description,
    description: data.description,
    avg: data.avg,
    is_generic: data.is_generic,
    scores: data.scores.map((s) => new Score(s)),
  };
};

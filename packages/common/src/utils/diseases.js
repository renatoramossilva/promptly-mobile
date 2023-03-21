export const getDiseasePromScore = (disease) => {
  if (
    disease.scores &&
    Array.isArray(disease.scores) &&
    disease.scores.length > 0
  ) {
    return disease.scores[0];
  }
  return {};
};

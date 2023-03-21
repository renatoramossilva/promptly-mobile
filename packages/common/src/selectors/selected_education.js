import {createSelector} from 'reselect';

export const getEducationData = (state) => state.education || {};

export const getEducationPreviewArticles = createSelector(
  [getEducationData],
  (education) => education.previewArticles || {},
);

export const getEducationArticle = createSelector(
  [getEducationData],
  (education) => education.article || {},
);

export const getEducationArticles = createSelector(
  [getEducationData],
  (education) => education.articles || {},
);

export const getSelectedTab = createSelector(
  [getEducationData],
  (education) => education.tab,
);

export const getSections = createSelector(
  [getEducationData],
  (education) => education.sections,
);

export const getRecommendedArticles = createSelector(
  [getEducationData],
  (education) => education.recommended,
);

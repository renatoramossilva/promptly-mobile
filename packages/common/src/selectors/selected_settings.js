import {createSelector} from 'reselect';
import _ from 'lodash';

export const getSettings = (state) => state.settings;

export const getRegionalSettings = createSelector(
  [getSettings],
  (settings) => settings.regional,
);

export const getLanguageOptions = createSelector(
  [getSettings],
  (settings) => settings.languageOptions,
);

export const getLanguage = createSelector(
  [getRegionalSettings],
  (regional) => regional.language,
);

export const getTimeZone = createSelector(
  [getRegionalSettings],
  (regional) => regional.timeZone,
);

export const getClinicalTrials = createSelector([getSettings], (settings) => {
  const groupedItems = _(settings.clinicalTrials)
    .groupBy((item) => item.patient_disease.disease.name)
    .map((value, key) => ({category: key, items: value}))
    .value();
  return groupedItems;
});

export const getUnagreedClinicalTrials = createSelector(
  [getSettings],
  (settings) => {
    return settings.clinicalTrials
      ? settings.clinicalTrials.filter((items) => {
          return !items.agreed;
        })
      : [];
  },
);

import {createSelector} from 'reselect';

const defaultList = [];

export const getEntitiesInsurances = (state) =>
  state.entities.insurances.items || defaultList;

export const getInsuranceOptions = createSelector(
  [getEntitiesInsurances],
  (insurances) =>
    insurances.map((i) => ({
      label: i.name,
      value: i.id,
      key: i.id,
    })),
);

export const getNationalities = (state) => state.entities.nationalities || [];

export const getCountries = (state) => state.entities.countries || [];

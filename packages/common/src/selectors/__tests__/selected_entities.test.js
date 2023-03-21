import * as entitiesSelectors from '../selected_entities';

describe('test entities selectors', () => {
  test('getInsuranceOptions', () => {
    expect(
      entitiesSelectors.getInsuranceOptions({
        entities: {insurances: {items: []}},
      }),
    ).toEqual([]);
  });

  test('getNationalities', () => {
    expect(
      entitiesSelectors.getNationalities({
        entities: {nationalities: []},
      }),
    ).toEqual([]);
  });

  test('getCountries', () => {
    expect(
      entitiesSelectors.getCountries({
        entities: {countries: []},
      }),
    ).toEqual([]);
  });
});

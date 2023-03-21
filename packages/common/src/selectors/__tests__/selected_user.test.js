import * as userSelectors from '../selected_user';

describe('test user selectors', () => {
  test('getUser', () => {
    expect(userSelectors.getUser({user: {name: 'Ze'}})).toEqual({
      name: 'Ze',
    });
  });

  test('getUserPrivateData', () => {
    expect(
      userSelectors.getUserPrivateData({
        user: {privateData: {gende: 'M'}, name: 'Ze'},
      }),
    ).toEqual({
      gende: 'M',
    });
    expect(userSelectors.getUserPrivateData({user: {name: 'Ze'}})).toEqual({});
  });

  test('getUserUpdateURL', () => {
    expect(
      userSelectors.getUserUpdateURL({
        user: {privateData: {gende: 'M'}, uuid: '123', name: 'Ze'},
      }),
    ).toBe('/users/123');
    expect(userSelectors.getUserUpdateURL({})).toBe('/users/undefined');
  });
});

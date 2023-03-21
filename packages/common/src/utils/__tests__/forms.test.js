import {
  INVALID_PERSONAL_FORM_DATA,
  VALID_PERSONAL_FORM_DATA,
} from '../../__mocks__/forms';
import {isPersonalFormValid} from '../forms';

describe('test forms utils', () => {
  it('validate correct personal data form', () => {
    expect(isPersonalFormValid(VALID_PERSONAL_FORM_DATA)).toEqual([true, {}]);
  });

  it('validate incorrect personal data form', () => {
    expect(isPersonalFormValid(INVALID_PERSONAL_FORM_DATA)).toEqual([
      false,
      {gender: 'This field is required', birthdate: 'This field is required'},
    ]);
  });
});

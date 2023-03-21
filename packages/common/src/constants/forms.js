import {makeTrans} from '../utils/translations';

export const RELATIONSHIP_ITEMS = [
  {label: makeTrans('Son/daughter'), value: '0'},
  {label: makeTrans('Husband'), value: '1'},
  {label: makeTrans('Wife'), value: '2'},
  {label: makeTrans('Close relative'), value: '3'},
  {label: makeTrans('Friend'), value: '4'},
  {label: makeTrans('Neighbor'), value: '5'},
  {label: makeTrans('Known'), value: '6'},
  {label: makeTrans('Other'), value: '7'},
  {label: makeTrans('No one'), value: '8'},
];

export const GENERAL_INFO_REQUIRED_FIELDS = ['name', 'birthdate', 'gender'];

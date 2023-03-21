import React from 'react';
import {Text} from '@ui-kitten/components';
import {moment} from 'utils/dates';
import {VerifiedDateStyles} from './VerifiedDate.Styles';

const VerifiedDate = ({date, t}) => {
  const getDate = () => {
    if (moment(date).isSame(moment(), 'day')) {
      return t('Today');
    } else if (moment(date).isSame(moment().subtract(1, 'days'), 'day')) {
      return t('Yesterday');
    }
    return moment(date).local().format('LL');
  };

  return <Text style={VerifiedDateStyles.title}>{getDate()}</Text>;
};

export default VerifiedDate;

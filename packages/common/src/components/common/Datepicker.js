import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  useTheme,
  Datepicker as UKDatepicker,
} from '@ui-kitten/components';
import {MomentDateService} from '@ui-kitten/moment';
import {moment} from 'utils/dates';
import i18n from '../../i18n';
import {DatePickerStyles} from './Datepicker.Styles';
import {PAST} from '../../utils/dates';

const Datepicker = ({
  label,
  fieldKey,
  value,
  onChange,
  labelStyle,
  containerStyle,
  noFutureDate,
}) => {
  const theme = useTheme();
  const [date, setDate] = useState(moment(value));
  const onDateChange = (newDate) => {
    setDate(newDate);
    onChange(newDate, fieldKey);
  };

  return (
    <Layout
      style={[DatePickerStyles.container, containerStyle]}
      testID="datePickerContainer">
      <Text
        style={[
          DatePickerStyles.label,
          {color: theme['color-basic-300']},
          labelStyle,
        ]}
        testID="datePickerLabel">
        {label}
      </Text>
      <UKDatepicker
        min={moment(PAST)}
        max={noFutureDate ? moment() : null}
        date={date}
        dateService={new MomentDateService(i18n.language)}
        onSelect={(newDate) => onDateChange(newDate)}
      />
    </Layout>
  );
};

Datepicker.defaultProps = {
  labelStyle: {},
  containerStyle: {},
  noFutureDate: false,
};

Datepicker.propTypes = {
  label: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  noFutureDate: PropTypes.bool,
};

export default Datepicker;

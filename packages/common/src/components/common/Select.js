import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  useTheme,
  Select as UKSelect,
  SelectItem,
} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {SelectStyles} from './Select.Styles';

const Select = ({
  label,
  fieldKey,
  value,
  options,
  onChange,
  labelStyle,
  placeholder,
  errorText,
}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Layout style={SelectStyles.container} testID="selectContainer">
      {!!label && (
        <Text
          style={[
            SelectStyles.label,
            {color: theme['color-basic-300']},
            labelStyle,
          ]}
          testID="selectLabel">
          {label}
        </Text>
      )}
      <UKSelect
        value={t(value)}
        onSelect={(index) => onChange(options[index.section].value, fieldKey)}
        placeholder={placeholder}>
        {options.map((option) => (
          <Layout testID="selectItem" key={option.value}>
            <SelectItem key={option.value} title={t(option.label)} />
          </Layout>
        ))}
      </UKSelect>
      {Boolean(errorText) && (
        <Text style={SelectStyles.errorText}>{errorText}</Text>
      )}
    </Layout>
  );
};

Select.defaultProps = {
  labelStyle: {},
  placeholder: '',
  label: undefined,
  fieldKey: '',
};

Select.propTypes = {
  label: PropTypes.string,
  fieldKey: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelStyle: PropTypes.object,
};

export default Select;

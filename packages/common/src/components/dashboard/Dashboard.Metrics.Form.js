import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {DashboardMetricFormStyles} from './Dashboard.Styles';
import {Layout, Text} from '@ui-kitten/components';
import DashboardGlucoseForm from './Dashboard.Glucose.Form';
import {TextInput} from 'react-native';
import LoadingIndicator from '../common/LoadingIndicator';
import Button from '../common/Button';
import {parseTextToNumber} from 'utils';

const DashboardMetricsForm = (props) => {
  const [answers, setAnswers] = useState({});
  const [errorText, setErrorText] = useState(undefined);
  const {isUpdate, onClickCategorizeMeasurement} = props;

  const handleClick = () => {
    if (!isUpdate) {
      const fields = props.form.fields.map((field) => ({
        ...field,
        value: answers[field.code],
      }));
      return Object.keys(answers).length < fields.length
        ? setErrorText(props.errorMessageTxt)
        : props.handleClick(fields, answers.measurement_at, answers.code);
    } else {
      return props.handleClick({}, answers.measurement_at, answers.code);
    }
  };

  return (
    <Layout
      style={DashboardMetricFormStyles.formHolder}
      testID="DashboardMetrisForm">
      {(props.title || props.subtitle) && (
        <>
          {props.title && (
            <Text
              category="h1"
              style={DashboardMetricFormStyles.title}
              testID="FormTitle">
              {props.title}
            </Text>
          )}
          {props.subtitle && (
            <Layout style={DashboardMetricFormStyles.subTextLabel}>
              <Text style={DashboardMetricFormStyles.subTitle}>
                {props.subtitle}
              </Text>
            </Layout>
          )}
        </>
      )}
      {!isUpdate &&
        props.form.fields
          .filter((f) => f.widget === 'text')
          .map((field) => (
            <Layout key={field.code} style={{marginBottom: 12}}>
              <Text style={DashboardMetricFormStyles.fieldText}>
                {props.t(field.name || props.defaultValueTxt)}
              </Text>
              <TextInput
                testID="DashboardMetricsFormInput"
                value={answers[field.code] || ''}
                onChangeText={(e) => {
                  const parsedValue = parseTextToNumber(e);
                  setAnswers({...answers, [field.code]: parsedValue});
                }}
                onFocus={() => setErrorText()}
                style={[
                  DashboardMetricFormStyles.textInput,
                  errorText && DashboardMetricFormStyles.textInputError,
                ]}
                keyboardType="numeric"
              />
              {errorText && <Text style={{color: 'red'}}>{errorText}</Text>}
            </Layout>
          ))}

      {(props.form.classifier || props.icons) && (
        <DashboardGlucoseForm
          handleSelect={(data) => {
            onClickCategorizeMeasurement();
            setAnswers({...answers, ...data});
          }}
          t={props.t}
          icons={!isUpdate ? props.form.classifier.icons : props.icons}
        />
      )}

      <Button
        accessoryLeft={props.disabledButton ? LoadingIndicator : null}
        disabled={props.disabledButton}
        size="giant"
        status="primary"
        onPress={handleClick}>
        {props.saveBtnTxt}
      </Button>
    </Layout>
  );
};

DashboardMetricsForm.defaultProps = {
  saveBtnTxt: 'Save measurement',
  defaultValueTxt: 'Value',
  errorMessageTxt: 'Please fill all values',
  title: undefined,
  subtitle: undefined,
  form: {},
  t: () => {},
  disabledButton: 0,
  onClickCategorizeMeasurement: () => {},
};

DashboardMetricsForm.propTypes = {
  saveBtnTxt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  errorMessageTxt: PropTypes.string,
  defaultValueTxt: PropTypes.string,
  form: PropTypes.object,
  t: PropTypes.func,
  handleClick: PropTypes.func.isRequired,
  disabledButton: PropTypes.bool,
  onClickCategorizeMeasurement: PropTypes.func,
};

export default DashboardMetricsForm;

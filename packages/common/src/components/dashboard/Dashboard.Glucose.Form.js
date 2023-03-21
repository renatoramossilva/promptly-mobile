import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {DashboardMetricFormStyles} from './Dashboard.Styles';
import {TouchableOpacity} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import PromptlyIcon from '../common/PromptlyIcon';

const GlucoseForm = (props) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(undefined);
  const {icons, t} = props;
  const isSelected = (key) => key === selected;

  return (
    <>
      <Layout style={DashboardMetricFormStyles.radioGroup} testID="GlucoseForm">
        {Object.keys(icons).map((key, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelected(key);
              props.handleSelect({code: key});
            }}
            style={[
              DashboardMetricFormStyles.radioContainer,
              {
                backgroundColor: isSelected(key)
                  ? theme['color-primary-500']
                  : 'white',
                borderRightWidth:
                  index === Object.keys(icons).length - 1 ? 0 : 3,
              },
            ]}
            testID="GlucoseIcons">
            <PromptlyIcon
              name={icons[key].icon}
              style={[
                DashboardMetricFormStyles.icon,
                {
                  color: !isSelected(key)
                    ? theme['color-primary-500']
                    : 'white',
                },
              ]}
            />
            <Text
              style={[
                DashboardMetricFormStyles.categorizeText,
                {
                  color: !isSelected(key) ? 'black' : 'white',
                },
              ]}>
              {t(icons[key].label)}
            </Text>
          </TouchableOpacity>
        ))}
      </Layout>
    </>
  );
};

GlucoseForm.propTypes = {
  icons: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default GlucoseForm;

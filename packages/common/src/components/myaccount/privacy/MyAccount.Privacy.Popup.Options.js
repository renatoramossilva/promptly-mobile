import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import PromptlyIcon from '../../common/PromptlyIcon';
import {MyAccountPrivacyPopupStyles} from '../MyAccount.Styles';

const MyAccountPrivacyPopUpOptions = ({t, handleSelect, agreed}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(agreed);
  const isSelected = (key) => key === selected;

  const icons = {
    active: {
      icon: 'check',
      label: t('Active'),
      response: true,
    },
    revoke: {
      icon: 'times',
      label: t('Revoke'),
      response: false,
    },
  };

  return (
    <Layout style={MyAccountPrivacyPopupStyles.radioGroup}>
      {Object.keys(icons).map((key, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelected(icons[key].response);
            handleSelect(icons[key].response);
          }}
          style={[
            MyAccountPrivacyPopupStyles.radioContainer,
            {
              backgroundColor: isSelected(icons[key].response)
                ? theme['color-primary-500']
                : 'white',
              borderRightWidth: index === Object.keys(icons).length - 1 ? 0 : 3,
            },
          ]}>
          <PromptlyIcon
            name={icons[key].icon}
            style={[
              MyAccountPrivacyPopupStyles.icon,
              {
                color: !isSelected(icons[key].response)
                  ? theme['color-primary-500']
                  : 'white',
              },
            ]}
          />
          <Text
            style={[
              MyAccountPrivacyPopupStyles.status,
              {
                color: !isSelected(icons[key].response) ? 'black' : 'white',
              },
            ]}>
            {t(icons[key].label)}
          </Text>
        </TouchableOpacity>
      ))}
    </Layout>
  );
};

MyAccountPrivacyPopUpOptions.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default MyAccountPrivacyPopUpOptions;

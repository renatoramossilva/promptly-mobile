import React from 'react';
import {Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {TabSelectorStyles} from './TabSelector.Styles';

const TabSelector = ({
  items,
  selectedIndex,
  onSelect,
  containerStyle,
  tabStyle,
  textStyle,
}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Layout
      style={[TabSelectorStyles.container, containerStyle]}
      testID="TabSelector">
      {Object.entries(items).map((item) => (
        <Pressable
          testID="TabSelectorItem"
          onPress={() => onSelect(item[1].id)}
          style={[
            TabSelectorStyles.tab,
            {
              backgroundColor:
                selectedIndex === item[1].id
                  ? theme['color-primary-700']
                  : theme['color-primary-400'],
            },
            tabStyle,
          ]}
          key={item[1].id}>
          <Text
            testID="TabSelectorItemTitle"
            category="h1"
            style={[TabSelectorStyles.text, textStyle]}>
            {t(item[1].title)}
          </Text>
        </Pressable>
      ))}
    </Layout>
  );
};

export default TabSelector;

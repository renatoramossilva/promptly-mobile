import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Text, Layout, useTheme} from '@ui-kitten/components';
import {TabBarStyles} from './TabBar.Styles';
import {useTranslation} from 'react-i18next';

const TopTab = ({onSelect, items, selectedIndex}) => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Layout style={TabBarStyles.container}>
      <ScrollView horizontal={true} style={TabBarStyles.scroll}>
        {Object.entries(items).map((item, key) => (
          <TouchableOpacity
            onPress={() => onSelect(key)}
            style={[
              TabBarStyles.tab,
              selectedIndex === key && {
                borderBottomColor: theme['color-primary-400'],
              },
            ]}
            key={key}>
            <Text
              category="h1"
              style={[
                TabBarStyles.text,
                {
                  color:
                    selectedIndex === key
                      ? theme['color-basic-900']
                      : theme['color-basic-300'],
                },
              ]}>
              {t(item[1].title)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Layout>
  );
};
export default TopTab;

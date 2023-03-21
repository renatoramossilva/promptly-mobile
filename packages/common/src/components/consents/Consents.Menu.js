import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {ConsentsMenuStyles} from './Consents.Styles';

const ConsentsMenu = ({
  unagreedClinicalTrials,
  selectConsent,
  activeConsentIndex,
}) => {
  const theme = useTheme();
  return unagreedClinicalTrials?.length > 0 ? (
    <ScrollView
      horizontal={true}
      style={ConsentsMenuStyles.container}
      testID="ConsentsMenu">
      <Layout
        style={[
          ConsentsMenuStyles.menuStripe,
          {
            backgroundColor: theme['color-info-500'],
          },
        ]}
      />
      <Layout style={ConsentsMenuStyles.menuContainer}>
        {unagreedClinicalTrials.map((item, i) => (
          <Layout
            style={ConsentsMenuStyles.itemContainer}
            key={item?.clinical_trial?.id}>
            <TouchableOpacity
              testID="ConsentsMenuItem"
              style={ConsentsMenuStyles.itemButton}
              onPress={() => selectConsent(i)}>
              <Layout
                style={[
                  ConsentsMenuStyles.itemNumberContainer,
                  {
                    backgroundColor:
                      i === activeConsentIndex
                        ? theme['promptly-blue-500']
                        : theme['color-info-500'],
                  },
                ]}>
                <Text style={ConsentsMenuStyles.itemNumber}>{i + 1}</Text>
              </Layout>
              {item.clinical_trial?.display ? (
                <Text
                  style={ConsentsMenuStyles.itemText}
                  testID="ConsentsMenuItemTitle">
                  {item.clinical_trial.display}
                </Text>
              ) : null}
            </TouchableOpacity>
          </Layout>
        ))}
      </Layout>
    </ScrollView>
  ) : null;
};

export default ConsentsMenu;

import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';
import {useTheme, Text, Layout} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import {normalizeSpaces} from 'utils';
import {getRGBACode} from 'utils/color';
import {ConsentsDetailStyles, htmlStyles} from './Consents.Styles';

const ConsentsDetail = ({consent}) => {
  const theme = useTheme();
  const contentWidth = useWindowDimensions().width;

  return consent?.clinical_trial?.html ? (
    <>
      <ScrollView
        style={ConsentsDetailStyles.htmlContainer}
        testID="ConsentsDetail">
        <HTML
          source={{
            html: normalizeSpaces(consent.clinical_trial.html),
          }}
          contentWidth={contentWidth}
          tagsStyles={htmlStyles(theme, contentWidth)}
          listsPrefixesRenderers={{
            ul: () => (
              <Text
                style={[
                  ConsentsDetailStyles.htmlUl,
                  {color: theme['promptly-blue-500']},
                ]}>
                •
              </Text>
            ),
          }}
        />
      </ScrollView>
      <Layout style={ConsentsDetailStyles.shadowContainer}>
        <LinearGradient
          colors={[getRGBACode('#000000', 0.1), getRGBACode('#000000', 0)]}
          style={[
            ConsentsDetailStyles.shadow,
            {
              width: contentWidth - 30,
            },
          ]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
        />
      </Layout>
    </>
  ) : null;
};

export default ConsentsDetail;

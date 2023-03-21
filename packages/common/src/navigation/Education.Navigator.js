import React from 'react';
import {useTheme} from '@ui-kitten/components';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Education from '../screens/Education';
import EducationDisease from '../screens/Education.Disease';
import EducationDetail from '../screens/Education.Detail';
import {NavigatorStyles} from './Navigator.Styles';
import {getEducationArticle} from '../selectors/selected_education';
import {connect} from 'react-redux';
import {getHeaderHeight} from 'utils';

const EducationNavigator = ({article}) => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: theme['color-primary-500'],
          height: getHeaderHeight(),
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="EducationHome"
        component={Education}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Education')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="EducationDisease" component={EducationDisease} />
      <Stack.Screen name="EducationDetail" component={EducationDetail} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
  article: getEducationArticle(state),
});

export default connect(mapStateToProps, null)(EducationNavigator);

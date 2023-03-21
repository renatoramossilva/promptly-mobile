import React from 'react';
import {useTheme, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Conditions from '../screens/Conditions';
import ConditionsDetail from '../screens/Conditions.Detail';
import {NavigatorStyles} from './Navigator.Styles';
import {getHeaderHeight} from 'utils';

const ConditionsNavigator = () => {
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
        name="ConditionsHome"
        component={Conditions}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Conditions')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ConditionsDetail"
        component={ConditionsDetail}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Condition')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default ConditionsNavigator;

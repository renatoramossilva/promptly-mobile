import React from 'react';
import {useTheme, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import DashboardCoaDetails from '../screens/DashboardCoaDetails';
import DashboardMetricsDetails from '../screens/DashboardMetricsDetails';
import {NavigatorStyles} from './Navigator.Styles';
import {getHeaderHeight} from 'utils';

const ConditionsNavigator = ({route}) => {
  const Stack = createStackNavigator();
  const theme = useTheme();
  const {t} = useTranslation();
  const {ble} = route.params;

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
        name="Dashboard"
        component={Dashboard}
        initialParams={{ble: ble}}
        options={{
          title: t('Dashboard'),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DashboardCoaDetails"
        component={DashboardCoaDetails}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Assessments')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DashboardMetricsDetails"
        component={DashboardMetricsDetails}
        initialParams={{ble: ble}}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Measurements')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default ConditionsNavigator;

import React from 'react';
import {useTheme, Text} from '@ui-kitten/components';
import {useTranslation} from 'react-i18next';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Careplan from '../screens/Careplan';
import {NavigatorStyles} from './Navigator.Styles';
import {getHeaderHeight} from 'utils';

const CareplanNavigator = () => {
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
      }}>
      <Stack.Screen
        name="CareplanHome"
        component={Careplan}
        options={{
          title: <Text style={NavigatorStyles.title}>{t('Care Plan')}</Text>,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default CareplanNavigator;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuTabBottom from 'components/menuTabBottom/MenuTabBottom';
import Notifications from '../screens/Notifications';
import DashboardNavigator from './Dashboard.Navigator';
import ConditionsNavigator from './Conditions.Navigator';
import EducationNavigator from './Education.Navigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({route}) => {
  const {ble} = route.params;

  return (
    <Tab.Navigator
      tabBar={(props) => <MenuTabBottom {...props} />}
      screenOptions={{
        unmountOnBlur: true,
        scrollEnabled: true,
        headerShown: false,
      }}
      backBehavior="none">
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        initialParams={{ble: ble}}
      />
      <Tab.Screen name="Conditions" component={ConditionsNavigator} />
      <Tab.Screen name="Education" component={EducationNavigator} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

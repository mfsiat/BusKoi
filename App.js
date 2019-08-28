import React from 'react';
import {} from 'react-native';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'; 
import MapScreen from './Screens/MapScreen';
import SingupScreen from './Screens/SingupScreen';
import LoadingScreen from './Screens/LoadingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import BusListScreen from './Screens/BusListScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DashboardScreen from './Screens/DashboardScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: LoginScreen,
  Map: MapScreen,
  SingUp: SingupScreen,
  LoadingScreen: LoadingScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  BusList: BusListScreen,
  Dashboard: DashboardScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

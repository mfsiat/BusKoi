import React from 'react';
import {} from 'react-native';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'; 
import MapScreen from './Screens/MapScreen';
import SignupScreen from './Screens/SignupScreen';
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

// route configs
const AppStackNavigator = createStackNavigator({
  Home: LoginScreen,
  Map: MapScreen,
  SignupScreen: SignupScreen,
  LoadingScreen: LoadingScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  BusList: BusListScreen,
  Dashboard: DashboardScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

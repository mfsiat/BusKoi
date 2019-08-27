import React from 'react';
import { StyleSheet } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen'; 
import MapScreen from './Screens/MapScreen';
import SingupScreen from './Screens/SingupScreen';
import LoadingScreen from './Screens/LoadingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import BusListScreen from './Screens/BusListScreen';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';

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
  ProfileScreen: ProfileScreen,
  SettingsScreen: SettingsScreen,
  BusListScreen: BusListScreen,
  HomeScreen: HomeScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
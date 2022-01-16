import React from 'react';
import { } from 'react-native';
import {
  createAppContainer, createStackNavigator
} from 'react-navigation';
import BusListScreen from './Screens/BusListScreen';
import DashboardScreen from './Screens/DashboardScreen';
import LoadingScreen from './Screens/LoadingScreen';
import LoginScreen from './Screens/LoginScreen';
import MapScreen from './Screens/MapScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SignupScreen from './Screens/SignupScreen';


/**
 *
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

/** @type {*} */
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

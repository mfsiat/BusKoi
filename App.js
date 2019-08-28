import React from 'react';
import {} from 'react-native';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen'; 
import LoadingScreen from './Screens/LoadingScreen';
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
  LoadingScreen: LoadingScreen,
  Dashboard: DashboardScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

import React from 'react';
import { StyleSheet } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen'; 
import MapScreen from './Screens/MapScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: LoginScreen,
  Map: MapScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
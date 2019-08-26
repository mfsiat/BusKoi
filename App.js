import React from 'react';
import { StyleSheet } from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen'; 
import MapScreen from './Screens/MapScreen';
import SingupScreen from './Screens/SingupScreen';

import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyQZZBUJu4qYkN10Rxhpbkz3_vGp3MZZ0",
    authDomain: "bus-koi.firebaseapp.com",
    databaseURL: "https://bus-koi.firebaseio.com",
    projectId: "bus-koi",
    storageBucket: "bus-koi.appspot.com",
    messagingSenderId: "1087900522203",
    appId: "1:1087900522203:web:576d113b86a14018"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
  SingUp: SingupScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});
import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

export default class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.navigation.navigate('Dashboard')
            }
            else{
                this.props.navigation.navigate('SignupScreen')
                alert("Error not Logged In!!")
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "center"
    }
});

import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import firebase from 'firebase'

export default class SettingsScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user==null){
                // this.props.navigation.navigate('Dashboard')
                // this.props.navigation.navigate('SignupScreen')
                alert("Logged Out!!!")
            }
            // else{
            //     this.props.navigation.navigate('SignUp')
            // }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Settings </Text>
                <Button title="Sing Out" onPress={() => firebase.auth().signOut()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

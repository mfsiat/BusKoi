import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <ImageBackground style={styles.headerBackground} source={require("../Components/img/loginScreen.jpg")}>
                <View style={styles.header}>
                    <View style={styles.profilepicWrap}>
                        <ImageBackground style={styles.profilepic} source={require("../Components/img/noavatarn.png")}></ImageBackground>                            
                    </View>
                        <Text style={styles.name}>User</Text>
                        <Text style={styles.pos}>Regular User</Text>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: null
    },
    header: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)',
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 16
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
})

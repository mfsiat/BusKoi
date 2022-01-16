import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
/**
 *
 *
 * @export
 * @class Feed
 * @extends {Component}
 */
export default class Feed extends Component {
    render() {
        return (
        <ImageBackground style={styles.headerBackground} source={require("../assets/loginScreen.png")}>
            <View style={styles.container}>
                <Text style={styles.text}> Feed </Text>
            </View>
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 34
    },
    headerBackground: {
        flex: 1,
        width: null
    }
})
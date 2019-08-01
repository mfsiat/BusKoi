import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground></ImageBackground>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

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
                <ImageBackground 
                    source={require('../assets/loginScreen.png')}
                    style={{ flex: 1 }}
                >
                    <View style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            height: 100, 
                            width: 100, 
                            alignItems: 'center',
                            justifyContent: 'center'
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 26}}>
                            BusKoi
                        </Text>
                        </View>
                    </View>
                    <View>
                        <View
                        style={{
                            height: 70,
                            backgroundColor: 'white'
                        }}
                        >

                        </View>
                    </View>
                </ImageBackground>
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

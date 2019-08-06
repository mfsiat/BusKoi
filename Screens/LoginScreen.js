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
                    {/* Bottom Half */}
                    <View>

                        <View
                            style={{
                                height: 150,
                                backgroundColor: 'white'
                            }}
                        >
                            <View
                                style={{
                                    opacity: 1, //animated
                                    alignItems: 'flex-start',
                                    paddingHorizontal: 25,
                                    marginTop: 25 // animated
                                }}
                            >
                                <Text style={{ fontSize: 24 }}>
                                    Where is the Bus!
                                </Text>
                            </View>
                        </View>

                        {/* Footer */}
                        <View
                        style={{
                            height: 70,
                            backgroundColor: 'white',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            borderTopColor: '#e8e8ec',
                            borderTopWidth: 1,
                            paddingHorizontal: 25
                        }}
                        >
                            <Text
                            style={{
                                color: '#5a7fdf',
                                fontWeight: 'bold'
                            }}
                            >
                                Or connect using a social account
                            </Text>
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

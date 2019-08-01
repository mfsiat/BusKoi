import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const LoginScreen = () => {
    static navigationOptions = {
        header: null;
    }
    return (
        <View>
            <Text>Hello World</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

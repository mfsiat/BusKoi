import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

export default class SingupScreen extends Component {
  render() {
    return (
        <Container style={styles.container}>
            <Form>
                <Item floatingLabel>
                <Label>Email</Label>
                    <Input 
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </Item>
                <Item floatingLabel>
                <Label>Password</Label>
                    <Input 
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </Item>
            </Form>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});

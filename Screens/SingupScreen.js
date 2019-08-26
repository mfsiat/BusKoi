import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";

export default class SingupScreen extends Component {

  constructor(props) {
          super(props)

          this.state = ({
            email: '',
            password: ''
          })
  }

  singUpUser = (email,password) => {

  }

  loginUser = (email, password) => {

  }


  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
                autoCorrect={false} 
                autoCapitalize="none" 
                onChangeText={(email) => this.setState({email})}/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Button style={{ marginTop: 10 }} 
            full 
            rounded 
            success
            onPress = {()=> this.loginUser(this.state.email, this.state.password)}          
          >
            <Text style={{ color: 'white' }} >Login</Text>
          </Button>
          <Button style={{ marginTop: 10 }} 
            full 
            rounded 
            primary
            onPress = {()=> this.singUpUser(this.state.email, this.state.password)}
        >
            <Text style={{ color: 'white' }} >Sing-Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});

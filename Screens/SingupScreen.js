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

import * as firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAyQZZBUJu4qYkN10Rxhpbkz3_vGp3MZZ0",
  authDomain: "bus-koi.firebaseapp.com",
  databaseURL: "https://bus-koi.firebaseio.com",
  projectId: "bus-koi",
  storageBucket: "bus-koi.appspot.com",
  messagingSenderId: "1087900522203",
  appId: "1:1087900522203:web:576d113b86a14018"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default class SingupScreen extends Component {

  constructor(props) {
    super(props)

    this.state = ({
    email: '',
    password: ''
    })
  }

  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if(user != null) {
  //       console.log(user)
  //     }
  //   })
  // }

  singUpUser = (email, password) => {
    try {
        if(this.state.password.length < 6) {
            alert("Please enter atLeast 6 characters")
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
        console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
            console.log(user)
            
        })
    }
    catch(error){
        console.log(error.toString())
    }
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
              onChangeText={(password) => this.setState({password})}
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
          {/* <Button style={{ marginTop: 10 }} 
            full 
            rounded 
            primary
            onPress = {()=> this.props.navigation.navigate('LoadingScreen')}
        >
            <Text style={{ color: 'white' }} >Login With Facebook</Text>
          </Button> */}
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

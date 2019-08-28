import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import * as firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyQZZBUJu4qYkN10Rxhpbkz3_vGp3MZZ0",
  authDomain: "bus-koi.firebaseapp.com",
  databaseURL: "https://bus-koi.firebaseio.com",
  projectId: "bus-koi",
  storageBucket: "bus-koi.appspot.com",
  messagingSenderId: "1087900522203",
  appId: "1:1087900522203:web:576d113b86a14018"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class BusListScreen extends Component {
  constructor(props) {
      super(props);

      this.state = ({
          busList: '',
          busLists: []
      })
  }


  componentDidMount() {
    firebase.database().ref().child('/busLists').once('value', snapshot => {
        // alert(JSON.stringify(snapshot.val()))
        const data = snapshot.val()
        
    })

    firebase.database().ref().child('/busLists').on("child_added", snapshot =>{
        // alert(JSON.stringify(snapshot.val()))
    })
  }

  render() {
    return (
      <View >
        <View >
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  msgBox: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff"
  },
  listItemContainer: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    fontSize: 20,
    padding: 10
  }
});

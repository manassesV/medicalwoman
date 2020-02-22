import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
} from 'native-base';
import User from '../controller/logincontroller';

import firebase from 'firebase';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
  
}

componentDidMount() {
const { navigate } = this.props.navigation;
this.lFire();

}

   static navigationOptions = { header: null }





  lFire = () => {
    const { navigate } = this.props.navigation;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var user = firebase.auth().currentUser;
        var uid = user.uid;
        var data = firebase.database();
        data.ref(uid).ref.child("Quiz").on("value", function(snapshot) {
              snapshot.forEach(function(data) {

              
                navigate('Main')

            });
        });

      } else {
        navigate('Login')
     
      }
    });
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={{ height: 200, width: 150, marginTop: -70 }}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />

        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
  textInput: {
    height: 40,
    color: '#FFF',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: '#FFF',
  },

  textHeader: {
    color: '#FFF',
  },

  buttonLogin: {
    marginTop: 40,
  },
});

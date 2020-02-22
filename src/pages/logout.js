import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Content, Button, Text, Form, Item, Input, Footer, FooterTab, Icon, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import firebase from 'firebase'
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.Logout = this.Logout.bind(this);
  }


componentDidMount() {
  const { navigate } = this.props.navigation;

}

static navigationOptions = { header: null }


Logout = () => {
  const { navigate } = this.props.navigation;

  
    firebase.auth().signOut().then(function() {
   
      navigate('Login')

    }).catch(function(error) {

    });

  }


//   Loggout(){ 
//     var controller = new LoginController();
//     var self = this;
//     const  { navigate } =  this.props.navigation;

//     controller.loggout(function(){
//          alert("Ocorreu um erro conte o desenvolvedor!")
//     },
//     function(){
//         navigate('Login');
    

//   });
// }

  state = { currentUser: null }












  render() {
    const { currentUser } = this.state
    return (
      <SafeAreaView style={styles.container}>

        <Image
          style={{ height: 200, width: 150, marginTop: -30 }}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />


        <Button
          danger
          onPress={this.handleLogin}
          style={styles.buttonSair}
          onPress={this.Logout}
          
          
          >
          <Text><Icon style={styles.iconSair} type="FontAwesome" name="sign-out" /> Sair</Text>
        </Button>

        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home" />
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            {/* <Button  badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
            <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button active vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button> */}
            <Button active vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>

      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',


  },




  textFooter: {
    fontSize: 8,

  },

  styleGrid: {
    margin: 10,
  },

  buttonSair: {
    marginTop: 40,
    color: "#FFF",
  },

  iconSair: {
    color: "#FFF",
    fontSize: 14,
  },


  styleGrid2: {
    marginTop: 20
  },

  styleCol: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#FFF',
    height: 100
  },






})
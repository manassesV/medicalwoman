import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image, ScrollView } from 'react-native';
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
import AnwesController from '../controller/anwescontroller';
import Funcoes from '../utils/funcoes';

 
export default class DetHpv extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: "Detalhes HPV",
        
          headerRight: (
            <Text style={styles.textAdd} onPress={() => navigation.navigate('AddNewHpv')}color="#fff"> 
                + 
            </Text>
          ),
        };
      };
    // static navigationOptions = {
    //     title: 'Detalhes HPV',
    //     /* No more header config here! */
    //   };

  constructor(props) {
    super(props);
    this.state = {
      idadeUsuario: '', // VAI ARMAZERNAR A IDADE DO USUARIO
      resulthpv: '', // VAI ARMAZENAR SE O USUARIO TOMOU A VACINA DO HPV       
    };
  }

  componentDidMount() {
    var controller = new AnwesController();
    var self = this;

    // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA SE USUARIO TOMOU A VACINA DO HPV

    controller.getDatas(
        function (error) {
      
        },
        function (succes) {

            if(succes == "S"){succes = "que já tomou a vacina, parabéns isso é muito bom! \nAbaixo trago um relatório de quais são os risco de não tomar a vacina do HPV faça sua e leve essa informação adiante"}
            if(succes == "N"){succes = "que não tomou a vacina e isso é péssimo \nAbaixo trago um relatório de quais são os risco você esta correndo por não tomar a vacina"}

          self.setState({
            resulthpv: succes
          })  
  
        },
        "Vac_Hpv");
  
        // FIM DO TRECHO 
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
          <ScrollView>  

<View style={styles.output}>
  <ScrollView>
      <Text>
   De acordo com as minha pertguntas sobre HPV, você respondeu {this.state.resulthpv}.
      </Text>
  </ScrollView>

</View>

<Image
          style={{ height: 200, width: 150, marginTop: -20, marginLeft: "25%"}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
/>

<View style={styles.output2}>
<ScrollView>
      <Text>
      </Text>
     



</ScrollView>
</View>      
</ScrollView>
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
    marginTop: 20,
    backgroundColor: '#FFF',
  },

  textAdd: {
    fontSize: 50,
    color: '#FFF',
    marginTop: -12,
  },



  buttonLogin: {
    marginTop: 40,
  },

  output:{ 
  backgroundColor: "white",
  padding:20,
  borderRadius:0,
  marginBottom:2,
  width:"100%",
  height: 150,
  borderRadius:50,
  position:"relative",
  alignItems: 'center',
  marginTop: '10%',
},

output_before:{
width:100,
height:0,
position:"absolute",
bottom:-10,

},

output2:{ 
  backgroundColor: "white",
  padding:10,
  width:"100%",
  height: "100%",
  height:200,
  borderRadius:10,

  
  alignItems: 'center',
},


avatar_img:{
  width:170,
  borderRadius:100,
  marginBottom:20,
}









});

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

 
export default class DetPapa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      idadeUsuario: '', // VAI ARMAZERNAR A IDADE DO USUARIO 
      difUltexamepapa: '', // VAI ARMAZENAR A DIFERENÇA O ULTIMO EXAME PARA O DIA ATUAL
      resulthpv: '', // VAI ARMAZENAR SE O USUARIO TOMOU A VACINA DO HPV 
      resultPapa: '',
      
    };
  }

  componentDidMount() {
    var controller = new AnwesController();
    var self = this;
    
    // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DATA DE NASCIMENTO DO USUARIO  
    controller.getDatas(
      function (error) {

      },
      function (succes) {
        var funcoes = new Funcoes();
        var idade = funcoes.idade(succes);
        // var d = funcoes.addDate(1095, succes)
        self.setState({
          idadeUsuario: idade
        })
      },
      "Data_Nascimento");
      // FIM DO TRECHO 

      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DIFERENÇA DE ANOS DO ULTIMO EXAME DE PAPA DO USUARIO 

      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DATA DE NASCIMENTO DO USUARIO  
    controller.getDatas(
      function (error) {
        
      },
      function (succes) {

      if (succes == 'NG'){succes = "negativo para cancêr"
      }else if(succes == 'IA'){succes = "amostra insatisfatoria,"
      }else if(succes == 'INH'){succes = "infecção pelo HPV,"
      }else if(succes == 'LBG'){succes = "lesão de baixo grau,"
      }else if(succes == 'LAG'){succes = "lesão de auto grau,"}

      console.log(succes);

        self.setState({
          resultPapa: succes
        })
      },
      "Result_papa");
      // FIM DO TRECHO 

      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DIFERENÇA DE ANOS DO ULTIMO EXAME DE PAPA DO USUARIO 

      controller.getDatas(
        function (error) {
     
        },
          function (succes) {
          var funcoes = new Funcoes();
          var difultexame = funcoes.idade(succes);
          self.setState({
            difUltexamepapa: difultexame
          })          
        },
        "Data_ult_papan");



  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
          <ScrollView>  

<View style={styles.output}>
  <ScrollView>
      <Text>
   Você tem {this.state.idadeUsuario} anos, de acordo com as minha pertguntas o seu último papanicolau foi há {this.state.difUltexamepapa} anos.
      </Text>
      <Text>
 Seu último exame apresentou no resultado como {this.state.resultPapa} abaixo segue um relatório com diagnostico de riscos.
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

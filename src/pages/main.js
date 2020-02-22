import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Grid, Col } from 'native-base';
import Speedometer from 'react-native-speedometer-chart';
import firebase from 'firebase'
import AnwesController from '../controller/anwescontroller';
import Funcoes from '../utils/funcoes';


export default class Main extends Component {

  static navigationOptions = { header: null }

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
        self.setState({
          idadeUsuario: "Você precisa fazer o exame Papanicolau"
        })
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
        self.setState({
          resultPapa: error
        })
      },
      function (succes) {
        self.setState({
          resultPapa: succes
        })
      },
      "Result_papa");
      // FIM DO TRECHO 

      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA A DIFERENÇA DE ANOS DO ULTIMO EXAME DE PAPA DO USUARIO 







      controller.getDatas(
        function (error) {
          self.setState({
            idadeUsuario: "Você precisa fazer o exame Papanicolau"
          })
        },
          function (succes) {
          var funcoes = new Funcoes();
          var difultexame = funcoes.idade(succes);
          self.setState({
            difUltexamepapa: difultexame
          })          
        },
        "Data_ult_papan");



      // O CÓDIGO ABAIXO VAI NA CLASSE FUNÇOES.JS DENTRO DA FUNÇÃO GET DATAS E PEGA SE USUARIO TOMOU A VACINA DO HPV

    controller.getDatas(
      function (error) {
    
      },
      function (succes) {
        self.setState({
          resulthpv: succes
        })  

      },
      "Vac_Hpv");

      // FIM DO TRECHO 
  }

  render() {
        
    
        const idadeNew =   this.state.idadeUsuario;
        const diferultexa =   this.state.difUltexamepapa;
        const statHpv =   this.state.resulthpv;
        const resultadoPapa =   this.state.resultPapa;
        const iconTriangulo = <Icon style={styles.iconTriangulo} type="FontAwesome" name="exclamation-triangle" />
        const iconCheck = <Icon style={styles.iconCheck} type="FontAwesome" name="check-circle-o" />
        const iconTrianguloAmarelo = <Icon style={styles.iconTrianguloAmarelo} type="FontAwesome" name="exclamation-triangle" />
        var colorGauge = "#FFF";
        var textGauge = "";
        var  txRisco = parseInt('0');

        if(idadeNew >= 25 && idadeNew <=64 && diferultexa <=0 && resultadoPapa == "NG" ){
          txRisco = parseFloat(txRisco)+0;    
          var  msgPapa = iconCheck; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa <=1 && resultadoPapa == "NG"){
          txRisco = parseFloat(txRisco)+10;    
          var  msgPapa = iconCheck; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa <=2 && resultadoPapa == "NG"){
          txRisco = parseFloat(txRisco)+20;    
          var  msgPapa = iconCheck; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa <=3 && resultadoPapa == "NG"){
          txRisco = parseFloat(txRisco)+30;    
          var  msgPapa = iconCheck; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa <1 && resultadoPapa == "INH"){
          txRisco = parseFloat(txRisco)+41;    
          var  msgPapa = iconTrianguloAmarelo; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa < 1 && resultadoPapa == "LBG"){
          txRisco = parseFloat(txRisco)+41;    
          var  msgPapa = iconTrianguloAmarelo; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }else if (idadeNew >= 25 && idadeNew <=64 && diferultexa >=0 && resultadoPapa == "LAG"){
          txRisco = parseFloat(txRisco)+80;    
          var  msgPapa = iconTriangulo; 
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }
        else if (idadeNew >= 25 && idadeNew <=64 && diferultexa >=0 && resultadoPapa == "AI"){
          txRisco = parseFloat(txRisco)+60;    
          var  msgPapa = iconTriangulo;  
          var  msgPapa2 = "Seu último exame esta dentro do prazo!"; 
        }
              
        else{
          var  msgPapa = iconTriangulo;      
          var  msgPapa2 = "Prazo de validade vencido!"; 
          txRisco = parseFloat(txRisco)+50;    
        }
        if(statHpv == 'N' ){
           txRisco = parseFloat(txRisco)+50;  
          var  msgHpv = iconTriangulo;   
          var  msgHpv2 = "Tome a vacina!";    
         }else{
           txRisco = parseFloat(txRisco)+0;    
           var  msgHpv = iconCheck; 
           var  msgPapa2 = "Vacina em dia!"; 
         }
         if(txRisco >= 0 && txRisco <= 40 ){
          colorGauge = "#008000";
          textGauge = "Parabéns você esta em dia com sua saúde da mulher.";
         }else if (txRisco >= 41 && txRisco <= 70 ){
          colorGauge = "#FFF000";
          textGauge = "Recomendamos atenção, procure o seu ginicologista";
         }else {
          colorGauge = "#FF0000";
          textGauge = "Sua saúde da mulher pode estar em risco, procure um ginicologista";
         }

         if(txRisco > 100){

          txRisco = 100
         }





  

    return (

      <Container style={styles.container}>
        <Image
          style={{ height: 100, width: 75 }}
          source={require('../../assets/logoB.png')}
          resizeMode="contain"
        />

        <Content />


        <Speedometer style={styles.styleGaud}
    value={txRisco}
    totalValue={100}
    size={250}
    outerColor="#d3d3d3"
    internalColor={colorGauge}
    showText
    text={txRisco}
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'white' }}
    showPercent
    percentStyle={{ color: 'red' }}
  />

  <Text style={styles.textGauger}> {textGauge} </Text>


        <Grid style={styles.styleGrid1}>
          <Col style={styles.styleCol}>
            <Text style={styles.textCad}>PAPANICOLAU</Text>
            <View>{msgPapa}</View>
            <Text onPress={() => this.props.navigation.navigate('DetPapa')}>Detalhes</Text>
          </Col>

     

          <Col style={styles.styleCol}>
          <Text style={styles.textCad}>HPV</Text>
          <View>{msgHpv}</View>
          <Text onPress={() => this.props.navigation.navigate('DetHpv')}>Detalhes</Text>
          </Col>
        </Grid>
        

        <Footer>
          <FooterTab>
            <Button active vertical onPress={() => this.props.navigation.navigate('Main')}>
              <Icon type="FontAwesome" name="home" />
              <Text style={styles.textFooter}> Home </Text>
            </Button>
            {/* <Button badge vertical onPress={() => this.props.navigation.navigate('Alerts')}>
              <Badge ><Text>10</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" />
              <Text style={styles.textFooter}>Alertas</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Infor')}>
              <Icon type="FontAwesome" name="user" />
              <Text style={styles.textFooter}>Usuário</Text>
            </Button> */}
            <Button vertical onPress={() => this.props.navigation.navigate('Logout')}>
              <Icon type="FontAwesome" name="power-off" />
              <Text style={styles.textFooter}>Sair</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

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




  textFooter: {
    fontSize: 8,

  },

  textGauger: {
    alignItems: 'center',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },


  textCad: {
    alignItems: 'center',
    color: '#FF69B4',
  },

  


  iconTriangulo: {
    color: '#FF0000',
    fontSize: 50,
  },

  iconCheck: {
    color: '#008000',
    fontSize: 50,
  },

  iconTrianguloAmarelo: {
    color: '#FFDB58',
    fontSize: 50,
  },


  styleGrid1: {
    marginTop: "10%",
    

  },


  styleGaud: {
    marginTop: "-40%",
    

  },



  styleGrid2: {

    marginTop: "10%",
  },

  styleCol: {
    borderRadius:20,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#F5FFAB',
    height: 100,
    alignItems: 'center',

  },






})
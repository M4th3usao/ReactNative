import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      retorno: '',
      alcool: 0,
      gasolina: 0
    };
    
    this.verificar = this.verificar.bind(this);
  }


  verificar(){
    if ((this.state.alcool === 0) || (this.state.gasolina === 0) ){
      alert('Digite um valor:')
      return;
    }
    res = this.state.alcool / this.state.gasolina
    this.setState({resultado: 'Resultado: ' + res});

    
    if(res > 0.7){
      this.setState({retorno: 'Usar gasolina'})
    }else if(res < 0.7){
      this.setState({retorno: 'Usar alcool'})
    }
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Alcool ou Gasolina</Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            
            <Image 
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3bKLmPJk_CbD08LH2EeSVrX9eVRjKYIEvw&usqp=CAU'}}
              style={{width: 150, height: 150, marginTop: 10}}
            />
          </View>


          <TextInput
          style={styles.input}
          placeholder="Digite o preço do alcool"
          onChangeText={ (valor) => this.setState({alcool: valor})}
          />

          <TextInput
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          onChangeText={ (valor) => this.setState({gasolina: valor})}
          />


          <Button title="Verificar" onPress={this.verificar} />


          <Text style={styles.texto}> {this.state.resultado} </Text>
          <Text style={styles.texto}> {this.state.retorno} </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  },
  content:{
    height: 450,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    backgroundColor:'',
  },
  input:{
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    margin: 10,
    fontSize: 16,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
  }
})


export default App;

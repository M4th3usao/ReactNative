import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      numero1: 0,
      numero2: 0
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ((this.state.numero1 === 0) || (this.state.numero2 === 0) ){
      alert('Digite os dois valores!')
      return;
    }
    res = this.state.numero1 * this.state.numero2
    this.setState({resultado: 'Resultado: ' + res});
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Multiplicador de Números</Text>

          <TextInput
          style={styles.input}
          placeholder="Digite o primeiro numero?"
          onChangeText={ (valor) => this.setState({numero1: valor})}
          />

          <TextInput
          style={styles.input}
          placeholder="Digite o segundo numero?"
          onChangeText={ (valor) => this.setState({numero2: valor})}
          />

          <View style={styles.button}>
            <Button  title="Calcular" onPress={this.calcular} />
          </View>

          <View style={styles.textoBox} >
            <Text> {this.state.resultado} </Text>
          </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  content:{
    height: 350,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'black' 
  },
  input:{
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    marginTop: 20,
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white'
  },
  button:{
    borderRadius: 5,
    margin: 25
  },
  textoBox:{
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: 'white'
  },
  titulo:{
    fontSize: 18,
    color: 'white'
  }
})


export default App;
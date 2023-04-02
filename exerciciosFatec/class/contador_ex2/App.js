import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };
    
    this.mudarContador = this.mudarContador.bind(this);
  }

  mudarContador(sinal){
    if (sinal == "+") {
      this.setState({
        contador: this.state.contador + 1 
      });
    }
    else{
      if (this.state.contador > 0){
        this.setState({
          contador: this.state.contador - 1
        })
      }
    }
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.content}>

          <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 18}}>Contador de Pessoas</Text>

          <Text style={styles.texto}>{this.state.contador} </Text>

          <View style={styles.button}>
            <Button title="+" onPress={ () => this.mudarContador('+')}/>
          </View>

          <View style={styles.button}>
            <Button title="-" onPress={ () => this.mudarContador('-')}/>
          </View>
          
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 2,
    padding: 50
  },
  button:{
    alignSelf: 'center',
    marginTop: 20,
    width: 150
  },
  texto:{
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#8d2dd3'
  }
})


export default App;
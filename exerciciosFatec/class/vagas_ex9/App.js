import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, FlatList } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20, }}>Vagas de Emprego</Text>
         </View>
        <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
          <View style={styles.box}> <Descricao /> </View>
        </ScrollView>
      </View>
    )
  }
}

class Descricao extends Component {
  render(){
    
    return(
      <View style={styles.texto}>
          <Text>Dev. Front End Sênior</Text>
          <Text>Contrato: PJ</Text>
          <Text>Remuneração: R$ 22.000,00</Text>
          <Text>Remoto</Text>
          <Text 
          style={styles.hyperlinkStyle} 
          onPress={() => { 
            Linking.openURL('https://reactnative.dev'); 
          }}> 
           Veja mais detalhes da Vaga! 
           </Text> 
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignSelf: 'center'
  },
  box:{
    backgroundColor: '#86C3C7',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'black',
    height:130,
    width: 300,
    marginBottom: 15
  },
  title:{
    height: 50,
    marginBottom: 25, 
    backgroundColor: 'black'
  },
  hyperlinkStyle:{
    color: 'purple'
  },
  texto:{
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center'
  }

})


export default App;
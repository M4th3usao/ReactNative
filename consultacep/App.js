import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import api from './src/services/api'


export default function App(){
  const [cep, setCep] = useState()
  const [endereco, setEndereco] = useState()


  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setEndereco(response.data.logradouro)
  }


    return(
      <View style={styles.container}>
        <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        />


        <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />


        <Text style={styles.endereco}>{endereco}</Text>
      </View>    
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  endereco:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  }
});

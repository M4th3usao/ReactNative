import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import api from '../../Services/Api'

import Modelo from '../Modelo';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Search(){
    const [marca, setMarca] = useState();
    const [nome, setNome] = useState([]);

    // useEffect(() => {
    //   api.get('modelos').then(({data}) => {
    //     setMarca(data)
    //   });
    // },[])

    const consultaMarca = async (marca) => {
      const response = await api.get('/' + marca + '/modelos')
      setNome({modelos: response.data})
    

      // setNome(response.data)
    }
  // const [cep, setCep] = useState();

  // const [endereco, setEndereco] = useState();


  // const consultaMarca = async (cep) => {
  //   const response = await api.get('/' + cep + '/json/');
  //   setEndereco(response.data.logradouro)
  // }

  console.log({nome})

  return(
    <View style={styles.container}> 
      <TextInput
        style={styles.cep}
        value={marca}
        onChangeText={(texto) => setMarca(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        />


        <Button title="Consultar Modelos" onPress={() => consultaMarca(marca)} />


        <Text style={styles.endereco}>{nome}</Text>

        {nome.map(item =>
          (
            <Text>{item.nome}</Text>
          ))
        }

        {/* <SafeAreaView>
          <FlatList
            data={marca}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Modelo />}
          />
        </SafeAreaView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    // alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
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
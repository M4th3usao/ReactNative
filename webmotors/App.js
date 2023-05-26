import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker'

import api from './src/services/api'



export default function App(){
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState();

  const [endereco, setEndereco] = useState();

  const [resMarca, setResMarca] = useState();


  const consultaMarca = async (marca) => {
    // const response = await api.get('/' + codigo + '/json');
    const response = await api.get('/' + codigo + '/modelos/json');
    setNome(response.data.nome)
  }

 
    // exibirMarca = marca
    // setResMarca(exibirMarca)


    return(
      <View style={styles.container}>
        <TextInput
        style={styles.cep}
        value={codigo}
        onChangeText={(texto) => setCodigo(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        /> 

        {/* <View style={styles.pickerStyle}>
            <Picker
              style={styles.opcoes}
              selectedValue={marca}
              onValueChange={(itemValue, itemIndex) =>
                setMarca(itemValue)
              }>
              <Picker.Item
                key={0}
                value={1}
                label="Acura"
              />
              <Picker.Item
                key={1}
                value={20}
                label="Ferrari"
              />
            </Picker>
          </View> */}

        <Button title="Consultar Marca" onPress={() => consultaMarca(codigo)} />


        <Text style={styles.modelos}>{nome}</Text>
      </View>    
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  modelos:{
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

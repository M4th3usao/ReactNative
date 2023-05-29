import React, {Component, useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Pressable} from 'react-native';
import api from '../../Services/Api'

import Modelo from '../Modelo';
import { FlatList } from 'react-native-gesture-handler';

import {styles} from './styles';
import { Picker } from '@react-native-picker/picker';

export default function Search(){
    const [marca, setMarca] = useState();
    const [modelos, setModelos] = useState([]);
    const [codigoCarro, setCodigoCarro] = useState();
    const [carro, setCarro] = useState([]);

    const consultaMarca = async (marca) => {
      const response = await api.get('/' + marca + '/modelos')
      setModelos(response.data.modelos)
    }

    const consultaCarro = async (codigoCarro) => {
      const response = await api.get('/' + marca + '/modelos/' + codigoCarro + '/anos/2023-1')
      setCarro(response.data)
    }
    // consultaCarroAno
  return(
    <View style={styles.container}> 
      <View style={styles.content}>
        
        <Text style={styles.title}>Selecione a Marca do seu veículo:</Text>
        
        <View style={styles.pickerContent}>
          <Picker
            style={styles.picker}
            selectedValue={marca}
            onValueChange={(itemValue) => setMarca(itemValue)
          }>
            <Picker.item key={0} value={0} label='---------Marcas---------'/>
            <Picker.item key={1} value={1} label="Acura"/>
            <Picker.item key={2} value={2} label="Agrale"/>
            <Picker.item key={3} value={3} label="Alfa Romeo"/>
            <Picker.item key={4} value={4} label="AM Gen"/>
            <Picker.item key={5} value={5} label="Asia Motors"/>
            <Picker.item key={6} value={6} label="Audi"/>
            <Picker.item key={7} value={189} label="Aston Martin"/>
            <Picker.item key={8} value={7} label="BMW"/>
            <Picker.item key={9} value={10} label="Cadillac"/>
            <Picker.item key={''} value={20} label="Ferrari"/>
          </Picker>
        </View>
        <Pressable
          style={styles.pressable} 
          onPress={() => consultaMarca(marca)} 
        >
          <Text style={styles.textPressable}>Consultar Modelo</Text>
        </Pressable>

      </View>

      <View style={styles.list}>
          <FlatList
            data={modelos}
            keyExtractor={item => item.codigo}
            renderItem={({item}) => <Modelo data={item} />}
          />
      </View> 

      <TextInput 
        style={styles.cep}
        value={codigoCarro}
        onChangeText={setCodigoCarro}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        keyboardAppearance='dark'
      />

      <Button title="Consultar Carro" onPress={() => consultaCarro(codigoCarro)} />

      <Text style={styles.endereco}>{carro?.Marca}</Text>
      <Text style={styles.endereco}>{carro?.Modelo}</Text>
      <Text style={styles.endereco}>{carro?.Valor}</Text>
      <Text style={styles.endereco}>{carro?.Combustivel}</Text>

    </View>
  )
}

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
            <Picker.item key={10} value={136} label="Chana"/>
            <Picker.item key={11} value={161} label="Chery"/>
            <Picker.item key={12} value={12} label="Chrysler"/>
            <Picker.item key={13} value={13} label="Citroen"/>
            <Picker.item key={14} value={14} label="Dodge"/>
            <Picker.item key={15} value={20} label="Ferrari"/>
            <Picker.item key={16} value={21} label="Fiat"/>
            <Picker.item key={17} value={22} label="Ford"/>
            <Picker.item key={18} value={25} label="Honda"/>
            <Picker.item key={19} value={23} label="GM - Chevrolet"/>
            <Picker.item key={20} value={26} label="Hyundai"/>
            <Picker.item key={21} value={208} label="Iveco"/>
            <Picker.item key={22} value={177} label="JAC"/>
            <Picker.item key={23} value={28} label="Jaguar"/>
            <Picker.item key={24} value={29} label="Jeep"/>
            <Picker.item key={25} value={31} label="Kia Motors"/>
            <Picker.item key={26} value={171} label="Lamborghini"/>
            <Picker.item key={27} value={33} label="Land Rover"/>
            <Picker.item key={28} value={34} label="Lexus"/>
            <Picker.item key={29} value={35} label="Lutus"/>
            <Picker.item key={30} value={36} label="Maserati"/>
            <Picker.item key={31} value={211} label="McLaren"/>
            <Picker.item key={32} value={39} label="Mercedes-Benz"/>
            <Picker.item key={33} value={156} label="Mini"/>
            <Picker.item key={34} value={41} label="Mitsubishi"/>
            <Picker.item key={35} value={43} label="Nissan"/>
            <Picker.item key={36} value={44} label="Peugeot"/>
            <Picker.item key={37} value={47} label="Porsche"/>
            <Picker.item key={38} value={185} label="RAM"/>
            <Picker.item key={39} value={48} label="Renault"/>
            <Picker.item key={40} value={195} label="Rolls-Royce"/>
            <Picker.item key={41} value={54} label="Subaru"/>
            <Picker.item key={41} value={56} label="Toyota"/>
            <Picker.item key={41} value={58} label="Volvo"/>
            <Picker.item key={41} value={59} label="VW - VolksWagen"/>

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

      <View style={styles.inputContent}>

        <Text style={styles.title}>Insira o código do veículo:</Text>

        <TextInput 
          style={styles.input}
          value={codigoCarro}
          onChangeText={setCodigoCarro}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
          keyboardAppearance='dark'
        />

        <Pressable
          style={styles.pressable}
          onPress={() => consultaCarro(codigoCarro)}
        >
            <Text style={styles.textPressable}>Consultar Veículo</Text>
        </Pressable>
        
        <View style={styles.resContent}>
        <Text style={styles.endereco}>{carro?.Marca}</Text>
        <Text style={styles.endereco}>{carro?.Modelo}</Text>
        <Text style={styles.endereco}>{carro?.Valor}</Text>
        <Text style={styles.endereco}>{carro?.Combustivel}</Text>
      </View>
    </View>

    
  </View>
  )
}

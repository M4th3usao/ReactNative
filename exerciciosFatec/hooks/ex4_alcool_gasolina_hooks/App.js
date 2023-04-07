import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image,TextInput, Button} from 'react-native';

import {styles} from './styles';


export default function App(){
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [retorno, setRetorno] = useState("Status");
  const [res, setRes] = useState('')


   function Verificar(){
    const divisao = alcool / gasolina;
    setRes(divisao)

    if(divisao > 0.7){
      setRetorno('Usar gasolina')
    }else if(divisao < 0.7){
      setRetorno('Usar Alcool')
    }
  }

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
          onChangeText={ (alcool) => setAlcool(alcool)}
          />

          <TextInput
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          onChangeText={ (gasolina) => setGasolina(gasolina)}
          />


          <Button title="Verificar" onPress={Verificar} />


          <Text style={styles.texto}> {res} </Text>
          <Text style={styles.texto}> {retorno} </Text>
        </View>
      </View>
    );
  }

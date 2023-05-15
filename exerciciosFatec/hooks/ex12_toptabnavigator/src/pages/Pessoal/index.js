import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles'

export default function Pessoal(){
  return(
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>Informações Pessoais</Text>
        <Text>Nome: Matheus Henrique</Text>
        <Text>Idade: 21 Anos</Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  )
}
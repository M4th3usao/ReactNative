import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles'

export default function Formacao(){
  return(
     <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>Formação</Text>
        <Text>Faculdade: Fatec BS</Text>
        <Text>Cursando: Sistemas para Internet</Text>
      </View>
    </View>
  )
}
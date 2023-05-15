import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles'

export default function Experiencia(){
  return(
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>Experiência</Text>
      </View>
    </View>
  )
}
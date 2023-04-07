import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles'

export default function Descricao() {

  return (
    <View style={styles.texto}>
      <Text>Mercedes G63 AMG</Text>
      <Text>4.0 V8 TURBO</Text>
      <Text>Ano: 2021/2021</Text>
      <Text>Preço: R$ 2.350.000</Text>
    </View>
  );
  
}

export {Descricao};
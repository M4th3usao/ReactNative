import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles'

export default function Photo(props) {
    let img =
      'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202301/20230126/MERCEDESBENZ-G-63-AMG-4.0-V8-TURBO-GASOLINA-MAGNO-EDITION-4MATIC-SPEEDSHIFT-wmimagem14413923425.jpg';

  return (
    <View>
      <Image
        source={{ uri: img }}
        style={{
          width: props.largura,
          height: props.altura,
          alignSelf: 'center',
          marginTop: 10,
        }}
      />
    </View>
  );
  
}

export {Photo};


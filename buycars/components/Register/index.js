import React, {useState} from 'react';
import {View, Text, Button} from 'react-native'
import {useNavigation, StackActions} from '@react-navigation/native';

import {styles} from './styles'

export default function Register({route}){
  const navigation = useNavigation();
  return(
    <View>
      <Text>Olá, teste.</Text>

      <Button
        style={styles.btn}
        title='Voltar para tela Home'
        onPress={ () => navigation.goBack() }
      />

    </View>
  );
}
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles'

export default function Register({route}){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <Text>Olá, teste.</Text>

      <Button
       
        title='Verificar suas informações'
        onPress={ () => navigation.goBack('Profile') }
      />

    </View>
  );
}
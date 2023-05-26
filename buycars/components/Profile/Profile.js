import React, {Component} from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {TextInput} from '@react-native-material/core'

import {styles} from './styles'


export default function Profile(){

  // function goRegister(){
  //   navigation.navigate('Register')
  // }
  return(
    <View style={styles.container}> 
      <View style={styles.card}>
        <Image 
          style={styles.profile}
          source={{uri: 'https://autobusiness.com.br/assets/img/albuns/album_7059/album-Album-de-MCLAREN-765lt-A6344-62f52d31bfce8.jpg'}}
        />
        <Text style={styles.nameUser}>Matheus Henrique</Text>

        {/* <Pressable title="Cadastrar-se" onPress={Register}/>       */}
      </View>
    </View>
  )
}


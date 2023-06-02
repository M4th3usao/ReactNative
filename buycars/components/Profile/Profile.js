import React, {Component} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {TextInput} from '@react-native-material/core'

import {styles} from './styles'


export default function Profile({route}){

  const navigation = useNavigation();
  function goRegister(){
    navigation.navigate('Register')
  }

  // navigation.setOptions({
  //   title: `Profile ${navigation.params?.nome}`
  // })
  return(
    <View style={styles.container}> 
      <View style={styles.card}>
        <Image 
          style={styles.profile}
          source={{uri: 'https://autobusiness.com.br/assets/img/albuns/album_7059/album-Album-de-MCLAREN-765lt-A6344-62f52d31bfce8.jpg'}}
        />
        <Text style={styles.nameUser}>{route.params?.name}</Text>
        <Text style={styles.nameUser}>{route.params?.email}</Text>
        <Text style={styles.nameUser}>{route.params?.mobileNumber}</Text>

        <Pressable 
          style={styles.pressable}
          onPress={() => goRegister('Register')}
        >
          <Text style={styles.textPressable}>Alterar Perfil</Text>
        </Pressable>      
      </View>
    </View>
  )
}


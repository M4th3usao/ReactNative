import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Profile(){
  return(
    <View style={styles.container}> 
      <Text style={styles.text}> Página de Perfil </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItens: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})
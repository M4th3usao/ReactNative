import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Notification(){
  return(
    <View style={styles.container}> 
      <Text style={styles.text}> Notificações </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItens: 'center',
    textAlign: 'center',
    alignSelf: 'center,'
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})
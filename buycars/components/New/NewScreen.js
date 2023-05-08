import {View, Text, StyleSheet} from 'react-native';


export default function New(){
  return(
    <View style={styles.container}> 
      <Text style={styles.text}> Página de New </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItens:'center', 
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
})
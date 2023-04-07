import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  content:{
    height: 450,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'white',
  },
  input:{
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#222',
    marginTop: 20,
    fontSize: 16,
    padding: 10,
    backgroundColor: 'white'
  },
  button:{
    borderRadius: 5,
    margin: 25
  },
  textoBox:{
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: 'white'
  },
  titulo:{
    fontSize: 18,
    color: 'white'
  }
}) 

export {styles};
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 2,
    padding: 50
  },
  button:{
    alignSelf: 'center',
    marginTop: 20,
    width: 150
  },
  texto:{
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#8d2dd3'
  }
});

export {styles};
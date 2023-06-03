import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    padding: 16,
    flex: 1, 
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1C1A'
  },
  title:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content:{
    width: 350,
    height: 190,

    alignItems: 'center',

    padding: 16,
    borderRadius: 8,
    backgroundColor: 'gray'
  },
  pickerContent:{
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  picker:{
    width: 260,
    height: 30,

    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    backgroundColor: '#fff',
  }, 
  pressable:{
    width: 180,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B2B2B',
  },
  textPressable:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E25A17',
  },  
  list:{
    width: 350,
    height: 200,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  inputContent:{
    width: 350,
    height: 230,
  
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  input:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10
  },
});

export {styles};
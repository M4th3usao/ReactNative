import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
    padding: 16,
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#1F1C1A'
},
card: {
    width: 350,
    height: 450,
    flexDirection: 'column',

    padding: 16,
    margin: 8,
    fontSize: 16,
    alignItems: 'center',

    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
  
});

export {styles};
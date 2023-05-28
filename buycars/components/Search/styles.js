import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        // alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
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
      cep:{
        width: 280,
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
      },
      picker:{
        marginTop: 10,
        fontSize: 14,
        width: 240,
        borderRadius: 5,
        textAlign: 'center'
      }
});

export {styles};
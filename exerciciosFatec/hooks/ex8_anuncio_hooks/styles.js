import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'start',
  },
  scrollView:{
    alignSelf: 'center',
    justifyContent: 'center',
    width: 320,
    height: 280,
    borderRadius: 5,
    flexGrow : 1, 
  },  
  box: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRidus: 5,
    borderColor: 'black',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    height: 240,
    width: 150,
  },
  texto: {
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
  },
});


  export {styles};
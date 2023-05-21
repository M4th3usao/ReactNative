import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  container:{
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: '#CCE5FF'
  },
  card:{
    width: 250,
    height: 350,
    flexDirection: 'row',
      
    padding: 6,
    margin: 8,
    fontSize: 16,
    // alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#FFF',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1
      }
  },
  contentCard:{
    marginTop: 16
  },
  img:{
    height: 180,
    width: 220,

    marginBottom: 16,
  }

});

export {HomeStyles};
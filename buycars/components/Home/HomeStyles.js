import {StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  container:{
    padding: 16,
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1C1A'
  },
  card:{
    height: 400,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontSize: 16,
    alignItems: 'baseline',
    borderRadius: 8,
    backgroundColor: '#FFF',
    backgroundColor: 'gray',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 1
      }
  },
  contentCard:{
    textAlign: 'center',
  },
  img:{
    height: 225,
    width: 350,
    borderRadius: 8,
  },
  contentText:{
    alignItems: 'center',
    margin: 8,
  },
  btnDetalhes:{
    width: 180,
    height: 50,
    margin: 8,
    borderRadius: 8,

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  btnDetalhesText:{
    padding: 16,
    borderRadius: 8,

    color: '#E25A17',
    fontWeight: 'bold',
    backgroundColor: '#2B2B2B',
  }

});

export {HomeStyles};
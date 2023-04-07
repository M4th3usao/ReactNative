import {StyleSheet} from 'react-native'

const HeaderHeight = '50px';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    width: '100%',
    backgroundColor: 'black',
    overflowY: 'hidden',
    // maxHeight: '600px'
  },
  TabHeaderView:{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: HeaderHeight,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',  
    backgroundColor: '#12182C',
  },
  texto:{
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center'
  },
  ScrollViewStyles: {
    marginTop: HeaderHeight,
    height: '500px'
  },
});

export {styles};
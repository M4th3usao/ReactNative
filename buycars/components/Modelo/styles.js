import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
    flex: 1,
    padding: 16,
},
textContent:{
    width: 350,
    height: 30,
    border: 2,
    margin: 2,
    borderColor: 'black',
    backgroundColor: '#fff'
},
rowContent:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},

});

export {styles};
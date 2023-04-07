import React, {Component} from 'react';

import {View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './src/Pessoa'

class App extends Component{
    render(){
      return(
        <View>
          <Pessoa/>
        </View>
      );
    }
 
}
export default App;
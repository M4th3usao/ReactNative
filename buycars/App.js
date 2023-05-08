import {StyleSheet} from 'react-native'
import Routes from './Routes'
import {NavigationContainer} from '@react-navigation/native'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

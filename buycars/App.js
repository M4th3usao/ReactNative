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


// API:
// https://documenter.getpostman.com/view/7064033/SWT5jMGk#0efe83b5-d24c-40f9-b85d-d83426953a5f
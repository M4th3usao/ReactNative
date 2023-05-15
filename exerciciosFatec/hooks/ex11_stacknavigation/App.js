import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './src/pages/Home';
import Informations from './src/pages/Informations';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Informations" component={Informations} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

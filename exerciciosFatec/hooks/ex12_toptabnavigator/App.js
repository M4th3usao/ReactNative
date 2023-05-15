import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';


const Tab = createMaterialTopTabNavigator();


// const icons = {
//   Pessoal:{
//     name: 'home',
//   },
//   Formacao:{
//     name: 'user',
//   },
//   Experiencia:{
//     name: 'mobile',
//   }
// }


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={ ({route}) => ({
      //   tabBarIcon: ({ color, size }) => {
      //     const { name } = icons[route.name]
      //     return <Entypo name={name} color={color} size={size} />
      //   }
      // }) }
      >
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
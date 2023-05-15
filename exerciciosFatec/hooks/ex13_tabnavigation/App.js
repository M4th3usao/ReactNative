import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import Home from './pages/Home';
import Account from './pages/Account';
import Contact from './pages/Contact';


const Tab = createBottomTabNavigator();


const icons = {
  Home:{
    name: 'home',
  },
  People:{
    name: 'user',
  },
  Contact:{
    name: 'mobile',
  }
}


export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Entypo name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='People' component={Account} />
        <Tab.Screen name='Contact' component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


import Home from './components/Home/HomeScreen';
import New from './components/New/NewScreen';
import Notification from './components/Notification/NotificationScreen';
import Profile from './components/Profile/Profile';
import Search from './components/Search/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import ButtonNew from './components/buttonNew';
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: '#34BBF5',
        activeTintColor: '#345AF5',
        tabStyle: {
          border: 'transparent',
          backgroundColor: '#000',
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#000'},
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerTintColor: '#fff'
        }}
        
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew size={size} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

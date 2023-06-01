import Home from './components/Home/HomeScreen';
import Profile from './components/Profile/Profile';
import Search from './components/Search/SearchScreen';
import Register from './components/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveTintColor: '#345AF5',
        tabBarActiveTintColor: '#E25A17',
        tabBarItemStyle: {
          borderTopColor: 'transparent',
          backgroundColor: '#000',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarStyle:[
          {
            display: "flex",
            borderTopColor: 'transparent',
          },
          null
        ]
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {backgroundColor: '#000'},
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
          headerTintColor: '#fff'
        }}
        
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator >
  );
}

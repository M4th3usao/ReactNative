import Routes from './Routes'
import Register from './components/Register';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Routes' 
          component={Routes}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Register' 
          component={Register}
          options={{
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>    
    </NavigationContainer>
  )
}


// API:
// https://documenter.getpostman.com/view/7064033/SWT5jMGk#0efe83b5-d24c-40f9-b85d-d83426953a5f
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './component/Login';
import Home from './component/Home';


const Stack = createNativeStackNavigator();


// function MyStack(){
//   return(
    
    
//   );

// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Signup from './Signup';
const stack=createNativeStackNavigator();
export default function App(){
// const App=() =>{
  return (
    <NavigationContainer>
<stack.Navigator initialRouteName='Home'>
<stack.Screen name='Home' component={Home}/>
<stack.Screen name='Signup' component={Signup}/>
</stack.Navigator>
    </NavigationContainer>
  )
};


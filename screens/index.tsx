import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'
import { GetStarted } from './GetStarted'
import { Login } from './Login'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const StackCake = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

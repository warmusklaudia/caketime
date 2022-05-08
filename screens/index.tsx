import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { colors } from '../styling/colors'
import { MyTabs } from './BottomTab'
import { GetStarted } from './GetStarted'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Welcome } from './Welcome'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { AuthContext } from '../utils/AuthContext'
import { useState } from 'react'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const MyStack = () => {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="TabNav" component={MyTabs} />
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}

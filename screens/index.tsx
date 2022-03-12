import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { SafeAreaView } from 'react-native'
import { MyTabs } from './BottomTab'
import { GetStarted } from './GetStarted'
import { Login } from './Login'
import { Welcome } from './Welcome'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="TabNav" component={MyTabs} />
    </Stack.Navigator>
  )
}

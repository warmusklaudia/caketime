import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyStack } from './screens'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

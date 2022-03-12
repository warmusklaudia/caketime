import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyStack } from './screens'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StackCake } from './screens'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackCake />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyStack } from './screens'

export default function App() {
  let [fontsLoaded] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

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
import { LogBox } from 'react-native'

export default function App() {
  LogBox.ignoreLogs([
    `AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage`,
  ])
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

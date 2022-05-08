import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { HomeScreen } from '../Home'
import DetailsHome from './DetailsHome'
import StepsHome from './StepsHome'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const HomeTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsHome" component={DetailsHome} />
      <Stack.Screen name="StepsHome" component={StepsHome} />
    </Stack.Navigator>
  )
}

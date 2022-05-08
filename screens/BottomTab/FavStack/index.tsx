import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { FavoritesScreen } from '../Favorite'
import DetailsFav from './DetailsFav'
import StepsFav from './StepsFav'

const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const FavTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
      <Stack.Screen name="DetailsFav" component={DetailsFav} />
      <Stack.Screen name="StepsFav" component={StepsFav} />
    </Stack.Navigator>
  )
}

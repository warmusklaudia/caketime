import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { FavoritesScreen } from '../Favorite'

const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const FavTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
    </Stack.Navigator>
  )
}

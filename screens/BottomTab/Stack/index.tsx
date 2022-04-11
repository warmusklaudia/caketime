import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { HomeScreen } from '../Home'
import { SearchScreen } from '../Search'
import DetailsRecipe from './DetailsRecipe'
import Steps from './Steps'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const MyStackInTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsRecipe" component={DetailsRecipe} />
      <Stack.Screen name="Steps" component={Steps} />
    </Stack.Navigator>
  )
}

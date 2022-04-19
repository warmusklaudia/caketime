import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { OwnRecipesScreen } from '../OwnRecipes'
import AddRecipe from './AddRecipe'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const OwnRecipesTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="OwnRecipes" component={OwnRecipesScreen} />
      <Stack.Screen name="AddRecipe" component={AddRecipe} />
    </Stack.Navigator>
  )
}

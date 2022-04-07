import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { HomeScreen } from '../Home'
import DetailsSpecialRecipe from './DetailsSpecialRecipe'
const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const MyStackInTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailsSpecialRecipe"
        component={DetailsSpecialRecipe}
      />
    </Stack.Navigator>
  )
}
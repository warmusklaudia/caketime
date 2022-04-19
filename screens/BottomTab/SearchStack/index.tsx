import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { SearchScreen } from '../Search'
import DetailsSearch from './DetailsSearch'
import StepsSearch from './StepsSearch'

const Stack = createStackNavigator()
const screenOptions: StackNavigationOptions = {
  headerShown: false,
}

export const SearchTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="DetailsSearch" component={DetailsSearch} />
      <Stack.Screen name="StepsSearch" component={StepsSearch} />
    </Stack.Navigator>
  )
}

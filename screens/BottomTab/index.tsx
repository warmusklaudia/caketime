import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import { MyAccountScreen } from './MyAccount'
import { HomeTab } from './HomeStack'
import { SearchTab } from './SearchStack'
import { FavTab } from './FavStack'
import { OwnRecipesTab } from './MyRecipeStack'

const Tab = createMaterialBottomTabNavigator()

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Recipe"
      activeColor={colors.alpha}
      barStyle={{ backgroundColor: colors.white }}
      inactiveColor={colors.neutral}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My recipes"
        component={OwnRecipesTab}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chef-hat" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My account"
        component={MyAccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

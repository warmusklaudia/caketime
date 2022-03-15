import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import { HomeScreen } from './Home'
import { SearchScreen } from './Search'
import { FavoritesScreen } from './Favorite'
import { OwnRecipesScreen } from './OwnRecipes'
import { MyAccountScreen } from './MyAccount'

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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My recipes"
        component={OwnRecipesScreen}
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

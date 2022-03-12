import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  )
}

export const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
    </View>
  )
}

export const FavouritesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favourites</Text>
    </View>
  )
}

export const OwnRecipesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Own recipes</Text>
    </View>
  )
}

export const MyAccountScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My account</Text>
    </View>
  )
}

export const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={26} color="#5F5F5F" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="magnify" size={26} color="#5F5F5F" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="heart" size={26} color="#5F5F5F" />
          ),
        }}
      />
      <Tab.Screen
        name="My recipes"
        component={OwnRecipesScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="chef-hat" size={26} color="#5F5F5F" />
          ),
        }}
      />
      <Tab.Screen
        name="My account"
        component={MyAccountScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={26} color="#5F5F5F" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

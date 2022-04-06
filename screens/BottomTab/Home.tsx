import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { BlurView } from 'expo-blur'
import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import TopCategories from '../../components/TopCategories'
import Recipe from '../../interfaces/Recipe'
import { styles, typo } from '../../styling/caketime'
import { getRandomRecipe } from '../../utils/GetRandomRecipe'

export const HomeScreen = () => {
  const { navigate } =
    useNavigation<MaterialBottomTabNavigationProp<ParamListBase>>()
  const [r, setR] = useState<Recipe>(getRandomRecipe)

  const pickNewRecipe = () => {
    const newRecipe: Recipe = getRandomRecipe(r)
    setR(newRecipe)
  }
  return (
    <View style={styles.containerWelcome}>
      <View style={{ marginBottom: 16 }}>
        <Text style={typo.welcome}>Hello, Klaudia!</Text>
        <Text style={typo.subWelcome}>What would you like to bake today?</Text>
      </View>
      <Text style={typo.category}>Top categories</Text>
      <View style={styles.categoryHolder}>
        <TopCategories />
      </View>
      <Text style={typo.category}>Special for you</Text>
      <View style={styles.specialsHolder}>
        <TouchableOpacity onPress={() => navigate('Stack')}>
          <View style={styles.specials}>
            <ImageBackground
              style={styles.imgBackgroundRecipe}
              resizeMode="cover"
              source={{ uri: r.img }}
            >
              <BlurView intensity={40} tint="dark">
                <Text style={typo.titleRecipe}>{r.name}</Text>
              </BlurView>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

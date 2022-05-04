import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { BlurView } from 'expo-blur'
import { useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import TopCategories from '../../components/TopCategories'
import Recipe from '../../interfaces/Recipe'
import { styles, typo } from '../../styling/caketime'
import { useAuth } from '../../utils/AuthContext'
import { endpoint } from '../../utils/Backend'
import { getRandomRecipe } from '../../utils/GetRandomRecipe'

export const HomeScreen = () => {
  const { user } = useAuth()
  const [token, setToken] = useState()
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [r, setR] = useState<Recipe>(getRandomRecipe)

  // const getToken = async () => {
  //   const t: string | undefined = await user?.getIdToken()
  //   //@ts-ignore
  //   if (t) setToken(t)
  //   console.log(t)
  // }
  // getToken()

  return (
    <View style={styles.containerWelcome}>
      <View style={{ marginBottom: 16 }}>
        <Text style={typo.welcome}>Hello, {user?.displayName}</Text>
        <Text style={typo.subWelcome}>What would you like to bake today?</Text>
      </View>
      <Text style={typo.category}>Top categories</Text>
      <View style={styles.categoryHolder}>
        <TopCategories />
      </View>
      <Text style={typo.category}>Special for you</Text>
      <View style={styles.specialsHolder}>
        <TouchableOpacity
          onPress={() => navigate('DetailsHome', { payload: r })}
        >
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

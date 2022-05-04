import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Recipe from '../interfaces/Recipe'
import { sizing } from '../styling/caketime'
import { stylesRecipe } from '../styling/listing'
import { useAuth } from '../utils/AuthContext'
import { endpoint } from '../utils/Backend'
import { getWithAuth } from '../utils/data-acces'

export const RecipeListing = ({
  route,
  screen,
}: {
  route: string
  screen: string
}) => {
  const [data, setData] = useState([])

  const { user } = useAuth()

  const getData = async () => {
    const t: string | undefined = await user?.getIdToken()
    const uid: string | undefined = await user?.uid
    getWithAuth(`${endpoint}users/${route}/${uid}`, t).then((recipes) => {
      route == 'favorite'
        ? setData(recipes.favoriteRecipes)
        : setData(recipes.myRecipes)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const renderItem = ({ item }: { item: Recipe }) => {
    return (
      <TouchableOpacity
        style={stylesRecipe.container}
        onPress={() => navigate(screen, { payload: item })}
      >
        <View style={stylesRecipe.recipeHolder}>
          <Image style={stylesRecipe.img} source={{ uri: item.img }} />
          <Text style={stylesRecipe.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, marginTop: sizing.baseLine * 2, width: '90%' }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        //@ts-ignore
        keyExtractor={(item) => item.recipeId}
      />
    </View>
  )
}

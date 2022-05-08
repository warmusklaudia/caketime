import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Recipe from '../interfaces/Recipe'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { endpoint } from '../utils/Backend'
import { useAuth } from '../utils/AuthContext'
import { get, getWithAuth } from '../utils/data-acces'
import { stylesRecipe } from '../styling/listing'

export default ({ cat }: { cat?: string | undefined }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [text, setText] = useState<string | undefined>(cat)
  const [data, setData] = useState([])

  const { user } = useAuth()

  const getData = async () => {
    const t: string | undefined = await user?.getIdToken()
    getWithAuth(`${endpoint}recipes/owner/1`, t).then((recipes) =>
      setData(recipes),
    )
  }

  useEffect(() => {
    setText(cat)
    getData()
  }, [cat])

  const filterdData = text
    ? data.filter((item: Recipe) => {
        const itemData =
          item.name.toUpperCase() + item.category.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
    : data

  const renderItem = ({ item }: { item: Recipe }) => {
    return (
      <TouchableOpacity
        style={stylesRecipe.container}
        onPress={() => navigate('DetailsSearch', { payload: item })}
      >
        <View style={stylesRecipe.recipeHolder}>
          <Image style={stylesRecipe.img} source={{ uri: item.img }} />
          <Text style={stylesRecipe.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <View style={stylesRecipe.inputSearchSection}>
        <MaterialCommunityIcons
          name="magnify"
          color={colors.neutral_dark}
          size={24}
          style={{ marginRight: 4 }}
        />
        <TextInput
          style={{ flex: 1 }}
          onChangeText={(str) => {
            setText(str)
          }}
          value={text}
          placeholder="Search"
          clearButtonMode="always"
        />
      </View>
      <FlatList
        data={filterdData}
        renderItem={renderItem}
        //@ts-ignore
        keyExtractor={(item) => item.recipeId}
      />
    </View>
  )
}

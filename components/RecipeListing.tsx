import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useState } from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import recipes from '../data/recipes.json'
import Recipe from '../interfaces/Recipe'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [text, setText] = useState('')
  const filterdData = text
    ? recipes.filter((item) => {
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
    : recipes

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
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Search"
          clearButtonMode="always"
        />
      </View>
      <FlatList
        data={filterdData}
        renderItem={renderItem}
        keyExtractor={(item) => item.recipeId}
      />
    </View>
  )
}

const stylesRecipe = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.alpha_light,
  },
  recipeHolder: {
    flexDirection: 'row',
    marginVertical: sizing.baseLine,
    alignItems: 'center',
  },
  name: {
    fontSize: sizing.baseLine * 2,
    marginHorizontal: sizing.baseLine * 5,
    letterSpacing: 2,
    color: colors.beta_dark,
  },
  img: {
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  inputSearchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.alpha_light,
    borderRadius: sizing.baseLine / 2,
    width: '90%',
    height: 5 * sizing.baseLine,
    padding: sizing.baseLine,
    marginBottom: sizing.baseLine * 2,
  },
})

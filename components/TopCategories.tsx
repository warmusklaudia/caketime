import {
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'
import Category from '../interfaces/Category'
import categories from '../data/categories.json'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { useEffect, useState } from 'react'
export default () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // const fetchData = async () => {
  //   const resp = await fetch('http://192.168.0.194:3000/categories')
  //   const data = await resp.json()
  //   setData(data)
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const { navigate } =
    useNavigation<MaterialBottomTabNavigationProp<ParamListBase>>()
  const renderItem = ({ item }: { item: Category }) => {
    console.log(data)
    return (
      <TouchableOpacity
        style={styles.catHolder}
        onPress={() => navigate('Search')}
      >
        <Text style={styles.title}>{item.name}</Text>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.url }}
        />
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  catHolder: {
    ...Platform.select({
      ios: {
        shadowColor: colors.alpha_dark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
      },
    }),
    width: 110,
    height: 130,
    borderWidth: 1,
    borderColor: colors.neutral_light,
    borderRadius: sizing.baseLine * 1.5,
    marginVertical: sizing.baseLine,
    marginHorizontal: sizing.baseLine / 2,
  },
  title: {
    paddingTop: sizing.baseLine,
    color: colors.neutral_dark,
    letterSpacing: 1,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica Neue',
      },
    }),
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

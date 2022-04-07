import {
  FlatList,
  Image,
  ImageBackground,
  InteractionManager,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'
import Category from '../interfaces/Category'
import categories from '../data/categories.json'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
export default () => {
  const { navigate } =
    useNavigation<MaterialBottomTabNavigationProp<ParamListBase>>()
  const renderItem = ({ item }: { item: Category }) => {
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

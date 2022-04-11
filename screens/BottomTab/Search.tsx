import { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { sizing, styles } from '../../styling/caketime'
import { colors } from '../../styling/colors'
import Picker from '../../components/Picker'
import RecipeListing from '../../components/RecipeListing'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { Picker } from '@react-native-picker/picker'

export const SearchScreen = () => {
  const SearchBar = () => {
    const [search, setSearch] = useState('')
    const onChangeSearch = () => setSearch('x')
    return (
      <View style={stylesSearch.inputSearchSection}>
        <MaterialCommunityIcons
          name="magnify"
          color={colors.neutral_dark}
          size={24}
          style={{ marginRight: 4 }}
        />
        <TextInput
          style={{ flex: 1 }}
          onChangeText={(str) => setSearch(str)}
          value={search}
          placeholder="Search"
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* <SearchBar /> */}
      {/* <Picker /> */}
      <RecipeListing />
    </View>
  )
}

const stylesSearch = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4 * sizing.baseLine,
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

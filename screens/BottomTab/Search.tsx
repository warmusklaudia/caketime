import { useState } from 'react'
import { TextInput, SafeAreaView, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../../styling/caketime'
import { colors } from '../../styling/colors'

export const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const onChangeSearch = () => setSearch('x')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputSearchSection}>
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
    </SafeAreaView>
  )
}

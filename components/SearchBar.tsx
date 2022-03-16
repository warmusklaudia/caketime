import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../styling/colors'
import { sizing } from '../styling/caketime'
import { useState } from 'react'

export default () => {
  const [search, setSearch] = useState('')
  const onChangeSearch = () => setSearch('x')
  return (
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
  )
}

export const styles = StyleSheet.create({
  inputSearchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral,
    borderRadius: sizing.baseLine / 2,
    width: '80%',
    height: 5 * sizing.baseLine,
    padding: sizing.baseLine,
  },
})

import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../styling/colors'
import { sizing } from '../styling/caketime'
import { useEffect, useState } from 'react'

export default () => {
  const [search, setSearch] = useState('')
  const [fullData, setFullData] = useState([])
  useEffect(() => {
    setData[]
  })
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
        onChangeText={str => handleSearch(txt)}
        value={search}
        placeholder="Search"
        clearButtonMode="always"
      />
    </View>
  )
}

export const styles = StyleSheet.create({
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

import { useState } from 'react'
import { TextInput, SafeAreaView, View } from 'react-native'
import { styles } from '../../styling/caketime'
import { colors } from '../../styling/colors'
import SearchBar from '../../components/SearchBar'
import Picker from '../../components/Picker'
// import { Picker } from '@react-native-picker/picker'

export const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Picker />
    </SafeAreaView>
  )
}

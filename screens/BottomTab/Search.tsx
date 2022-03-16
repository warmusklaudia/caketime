import { useState } from 'react'
import { TextInput, SafeAreaView, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from '../../styling/caketime'
import { colors } from '../../styling/colors'
import SearchBar from '../../components/SearchBar'
// import { Picker } from '@react-native-picker/picker'

export const SearchScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cupcakes')

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <Picker
        style={styles.picker}
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
      >
        <Picker.Item enabled={false} label="Select category" />
        <Picker.Item label="Muffins" value="Muffins" />
        <Picker.Item label="Cakes" value="Cakes" />
      </Picker>
    </SafeAreaView>
  )
}

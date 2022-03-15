import { useState } from 'react'
import { TextInput, SafeAreaView, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../../styling/caketime'
import { colors } from '../../styling/colors'
// import { Picker } from '@react-native-picker/picker'

export const SearchScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cupcakes')
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

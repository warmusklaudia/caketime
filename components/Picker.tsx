import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Platform, StyleSheet } from 'react-native'
import categories from '../data/categories.json'

export default () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedCategory}
      onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
    >
      <Picker.Item enabled={false} label="Select category" />
      <Picker.Item label="Cakes" value="Cakes" />
      <Picker.Item label="Muffins" value="Muffins" />
      <Picker.Item label="Meringues" value="Meringues" />
      <Picker.Item label="Others" value="Others" />
    </Picker>
  )
}

const styles = StyleSheet.create({
  picker: {
    ...Platform.select({
      ios: {
        marginTop: -10,
        width: '70%',
      },
      android: {
        width: '50%',
      },
    }),
  },
})

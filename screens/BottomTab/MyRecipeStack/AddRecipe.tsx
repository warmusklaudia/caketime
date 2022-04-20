import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default () => {
  return (
    <View>
      <Text>Add new recipe</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Time" />
      <TextInput placeholder="Category" />
      <TextInput placeholder="Servings" />
      <TextInput placeholder="difficulty" />
    </View>
  )
}

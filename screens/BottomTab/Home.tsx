import { Text, View } from 'react-native'
import { styles, typo } from '../../styling/caketime'

export const HomeScreen = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={typo.title}>Hello, Klaudia!</Text>
      <Text style={typo.subtitle}>What would you like to bake today?</Text>
    </View>
  )
}

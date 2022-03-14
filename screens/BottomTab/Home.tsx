import { Text, View } from 'react-native'
import { styles, typo } from '../../styling/caketime'

export const HomeScreen = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={typo.welcome}>Hello, Klaudia!</Text>
      <Text style={typo.subWelcome}>What would you like to bake today?</Text>
      <Text style={typo.category}>Top categories</Text>
      <View style={styles.categorySection}></View>
      <Text style={typo.category}>Specials for you</Text>
      <View style={styles.specialSection}></View>
    </View>
  )
}

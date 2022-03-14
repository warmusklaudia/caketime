import { Text, View } from 'react-native'
import { styles, typo } from '../../styling/caketime'

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>My favorite recipes</Text>
    </View>
  )
}

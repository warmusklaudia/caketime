import { Text, View } from 'react-native'
import { RecipeListing } from '../../components/RecipeListing'
import { styles, typo } from '../../styling/caketime'

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>My favorite recipes</Text>
      <RecipeListing route="favorite" screen="DetailsFav" />
    </View>
  )
}

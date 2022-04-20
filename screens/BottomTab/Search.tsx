import { View } from 'react-native'
import { styles } from '../../styling/caketime'
import RecipeListing from '../../components/RecipeListing'

export const SearchScreen = ({ route }: { route: any }) => {
  return (
    <View style={styles.container}>
      <RecipeListing cat={route.params.name} />
    </View>
  )
}

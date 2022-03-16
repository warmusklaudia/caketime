import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sizing, styles, typo } from '../../styling/caketime'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import buttons from '../../styling/buttons'

export const OwnRecipesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>My own recipes</Text>
      <TouchableOpacity style={buttons.buttonAdd}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="plus"
            color={colors.white}
            size={24}
            style={{ marginRight: 4 }}
          />
          <Text style={typo.textButton}>ADD NEW RECIPE</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

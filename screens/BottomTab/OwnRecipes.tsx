import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { sizing, styles, typo } from '../../styling/caketime'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import buttons from '../../styling/buttons'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RecipeListing } from '../../components/RecipeListing'

export const OwnRecipesScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>My recipes</Text>
      <TouchableOpacity
        style={buttons.button}
        onPress={() => navigate('AddRecipe')}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="plus"
            color={colors.white}
            size={24}
            style={{ marginRight: 4 }}
          />
          <Text style={[typo.textButton, { paddingTop: 2.5 }]}>
            ADD NEW RECIPE
          </Text>
        </View>
      </TouchableOpacity>
      <RecipeListing route="my" screen="DetailsOwn" />
    </View>
  )
}

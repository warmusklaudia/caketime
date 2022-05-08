import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'

export default () => {
  return (
    <TouchableOpacity>
      <View style={styles.specialsHolder}>
        <Text style={styles.title}>Pancakes</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  specialsHolder: {
    width: 340,
    height: 150,
    borderWidth: 1,
    borderColor: colors.alpha_dark,
    borderRadius: sizing.baseLine,
    marginVertical: sizing.baseLine,
    marginHorizontal: sizing.baseLine / 2,
  },
  title: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica Neue',
      },
    }),
  },
})

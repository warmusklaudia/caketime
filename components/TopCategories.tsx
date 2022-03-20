import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'

export default ({ title }: { title: string }) => {
  return (
    <TouchableOpacity>
      <View style={styles.catHolder}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  catHolder: {
    width: 110,
    height: 130,
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

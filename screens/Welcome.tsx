import { Text, View } from 'react-native'
import { styles } from '../styling/caketime'
import { MyTabs } from './BottomTab'

export const Welcome = () => {
  return (
    <View style={styles.containerWelcome}>
      <MyTabs />
    </View>
  )
}

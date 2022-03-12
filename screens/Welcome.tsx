import { Text, View } from 'react-native'
import { styles } from '../styling/caketime'
import { MyTabs } from './BottomTab'

export const Welcome = () => {
  return (
    <View style={styles.containerWelcome}>
      {/* <Text style={styles.title}>Hello, Klaudia!</Text>
      <Text style={styles.subtitle}>What would you like to bake today?</Text> */}
      <MyTabs />
    </View>
  )
}

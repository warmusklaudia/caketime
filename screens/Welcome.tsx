import { UserCredential } from 'firebase/auth'
import { Text, View } from 'react-native'
import { styles } from '../styling/caketime'
import { useAuth } from '../utils/AuthContext'
import { MyTabs } from './BottomTab'

export const Welcome = () => {
  return (
    <View style={styles.containerWelcome}>
      <MyTabs />
    </View>
  )
}

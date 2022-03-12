import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styling/caketime'
import { Login } from './Login'

export const GetStarted = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  return (
    <View style={styles.buttonHolder}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigate('Login')
        }}
      >
        <Text style={styles.textButton}>Get started</Text>
      </TouchableOpacity>
    </View>
  )
}

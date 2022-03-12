import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { styles } from '../styling/caketime'

export const Login = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [show])

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FloatingLabelInput
          label={'Email'}
          value={email}
          onChangeText={(email) => setEmail(email)}
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: '#949494',
            colorFocused: '#5F5F5F',
          }}
        />
      </View>
      <View style={styles.label}>
        <FloatingLabelInput
          label={'Password'}
          isPassword
          value={pass}
          onChangeText={(pass) => setPass(pass)}
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: '#949494',
            colorFocused: '#5F5F5F',
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Welcome')}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import buttons from '../styling/buttons'
import { styles, typo } from '../styling/caketime'
import { colors } from '../styling/colors'

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
    <View style={styles.containerStart}>
      <View style={styles.label}>
        <FloatingLabelInput
          label={'Email'}
          value={email}
          onChangeText={(email) => setEmail(email)}
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: colors.neutral,
            colorFocused: colors.neutral_dark_x,
          }}
          keyboardType="email-address"
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
            colorBlurred: colors.neutral,
            colorFocused: colors.neutral_dark_x,
          }}
        />
      </View>
      <TouchableOpacity style={buttons.buttonLogin}>
        <Text style={typo.textButton}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttons.subButton}
        onPress={() => navigate('SignUp')}
      >
        <Text style={typo.textSubButton}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttons.subButton}
        onPress={() => navigate('Welcome')}
      >
        <Text style={typo.textSubButton}>SKIP</Text>
      </TouchableOpacity>
    </View>
  )
}

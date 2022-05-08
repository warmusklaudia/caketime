import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { FormErrors } from '../interfaces/FormErrors'
import buttons from '../styling/buttons'
import { styles, typo } from '../styling/caketime'
import { colors } from '../styling/colors'
import { useAuth } from '../utils/AuthContext'
import { auth } from '../utils/firebase'

export const Login = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [errors, setErrors] = useState<FormErrors>({
    generic: { title: '', message: '' },
  })
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { setUser } = useAuth()

  const SignIn = () => {
    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password,
    )
      .then((u: UserCredential) => {
        setUser(u.user)
        setUserCredentials({
          email: '',
          password: '',
        })
        navigate('Welcome')
      })
      .catch((err) => {
        setErrors((currentErrors: FormErrors) => {
          currentErrors.generic = {
            title: err.code,
            message: err.message,
          }
          return { ...currentErrors }
        })

        console.dir(err)
      })
  }

  return (
    <View style={styles.containerStart}>
      {errors.generic.title && errors.generic.message ? (
        <Text style={{ color: colors.error }}>
          {errors.generic.title.substring(5).charAt(0).toUpperCase() +
            errors.generic.title.slice(6).replaceAll('-', ' ')}
        </Text>
      ) : (
        <Text>{errors.generic.message}</Text>
      )}
      <View style={styles.label}>
        <FloatingLabelInput
          label={'Email'}
          value={userCredentials.email}
          onChangeText={(email) =>
            setUserCredentials((u) => {
              u.email = email
              return { ...u }
            })
          }
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
          showPasswordImageStyles={{ tintColor: colors.beta_dark }}
          value={userCredentials.password}
          onChangeText={(pass) =>
            setUserCredentials((u) => {
              u.password = pass
              return { ...u }
            })
          }
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: colors.neutral,
            colorFocused: colors.neutral_dark_x,
          }}
        />
      </View>
      <TouchableOpacity style={buttons.buttonLogin} onPress={SignIn}>
        <Text style={typo.textButton}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 14 }}>OR</Text>
      <TouchableOpacity
        style={buttons.subButton}
        onPress={() => navigate('SignUp')}
      >
        <Text style={typo.textSubButton}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  )
}

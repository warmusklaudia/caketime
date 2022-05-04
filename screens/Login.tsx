import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import buttons from '../styling/buttons'
import { styles, typo } from '../styling/caketime'
import { colors } from '../styling/colors'
import { useAuth } from '../utils/AuthContext'
import { auth } from '../utils/firebase'

export const Login = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  // const [email, setEmail] = useState('')
  // const [pass, setPass] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const [userCredentials, setUserCredentials] = useState({
    email: 'test@gmail.com',
    password: 'test123',
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
        setError(err.toString())
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [show])

  const showError = () => {
    if (error === 'FirebaseError: Firebase: Error (auth/invalid-email).') {
      return <Text style={{ color: 'red' }}>Invalid email</Text>
    }
    if (error === 'FirebaseError: Firebase: Error (auth/wrong-password).') {
      return <Text style={{ color: 'red' }}>Wrong password</Text>
    }
  }

  return (
    <View style={styles.containerStart}>
      {showError()}
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

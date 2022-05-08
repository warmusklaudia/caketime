import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
import { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { FormErrors } from '../interfaces/FormErrors'
import buttons from '../styling/buttons'
import { styles, typo } from '../styling/caketime'
import { colors } from '../styling/colors'
import { useAuth } from '../utils/AuthContext'
import { endpoint } from '../utils/Backend'
import { auth } from '../utils/firebase'

export const SignUp = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<FormErrors>({
    generic: { title: '', message: '' },
  })

  const [name, setName] = useState<string>()
  const { setUser } = useAuth()

  const sendUserToBackend = (uid: string) => {
    const data = {
      Email: newUser.email,
      Password: newUser.password,
      DisplayName: name,
      UID: uid,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    fetch(`${endpoint}signup`, requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res))
  }

  const registerUser = (): void => {
    if (newUser.email && newUser.password && name) {
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((u: UserCredential) => {
          setUser(async () => {
            if (u.user) await updateProfile(u.user, { displayName: name })
            sendUserToBackend(u.user.uid)
            return u.user
          })

          setNewUser({
            email: '',
            password: '',
          })
          setName('')
        })
        .then(() => {
          Alert.alert('Account created successfully', 'You can now log in', [
            {
              text: 'Log in',
              onPress: () => navigate('Login'),
            },
          ])
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
    } else {
      Alert.alert('Something went wrong', 'You must complete all fields')
    }
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
          value={newUser.email}
          onChangeText={(email) =>
            setNewUser((u) => {
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
          label={'Name'}
          value={name}
          onChangeText={(name) => {
            setName(name)
          }}
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: colors.neutral,
            colorFocused: colors.neutral_dark_x,
          }}
        />
      </View>
      <View style={styles.label}>
        <FloatingLabelInput
          label={'Password'}
          isPassword
          showPasswordImageStyles={{ tintColor: colors.beta_dark }}
          value={newUser.password}
          onChangeText={(pass) =>
            setNewUser((u) => {
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
      <TouchableOpacity style={buttons.buttonLogin} onPress={registerUser}>
        <Text style={typo.textButton}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  )
}

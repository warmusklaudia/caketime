import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
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

  const [name, setName] = useState<string>()
  const [uid, setUid] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { user, setUser } = useAuth()

  const sendUserToBackend = () => {
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
    if (newUser.email && newUser.password) {
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((u: UserCredential) => {
          setUser(async () => {
            if (u.user) await updateProfile(u.user, { displayName: name })
            setUid(() => u.user.uid)
            return u.user
          })
          sendUserToBackend()
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
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'destructive',
            },
          ])
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  return (
    <View style={styles.containerStart}>
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
      {/* <View style={styles.label}>
        <FloatingLabelInput
          label={'Confirm password'}
          isPassword
          value={confirmPass}
          onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
          containerStyles={styles.containerStyles}
          customLabelStyles={{
            colorBlurred: colors.neutral,
            colorFocused: colors.neutral_dark_x,
          }}
        />
      </View> */}
      <TouchableOpacity style={buttons.buttonLogin} onPress={registerUser}>
        <Text style={typo.textButton}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  )
}

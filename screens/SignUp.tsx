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
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import buttons from '../styling/buttons'
import { styles, typo } from '../styling/caketime'
import { colors } from '../styling/colors'
import { useAuth } from '../utils/AuthContext'
import { auth } from '../utils/firebase'

export const SignUp = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()

  const [newUser, setNewUser] = useState({
    email: 'test@test.com',
    password: 'test123',
  })

  const [name, setName] = useState<string>()

  const { user, setUser } = useAuth()

  const registerUser = (): void => {
    if (newUser.email && newUser.password) {
      createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((u: UserCredential) => {
          setUser(async () => {
            if (u.user) await updateProfile(u.user, { displayName: name })
            console.log('name is', name)
            console.log('display name is ', u.user?.displayName)
            console.log(u.user)
            return u.user
          })
          // setNewUser((u) => {
          //   u.email = ''
          //   u.password = ''
          //   return { ...u }
          // })
          // updateProfile(user.user, { displayName: name })
          // console.log('name is', name)
          // console.log('display name is ', user.user.displayName)
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

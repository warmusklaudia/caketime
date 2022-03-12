import React from 'react'
import { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { styles } from '../styling/caketime'

export const Login = () => {
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
          style={styles.label}
          label={'Email'}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.label}>
        <FloatingLabelInput
          style={styles.label}
          label={'Password'}
          isPassword
          value={pass}
          onChangeText={(pass) => setPass(pass)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

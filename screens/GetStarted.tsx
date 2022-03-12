import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styling/caketime'
import { Login } from './Login'

export const GetStarted = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.buttonHolder}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        <Text style={styles.textButton}>Get started</Text>
      </TouchableOpacity>
    </View>
  )
}

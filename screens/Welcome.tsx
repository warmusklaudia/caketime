import { User, UserCredential } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styling/caketime'
import { AuthContext, AuthContextType, useAuth } from '../utils/AuthContext'
import { MyTabs } from './BottomTab'

export const Welcome = () => {
  const { user, setUser } = useAuth()
  return (
    <View style={styles.containerWelcome}>
      <MyTabs />
    </View>
  )
}

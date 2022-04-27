import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { sizing } from '../styling/caketime'
import { colors } from '../styling/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useAuth } from '../utils/AuthContext'

export default ({
  route,
  icon,
  title,
}: {
  route: string
  icon: Function
  title: string
}) => {
  const { user, setUser } = useAuth()
  const { navigate } =
    useNavigation<MaterialBottomTabNavigationProp<ParamListBase>>()
  return (
    <TouchableOpacity
      style={styles.buttonProfile}
      onPress={() => {
        if (route == 'Login') {
          signOut(auth)
            .then(() => {
              setUser(null)
              navigate(route)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          navigate(route)
        }
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons
          name={icon()}
          color={colors.neutral_dark}
          size={26}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.textButtonProfile}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  textButtonProfile: {
    fontSize: 2.25 * sizing.baseLine,
    color: colors.neutral_dark_x,
  },
  buttonProfile: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.alpha_light,
    width: '100%',
    height: 7 * sizing.baseLine,
    justifyContent: 'center',
    padding: sizing.baseLine,
    marginTop: 2.5 * sizing.baseLine,
  },
})

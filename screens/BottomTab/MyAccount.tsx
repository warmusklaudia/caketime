import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles, typo } from '../../styling/caketime'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'

export const MyAccountScreen = () => {
  const { navigate } =
    useNavigation<MaterialBottomTabNavigationProp<ParamListBase>>()
  return (
    <View style={styles.container}>
      <View style={styles.imgHolder}>
        <Image
          style={styles.img}
          source={require('../../assets/img/20210424_153107.jpg')}
        />
      </View>
      <TouchableOpacity style={styles.buttonAddPhoto}>
        <MaterialCommunityIcons name="plus" size={26} />
      </TouchableOpacity>
      <Text style={typo.name}>Klaudia Warmus</Text>
      <Text style={typo.email}>klaudia.warmus@student.howest.be</Text>

      <TouchableOpacity
        style={styles.buttonProfile}
        onPress={() => navigate('Favorites')}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="heart"
            color={colors.neutral_dark}
            size={26}
            style={{ marginRight: 8 }}
          />
          <Text style={typo.textButtonProfile}>My favorite recipes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonProfile}
        onPress={() => navigate('My recipes')}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="chef-hat"
            color={colors.neutral_dark}
            size={26}
            style={{ marginRight: 8 }}
          />
          <Text style={typo.textButtonProfile}>My own recipes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonProfile}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="plus"
            color={colors.neutral_dark}
            size={26}
            style={{ marginRight: 8 }}
          />
          <Text style={typo.textButtonProfile}>Add recipe</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonProfile}
        onPress={() => navigate('Login')}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="logout"
            color={colors.neutral_dark}
            size={26}
            style={{ marginRight: 8 }}
          />
          <Text style={typo.textButtonProfile}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

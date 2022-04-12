import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles, typo } from '../../styling/caketime'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../styling/colors'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs'
import buttons from '../../styling/buttons'
import ProfileButtons from '../../components/ProfileButtons'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

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
      <TouchableOpacity style={buttons.buttonAddPhoto}>
        <MaterialCommunityIcons name="plus" size={26} />
      </TouchableOpacity>
      <Text style={typo.name}>Klaudia Warmus</Text>
      <Text style={typo.email}>klaudia.warmus@student.howest.be</Text>
      <ProfileButtons
        route="Favorites"
        icon={() => 'heart'}
        title="My favorite recipes"
      />
      <ProfileButtons
        route="My recipes"
        icon={() => 'chef-hat'}
        title="My recipes"
      />
      <ProfileButtons route="" icon={() => 'plus'} title="Add recipe" />
      <ProfileButtons route="Login" icon={() => 'logout'} title="Log out" />
    </View>
  )
}

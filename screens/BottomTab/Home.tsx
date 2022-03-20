import { ScrollView, Text, View } from 'react-native'
import Specials from '../../components/Specials'
import TopCategories from '../../components/TopCategories'
import { styles, typo } from '../../styling/caketime'

export const HomeScreen = () => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={typo.welcome}>Hello, Klaudia!</Text>
      <Text style={typo.subWelcome}>What would you like to bake today?</Text>
      <Text style={typo.category}>Top categories</Text>
      <View style={styles.categoryHolder}>
        <ScrollView horizontal={true}>
          <TopCategories title="Cream cakes" />
          <TopCategories title="Meringues" />
          <TopCategories title="Yeast pastries" />
          <TopCategories title="Others" />
        </ScrollView>
      </View>
      <Text style={typo.category}>Specials for you</Text>
      <ScrollView>
        <View style={styles.specialsHolder}>
          <Specials />
          <Specials />
          <Specials />
        </View>
      </ScrollView>
    </View>
  )
}

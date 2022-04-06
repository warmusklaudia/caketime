import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import buttons from '../../../styling/buttons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { sizing, styles } from '../../../styling/caketime'
import { colors } from '../../../styling/colors'
import { useState } from 'react'

export default ({ route }: { route: any }) => {
  const { payload } = route.params
  const [ingredients, setIngredients] = useState<any | undefined>()

  const showIngredients = (): JSX.Element[] => {
    const details: JSX.Element[] = []
    for (let i = 0; i < payload.ingredients.length; i++) {
      details.push(
        <Text>
          - {payload.ingredients[i].quantity} {payload.ingredients[i].name}
        </Text>,
      )
    }
    return details
  }

  return (
    <View style={styles.container}>
      <View style={stylesDetails.imgHolder}>
        <Image style={stylesDetails.img} source={{ uri: payload.img }} />
        <TouchableOpacity style={buttons.buttonAddPhoto}>
          <MaterialCommunityIcons name="plus" size={26} />
        </TouchableOpacity>
      </View>
      <Text style={stylesDetails.name}>{payload.name}</Text>
      <View style={stylesDetails.infoHolder}>
        <View style={stylesDetails.detailsHolder}>
          <Text>{payload.time} min</Text>
        </View>
        <View style={stylesDetails.detailsHolder}>
          <Text>{payload.servings} Servings</Text>
        </View>
        <View style={stylesDetails.detailsHolder}>
          <Text>{payload.difficulty}</Text>
        </View>
      </View>
      <View style={stylesDetails.ingredientsHolder}>
        <Text style={stylesDetails.ingTitle}>Ingredients: </Text>
        {showIngredients()}
      </View>
    </View>
  )
}

const stylesDetails = StyleSheet.create({
  img: {
    width: 350,
    height: 260,
  },
  imgHolder: {
    alignItems: 'center',
  },
  infoHolder: {
    flexDirection: 'row',
  },
  detailsHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.neutral_light,
    marginHorizontal: sizing.baseLine,
    marginVertical: sizing.baseLine * 1.5,
  },
  ingredientsHolder: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: sizing.baseLine * 3,
  },
  ingTitle: {
    fontSize: sizing.baseLine * 2,
    marginBottom: sizing.baseLine / 1.5,
  },
})

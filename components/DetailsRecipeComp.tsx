import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import buttons from '../styling/buttons'
import { sizing, typo } from '../styling/caketime'
import { colors } from '../styling/colors'
import { useState } from 'react'
import { endpoint } from '../utils/Backend'
import { useAuth } from '../utils/AuthContext'
import { getWithAuth } from '../utils/data-acces'
import Recipe from '../interfaces/Recipe'

export default ({ route, screen }: { route: any; screen: string }) => {
  const { payload } = route.params
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [isFavorite, setFavorite] = useState<boolean>()
  const { user } = useAuth()
  const [data, setData] = useState([])

  const showIngredients = (): JSX.Element[] => {
    const ingredients: JSX.Element[] = []
    for (let i = 0; i < payload.ingredients.length; i++) {
      ingredients.push(
        <Text key={i} style={{ textTransform: 'lowercase' }}>
          - {payload.ingredients[i].quantity} {payload.ingredients[i].name}
        </Text>,
      )
    }
    return ingredients
  }

  const sendFavToBackend = async () => {
    const uid: string | undefined = user?.uid
    const t: string | undefined = await user?.getIdToken()
    const data = {
      recipeId: `${payload.recipeId}`,
    }
    console.log(data)
    const requestOptions = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + t,
      }),
      body: JSON.stringify(data),
    }
    fetch(`${endpoint}users/${uid}/recipes/favorite`, requestOptions).then(
      (response) => response.json(),
    )
  }

  const checkFavorite = () => {
    if (isFavorite == true) {
      checkIsFavorite()
      sendFavToBackend()
    } else {
      checkIsFavorite()
      sendFavToBackend()
    }
  }

  const checkIsFavorite = async () => {
    const uid: string | undefined = await user?.uid
    const t: string | undefined = await user?.getIdToken()
    getWithAuth(`${endpoint}users/favorite/${uid}`, t).then((recipes) => {
      setData(recipes.favoriteRecipes)
    })
    data.map((recipes: Recipe[], i: number) => {
      //@ts-ignore
      if (data[i].recipeId == payload.recipeId) {
        setFavorite(() => true)
      }
    })
  }

  const Favorite = () => {
    if (isFavorite == true) {
      return <MaterialCommunityIcons name="heart" size={34} />
    } else {
      return <MaterialCommunityIcons name="heart-outline" size={34} />
    }
  }

  return (
    <View
      style={[stylesDetails.container, { justifyContent: 'space-between' }]}
    >
      <View style={stylesDetails.imgHolder}>
        <Image style={stylesDetails.img} source={{ uri: payload.img }} />
        <TouchableOpacity style={buttons.buttonAddPhoto}>
          <MaterialCommunityIcons name="plus" size={26} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={[stylesDetails.name, { marginRight: 12 }]}>
          {payload.name}
        </Text>
        <Pressable onPress={checkFavorite}>{Favorite()}</Pressable>
      </View>
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
      <ScrollView>
        <View style={stylesDetails.containerIngredients}>
          <View style={stylesDetails.ingredientsHolder}>
            <Text style={stylesDetails.detailTitle}>Ingredients: </Text>
            {showIngredients()}
          </View>
          <View style={stylesDetails.imgHolder}>
            <Text style={stylesDetails.detailTitle}>Category: </Text>
            <Image
              style={stylesDetails.imgCat}
              source={{ uri: payload.category.url }}
            />
          </View>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity
          style={[buttons.button, { alignSelf: 'center' }]}
          onPress={() => navigate(screen, { payload: payload })}
        >
          <Text style={[typo.textButton]}>START BAKING</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const stylesDetails = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4 * sizing.baseLine,
  },
  containerIngredients: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: sizing.baseLine * 2.5,
    marginTop: sizing.baseLine * 1.5,
  },
  img: {
    borderRadius: sizing.baseLine,
    width: 350,
    height: 250,
  },
  imgCat: {
    width: 100,
    height: 100,
  },
  imgHolder: {
    alignItems: 'center',
  },
  infoHolder: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  detailsHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 78,
    height: 70,
    borderWidth: 1,
    borderColor: colors.alpha_light,
    marginHorizontal: sizing.baseLine,
    marginVertical: sizing.baseLine * 1.5,
  },
  ingredientsHolder: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: sizing.baseLine * 4,
    textAlign: 'center',
    letterSpacing: 2.5,
    fontFamily: 'DancingScript_500Medium',
  },
  detailTitle: {
    fontSize: sizing.baseLine * 2,
    marginBottom: sizing.baseLine / 1.5,
    letterSpacing: 0.75,
  },
})

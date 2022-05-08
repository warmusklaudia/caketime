import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  Alert,
  Animated,
  Image,
  Platform,
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
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'

export default ({ route, screen }: { route: any; screen: string }) => {
  const { payload } = route.params
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [isFavorite, setFavorite] = useState<boolean>()
  const { user } = useAuth()
  const [data, setData] = useState([])
  const [image, setImage] = useState<string>()

  //Ingredients: Animation
  const showIngredients = (): JSX.Element[] => {
    const ingredients: JSX.Element[] = []
    let timingDelay: number = 0
    for (let i = 0; i < payload.ingredients.length; i++) {
      const animatedOpacity = new Animated.Value(0)
      ingredients.push(
        <Animated.Text
          key={i}
          style={{ textTransform: 'lowercase', opacity: animatedOpacity }}
        >
          - {payload.ingredients[i].quantity} {payload.ingredients[i].name}
        </Animated.Text>,
      )
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 300,
        delay: timingDelay * 150,
        useNativeDriver: true,
      }).start()
      timingDelay++
    }
    return ingredients
  }

  const sendFavToBackend = async () => {
    const uid: string | undefined = user?.uid
    const t: string | undefined = await user?.getIdToken()
    const data = {
      recipeId: `${payload.recipeId}`,
    }
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
    Alert.alert('Successfully added/removed from favorites')
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
    // if (isFavorite == true) {
    //   return <MaterialCommunityIcons name="heart" size={34} />
    // } else {
    //   return <MaterialCommunityIcons name="heart-outline" size={34} />
    // }
    return (
      <MaterialCommunityIcons
        style={{ padding: sizing.baseLine / 2 }}
        name="heart"
        size={30}
        color={colors.neutral_dark}
      />
    )
  }

  const sendToBlob = (img: string) => {
    const requestOptions = {
      method: 'PUT',
      headers: new Headers({
        'x-ms-blob-type': 'BlockBlob',
        'Content-Type': 'application/octet-stream',
      }),
      body: img,
    }
    fetch(
      `https://caketime.blob.core.windows.net/recipes/${payload.recipeId}.jpg?sv=2020-08-04&ss=bf&srt=sco&sp=rwdlacitfx&se=2023-05-06T23:19:07Z&st=2022-05-06T15:19:07Z&spr=https,http&sig=0kZnWvWv5rDZyTyTps2BIv4z%2B1fHZ50SFcKzUXZoGjg%3D`,
      requestOptions,
    ).then((response) => response.json().then((res) => console.log(res)))
  }

  const getImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View
      style={[stylesDetails.container, { justifyContent: 'space-between' }]}
    >
      <View style={stylesDetails.imgHolder}>
        <Image style={stylesDetails.img} source={{ uri: payload.img }} />
      </View>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={[stylesDetails.name, { marginRight: 12 }]}>
          {payload.name}
        </Text>
        <TouchableOpacity onPress={checkFavorite}>
          {Favorite()}
        </TouchableOpacity>
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
    ...Platform.select({
      ios: {
        shadowColor: colors.neutral_dark_x,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
    }),
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

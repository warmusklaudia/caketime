import { useRef, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Form, FormItem, Picker } from 'react-native-form-component'
import { ScrollView } from 'react-native-gesture-handler'
import Ingredient from '../../../interfaces/Ingredient'
import Instruction from '../../../interfaces/Instruction'
import Recipe from '../../../interfaces/Recipe'
import { styles, typo } from '../../../styling/caketime'
import { colors } from '../../../styling/colors'
import { useAuth } from '../../../utils/AuthContext'
import { endpoint } from '../../../utils/Backend'
import buttons from '../../../styling/buttons'

export default () => {
  const scrollRef = useRef<ScrollView>()
  const [cat, setCat] = useState('')
  const [difficulty, setDiff] = useState('')
  const { user } = useAuth()
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    time: 0,
    category: {
      name: '',
    },
    uidOwner: '',
    servings: 0,
    difficulty: '',
    ingredients: [],
    instructions: [],
  })

  const addIngredients = (): JSX.Element[] => {
    const [textValueName, setTextValueName] = useState('')
    const refInputsName = useRef<string[]>([textValueName])
    const setInputValueName = (index: number, value: string) => {
      const inputs = refInputsName.current
      inputs[index] = value
      setTextValueName(value)
    }
    const [textValueQuantity, setTextValueQuantity] = useState('')
    const refInputsQuantity = useRef<string[]>([textValueQuantity])
    const setInputValueQuantity = (index: number, value: string) => {
      const inputs = refInputsQuantity.current
      inputs[index] = value
      setTextValueQuantity(value)
    }
    return recipe.ingredients.map((ingredient: Ingredient, i: number) => (
      <View key={i}>
        <Text>Ingredient {i + 1}</Text>
        <FormItem
          label="Name"
          value={refInputsName.current[i]}
          onChangeText={(str: string) => {
            setInputValueName(i, str)
            setRecipe((oldRecipe: Recipe) => {
              oldRecipe.ingredients[i].name = str
              return { ...oldRecipe }
            })
          }}
        />
        <FormItem
          label="Quantity"
          value={refInputsQuantity.current[i]}
          onChangeText={(str: string) => {
            setInputValueQuantity(i, str)
            setRecipe((oldRecipe: Recipe) => {
              oldRecipe.ingredients[i].quantity = str
              return { ...oldRecipe }
            })
          }}
        />
      </View>
    ))
  }

  const addInstructions = (): JSX.Element[] => {
    // Manual
    const [textValueManual, setTextValueManual] = useState('')
    const refInputsManual = useRef<string[]>([textValueManual])
    const setInputValueManual = (index: number, value: string) => {
      const inputs = refInputsManual.current
      inputs[index] = value
      setTextValueManual(value)
    }
    return recipe.instructions.map((instruction: Instruction, i: number) => (
      <View key={i}>
        <Text>Step {i + 1}</Text>
        <FormItem
          value={refInputsManual.current[i]}
          onChangeText={(str: string) => {
            setInputValueManual(i, str)
            setRecipe((oldRecipe: Recipe) => {
              oldRecipe.instructions[i].name = 'Step ' + (i + 1)
              oldRecipe.instructions[i].manual = str
              return { ...oldRecipe }
            })
          }}
        />
      </View>
    ))
  }

  const sendToBackend = async () => {
    const uid: string | undefined = user?.uid
    const t: string | undefined = await user?.getIdToken()
    const data: Recipe = {
      name: recipe.name,
      time: recipe.time,
      uidOwner: uid,
      category: recipe.category,
      servings: recipe.servings,
      difficulty: recipe.difficulty,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    }
    const requestOptions = {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + t,
      }),
      body: JSON.stringify(data),
    }
    fetch(`${endpoint}users/${uid}/recipes/myrecipes/add`, requestOptions).then(
      (response) => response.json(),
    )
  }

  const Submit = () => {
    if (
      recipe.name &&
      recipe.difficulty &&
      recipe.category.name &&
      recipe.time != 0 &&
      recipe.servings != 0 &&
      recipe.ingredients.length != 0 &&
      recipe.instructions.length != 0
    ) {
      sendToBackend()
      const clearRecipe: Recipe = {
        name: '',
        time: 0,
        category: {
          name: '',
        },
        uidOwner: '',
        servings: 0,
        difficulty: '',
        ingredients: [],
        instructions: [],
      }
      setRecipe(clearRecipe)
      setCat('')
      setDiff('')
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      })
      Alert.alert('Recipe added successfully')
    } else {
      Alert.alert('Something went wrong', 'You must complete all fields')
    }
  }
  //TODO: Change Form to t-comb-form-native
  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>Add new recipe</Text>
      <ScrollView
        //@ts-ignore
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
      >
        <Form
          buttonStyle={[buttons.button, { alignSelf: 'center' }]}
          buttonText="Add new recipe"
          style={{ width: 250, marginVertical: 20 }}
          onButtonPress={Submit}
        >
          <FormItem
            label="Name"
            value={recipe?.name}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.name = str
                return { ...oldRecipe }
              })
            }
            isRequired
          />
          <FormItem
            label="Time"
            value={recipe?.time.toString()}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.time = +str
                return { ...oldRecipe }
              })
            }
            keyboardType="numeric"
          />
          <Picker
            items={[
              { label: 'Cakes', value: 'Cakes' },
              { label: 'Muffins', value: 'Muffins' },
              { label: 'Meringues', value: 'Meringues' },
              { label: 'Others', value: 'Others' },
            ]}
            label="Category"
            placeholder="Choose category"
            selectedValue={cat}
            onSelection={(item) => {
              setCat(item.value.toString())
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.category.name = item.value.toString()
                return { ...oldRecipe }
              })
            }}
          />
          <FormItem
            label="Servings"
            value={recipe?.servings.toString()}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.servings = +str
                return { ...oldRecipe }
              })
            }
            keyboardType="numeric"
          />
          <Picker
            items={[
              { label: 'Easy', value: 'Easy' },
              { label: 'Medium', value: 'Medium' },
              { label: 'Hard', value: 'Hard' },
            ]}
            label="Difficulty"
            selectedValue={difficulty}
            placeholder="Choose difficulty"
            onSelection={(item) => {
              setDiff(item.value.toString())
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.difficulty = item.value.toString()
                return { ...oldRecipe }
              })
            }}
          />
          <FormItem
            label="How much ingredients?"
            value={recipe.ingredients.length.toString()}
            onChangeText={(str: string) => {
              setRecipe((oldRecipe: Recipe) => {
                const array: Ingredient[] | undefined = []
                for (let i = 0; i < +str; i++) {
                  array[i] = { name: '', quantity: '' }
                }
                oldRecipe.ingredients = array
                return { ...oldRecipe }
              })
            }}
            keyboardType="numeric"
          />
          {addIngredients()}
          <FormItem
            label="Steps"
            value={recipe.instructions.length.toString()}
            onChangeText={(str: string) => {
              setRecipe((oldRecipe: Recipe) => {
                const array: Instruction[] | undefined = []
                for (let i = 0; i < +str; i++) {
                  array[i] = { name: '', manual: '' }
                }
                oldRecipe.instructions = array
                return { ...oldRecipe }
              })
            }}
            keyboardType="numeric"
          />
          {addInstructions()}
        </Form>
      </ScrollView>
      {/* <TextInput placeholder="Name" />
      <TextInput placeholder="Time" />
      <TextInput placeholder="Category" />
      <TextInput placeholder="Servings" />
      <TextInput placeholder="difficulty" /> */}
    </View>
  )
}

const stylesAddRecipe = StyleSheet.create({
  label: {
    color: colors.neutral_dark,
  },
})

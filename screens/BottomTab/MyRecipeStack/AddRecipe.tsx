import { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Form, FormItem } from 'react-native-form-component'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Ingredient from '../../../interfaces/Ingredient'
import Instruction from '../../../interfaces/Instruction'
import Recipe from '../../../interfaces/Recipe'
import { styles, typo } from '../../../styling/caketime'

export default () => {
  const [recipe, setRecipe] = useState<Recipe>({
    name: '',
    time: 0,
    category: {
      name: '',
    },
    servings: 0,
    difficulty: '',
    ingredients: [],
    instructions: [],
  })

  const addIngredients = (): JSX.Element[] => {
    // Name
    const [textValueName, setTextValueName] = useState('')
    const refInputsName = useRef<string[]>([textValueName])
    const setInputValueName = (index: number, value: string) => {
      const inputs = refInputsName.current
      inputs[index] = value
      setTextValueName(value)
    }
    // Quantity
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

  return (
    <View style={styles.container}>
      <Text style={typo.pageTitle}>Add new recipe</Text>
      <ScrollView>
        <Form onButtonPress={() => console.log('TODO')}>
          <FormItem
            label="Name"
            value={recipe?.name}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.name = str
                return { ...oldRecipe }
              })
            }
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
          <FormItem
            label="Category"
            value={recipe?.category.name}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.category.name = str
                return { ...oldRecipe }
              })
            }
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
          <FormItem
            label="Difficulty"
            value={recipe?.difficulty}
            onChangeText={(str: string) =>
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.difficulty = str
                return { ...oldRecipe }
              })
            }
          />
          <FormItem
            label="How much ingredients?"
            value={recipe.ingredients.length.toString()}
            onChangeText={(str: string) => {
              setRecipe((oldRecipe: Recipe) => {
                oldRecipe.ingredients = new Array(+str).fill({
                  name: '',
                  quantity: '',
                })
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
                oldRecipe.instructions = new Array(+str).fill({
                  name: '',
                  manual: '',
                })
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

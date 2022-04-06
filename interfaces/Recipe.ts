import Category from './Category'
import Ingredient from './Ingredient'
import Instruction from './Instruction'

export default interface Recipe {
  recipeId: string
  name: string
  time: number
  category: Category
  servings: number
  steps: number
  difficulty: string
  quantityIngredients: number
  ingredients: Ingredient[]
  instructions: Instruction[]
  img: string
}

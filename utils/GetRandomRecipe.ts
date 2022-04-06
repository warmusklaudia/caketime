import recipes from '../data/recipes.json'
import Recipe from '../interfaces/Recipe'

export const getRandomRecipe = (not?: Recipe): Recipe => {
  const r: Recipe = recipes[Math.floor(Math.random() * recipes.length)]
  if (r === not) {
    return getRandomRecipe(not)
  }
  return r
}

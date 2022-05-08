import { useState } from 'react'
import recipes from '../data/recipes.json'
import Recipe from '../interfaces/Recipe'
import { useAuth } from './AuthContext'
import { endpoint } from './Backend'
import { getWithAuth } from './data-acces'

export const getRandomRecipe = (not?: Recipe): Recipe => {
  const r: Recipe = recipes[Math.floor(Math.random() * recipes.length)]
  if (r === not) {
    return getRandomRecipe(not)
  }
  return r
}

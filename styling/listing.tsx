import { StyleSheet } from 'react-native'
import { sizing } from './caketime'
import { colors } from './colors'

export const stylesRecipe = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.alpha_light,
  },
  recipeHolder: {
    flexDirection: 'row',
    marginVertical: sizing.baseLine,
    alignItems: 'center',
  },
  name: {
    fontSize: sizing.baseLine * 2,
    marginHorizontal: sizing.baseLine * 5,
    letterSpacing: 2,
    color: colors.beta_dark,
  },
  img: {
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  inputSearchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.alpha_light,
    borderRadius: sizing.baseLine / 2,
    width: '90%',
    height: 5 * sizing.baseLine,
    padding: sizing.baseLine,
    marginBottom: sizing.baseLine * 2,
  },
})

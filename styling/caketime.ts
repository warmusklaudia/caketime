import { Platform, StyleSheet } from 'react-native'
import { colors } from './colors'

export const sizing = {
  baseLine: 8,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2.5 * sizing.baseLine,
    alignItems: 'center',
  },
  containerStart: {
    flex: 1,
    margin: 2.5 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWelcome: {
    flex: 1,
    marginTop: 5 * sizing.baseLine,
  },
  containerStyles: {
    borderBottomWidth: 2,
    height: 6 * sizing.baseLine,
    borderColor: colors.neutral,
  },
  categorySection: {
    margin: 60,
  },
  specialSection: {
    margin: 40,
  },
  imgHolder: {
    elevation: 5,
  },
  label: {
    margin: sizing.baseLine,
    width: '70%',
  },

  input: {
    borderWidth: 1,
    borderColor: colors.neutral,
    borderRadius: sizing.baseLine / 2,
    width: '90%',
    height: 5 * sizing.baseLine,
    padding: sizing.baseLine,
  },
  picker: {
    height: 4 * sizing.baseLine,
    width: '50%',
    borderColor: colors.beta,
    borderWidth: 1,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.alpha_light,
  },
})

export const typo = StyleSheet.create({
  intro: {
    fontSize: 2.5 * sizing.baseLine,
    marginBottom: 8 * sizing.baseLine,
    color: colors.alpha,
  },
  welcome: {
    fontSize: 3 * sizing.baseLine,
    paddingLeft: 4 * sizing.baseLine,
  },
  subWelcome: {
    paddingLeft: 4 * sizing.baseLine,
    paddingBottom: 2 * sizing.baseLine,
  },
  category: {
    fontSize: 2.25 * sizing.baseLine,
    paddingLeft: 4 * sizing.baseLine,
    fontWeight: '700',
  },
  pageTitle: {
    fontSize: 3 * sizing.baseLine,
    color: colors.neutral_dark_x,
  },
  name: {
    fontSize: 2.5 * sizing.baseLine,
    color: colors.neutral_dark_x,
  },
  email: {
    fontSize: 2 * sizing.baseLine,
    color: colors.neutral_dark_x,
    paddingBottom: 3 * sizing.baseLine,
  },
  textButton: {
    fontSize: 1.75 * sizing.baseLine,
    color: colors.white,
  },
  textSubButton: {
    fontSize: 1.75 * sizing.baseLine,
    color: colors.neutral_dark_x,
  },
})

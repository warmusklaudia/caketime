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
  containerLogin: {
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
  buttonHolder: {
    flex: 1,
    margin: 2 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: sizing.baseLine / 2,
    borderWidth: 1,
    borderRadius: sizing.baseLine / 2,
    borderColor: colors.beta_dark,
    width: '70%',
    height: 7 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.beta,
  },
  buttonLogin: {
    marginTop: 2 * sizing.baseLine,
    marginBottom: 3 * sizing.baseLine,
    borderWidth: 1,
    borderColor: colors.beta_dark,
    borderRadius: sizing.baseLine / 2,
    width: '50%',
    height: 5 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.beta,
  },
  subButton: {
    marginBottom: sizing.baseLine * 2,
  },
  buttonAdd: {
    marginTop: 2 * sizing.baseLine,
    borderWidth: 1,
    borderColor: colors.beta_dark,
    borderRadius: sizing.baseLine / 2,
    backgroundColor: colors.beta,
    width: 170,
    height: 5 * sizing.baseLine,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAddPhoto: {
    marginTop: -2.5 * sizing.baseLine,
    marginBottom: 2.5 * sizing.baseLine,
    borderWidth: 1,
    borderColor: colors.neutral,
    backgroundColor: colors.white,
    borderRadius: 100,
    width: 5.25 * sizing.baseLine,
    height: 5.25 * sizing.baseLine,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.neutral_dark_x,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonProfile: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.neutral_light,
    width: '100%',
    height: 7 * sizing.baseLine,
    justifyContent: 'center',
    padding: sizing.baseLine,
    marginTop: 2.5 * sizing.baseLine,
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
  inputSearchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral,
    borderRadius: sizing.baseLine / 2,
    width: '80%',
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
  },
  name: {
    fontSize: 2.5 * sizing.baseLine,
  },
  email: {
    fontSize: 2 * sizing.baseLine,
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
  textButtonProfile: {
    fontSize: 2.25 * sizing.baseLine,
  },
})

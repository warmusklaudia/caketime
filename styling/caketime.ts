import { Platform, StyleSheet } from 'react-native'
import { colors } from './colors'

export const sizing = {
  baseLine: 8,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4 * sizing.baseLine,
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
    marginTop: 4 * sizing.baseLine,
    marginHorizontal: sizing.baseLine,
  },
  containerStyles: {
    borderBottomWidth: 2,
    height: 6 * sizing.baseLine,
    borderColor: colors.neutral,
  },
  categoryHolder: {
    flexDirection: 'row',
    marginTop: 2 * sizing.baseLine,
    marginBottom: 4 * sizing.baseLine,
  },
  specialsHolder: {
    alignItems: 'center',
    marginVertical: 1.25 * sizing.baseLine,
  },
  imgHolder: {
    marginVertical: sizing.baseLine * 3,
    ...Platform.select({
      ios: {
        shadowColor: colors.neutral_dark_x,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
    }),
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

  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.alpha_light,
  },
  specials: {
    width: 340,
    height: 300,
    marginVertical: sizing.baseLine,
    marginHorizontal: sizing.baseLine / 2,
  },
  imgBackgroundRecipe: {
    borderRadius: sizing.baseLine,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingBottom: sizing.baseLine * 4,
    overflow: 'hidden',
  },
})

export const typo = StyleSheet.create({
  intro: {
    fontSize: 3.5 * sizing.baseLine,
    marginBottom: 8 * sizing.baseLine,
    color: colors.alpha,
    fontFamily: 'DancingScript_400Regular',
  },
  welcome: {
    fontSize: 3 * sizing.baseLine,
    paddingLeft: 3 * sizing.baseLine,
  },
  subWelcome: {
    paddingLeft: 3 * sizing.baseLine,
    paddingBottom: 2 * sizing.baseLine,
  },
  category: {
    fontSize: 2.25 * sizing.baseLine,
    paddingLeft: 2 * sizing.baseLine,
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
  titleRecipe: {
    textAlign: 'center',
    fontSize: 4.5 * sizing.baseLine,
    textShadowRadius: sizing.baseLine / 4,
    textShadowColor: colors.neutral_dark_x,
    color: colors.neutral_light_x,
    letterSpacing: sizing.baseLine / 2,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica Neue',
      },
    }),
  },
})

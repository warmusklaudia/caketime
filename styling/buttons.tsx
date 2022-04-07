import { Platform, StyleSheet } from 'react-native'
import { sizing } from './caketime'
import { colors } from './colors'

export default StyleSheet.create({
  buttonGetStarted: {
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
  button: {
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
    borderColor: colors.alpha_light,
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
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
})

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const loadFont = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
}

export const sizing = {
  baseLine: 8,
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2.5 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWelcome: {
    flex: 1,
    marginTop: 5 * sizing.baseLine,
  },
  buttonHolder: {
    flex: 1,
    margin: 2 * sizing.baseLine,
    paddingBottom: 5 * sizing.baseLine,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    marginBottom: 1.5 * sizing.baseLine,
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
    marginBottom: sizing.baseLine,
  },
  label: {
    margin: sizing.baseLine,
    width: '70%',
  },
  containerStyles: {
    borderBottomWidth: 2,
    height: 6 * sizing.baseLine,
    borderColor: colors.neutral,
  },
})

export const typo = StyleSheet.create({
  name: {
    fontSize: 5 * sizing.baseLine,
    color: colors.alpha_dark,
  },
  intro: {
    fontSize: 2.5 * sizing.baseLine,
    marginBottom: 8 * sizing.baseLine,
    color: colors.alpha,
  },
  title: {
    fontSize: 3 * sizing.baseLine,
    paddingLeft: 4 * sizing.baseLine,
  },
  subtitle: {
    paddingLeft: 4 * sizing.baseLine,
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

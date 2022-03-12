import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWelcome: {
    flex: 1,
    marginTop: 40,
  },
  buttonHolder: {
    flex: 1,
    margin: 16,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    margin: 4,
    borderWidth: 1,
    borderRadius: 24,
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 18,
  },
  label: {
    margin: 8,
    width: '70%',
  },
  containerStyles: {
    borderBottomWidth: 2,
    height: 50,
    borderColor: '#5F5F5F',
  },
  title: {
    fontSize: 22,
    paddingLeft: 30,
  },
  subtitle: {
    paddingLeft: 30,
  },
})

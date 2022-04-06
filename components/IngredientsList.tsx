import { Text } from 'react-native'

export default ({ route }: { route: any }): JSX.Element[] => {
  const { payload } = route.params
  const details: JSX.Element[] = []
  for (const [quantity, name] of Object.entries(payload.ingredients)) {
    details.push(
      <Text>
        {quantity} {name}
      </Text>,
    )
  }
  return details
}

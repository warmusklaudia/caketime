import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import buttons from '../../../styling/buttons'
import { sizing, styles, typo } from '../../../styling/caketime'
import { colors } from '../../../styling/colors'

export default ({ route }: { route: any }) => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const [count, setCount] = useState(0)
  const { payload } = route.params
  const totalSteps: number = payload.instructions.length

  const onPressPrevious = () => {
    setCount((prevCount) => prevCount - 1)
    if (count <= 0) {
      navigate('DetailsRecipe', { payload: payload })
    }
  }
  const onPressNext = () => {
    setCount((prevCount) => prevCount + 1)
    if (count >= totalSteps - 1) {
      navigate('DetailsRecipe', { payload: payload })
    }
  }

  return (
    <View style={[styles.container, { justifyContent: 'space-between' }]}>
      {count >= 0 && count <= totalSteps - 1 ? (
        <View>
          <Text style={stylesSteps.name}>
            {payload.instructions[count].name} of {totalSteps}
          </Text>
          <Text style={stylesSteps.manual}>
            {payload.instructions[count].manual}
          </Text>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          onPress={onPressPrevious}
          style={[buttons.button, { marginRight: 10 }]}
        >
          <Text style={typo.textButton}>PREVIOUS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressNext} style={buttons.button}>
          <Text style={typo.textButton}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const stylesSteps = StyleSheet.create({
  name: {
    fontSize: sizing.baseLine * 6,
    textAlign: 'center',
    fontFamily: 'DancingScript_500Medium',
    color: colors.alpha_dark,
  },
  manual: {
    fontSize: sizing.baseLine * 2.5,
    textAlign: 'center',
    marginVertical: sizing.baseLine * 3,
    marginHorizontal: sizing.baseLine * 2.5,
    color: colors.neutral_dark_x,
  },
})

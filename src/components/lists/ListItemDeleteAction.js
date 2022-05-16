import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS, FONTS, SIZES } from '../../../constants/theme'

export default function ListItemDeleteAction({ onPress }) {
  const { container } = styles
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={COLORS.white}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

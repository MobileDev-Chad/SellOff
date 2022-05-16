import { StyleSheet, View } from 'react-native'
import React from 'react'

import Text from '../Text'

export default ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null

  return <Text style={styles.error}>{error}</Text>
}

const styles = StyleSheet.create({
  error: { color: 'red' },
})

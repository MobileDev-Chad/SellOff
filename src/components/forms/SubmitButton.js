import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../Button'

export default SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext()

  return <AppButton title={title} onPress={handleSubmit} />
}

const styles = StyleSheet.create({})

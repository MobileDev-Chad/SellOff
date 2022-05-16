import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import TextInput from '../TextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, ...props }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})

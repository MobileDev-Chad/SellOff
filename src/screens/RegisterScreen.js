import React from 'react'
import { StyleSheet } from 'react-native'
import * as yup from 'yup'

import Screen from '../components/Screen'
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms'

const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
})

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './src/navigation/AuthNavigator'
import AppNavigator from './src/navigation/AppNavigator'
import navigationTheme from "./src/navigation/navigationTheme";



export default App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

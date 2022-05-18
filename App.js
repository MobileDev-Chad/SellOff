import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigation/AuthNavigator';
import AppNavigator from './src/navigation/AppNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import OfflineNotice from './src/components/OfflineNotice';

export default App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

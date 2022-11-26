import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthContext from './src/auth/context';
import AuthNavigator from './src/navigation/AuthNavigator';
import authStorage from './src/auth/storage';
import AppNavigator from './src/navigation/AppNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import OfflineNotice from './src/components/OfflineNotice';
import { navigationRef } from './src/navigation/rootNavigation';

export default App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

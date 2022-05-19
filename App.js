import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { NavigationContainer } from '@react-navigation/native';
import {AppLoading} from 'expo'

import AuthContext from "./src/auth/context";
import AuthNavigator from './src/navigation/AuthNavigator';
import authStorage from './src/auth/storage';
import AppNavigator from './src/navigation/AppNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import OfflineNotice from './src/components/OfflineNotice';

export default App = () => {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if(!token) return;
    setUser(jwtDecode(token))
  }

  useEffect(() => {
  restoreToken()
  }, [])
  

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

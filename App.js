import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default App = () => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('person', jsonValue);
      console.log(person);
    } catch (e) {
      // saving error
    }
  };
  storeData();
  return null;
};

import { StyleSheet, View, SafeAreaView } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

export default Screen = ({ children, style }) => {
  const { screen } = styles;

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

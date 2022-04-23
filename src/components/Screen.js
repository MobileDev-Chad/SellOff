import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children }) {
  const { screen } = styles;

  return <SafeAreaView style={screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});

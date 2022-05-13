import React from "react";
import { Text, StyleSheet, } from "react-native";

import defaultStyles from "../../constants/styles"

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({});

export default AppText;

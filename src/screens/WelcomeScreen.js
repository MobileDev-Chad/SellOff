import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

import { COLORS, FONTS, SIZES } from "../../constants/theme";

const WelcomeScreen = (props) => {
  const { buttonsContainer, tagline, logo, background, logoContainer } = styles;

  return (
    <ImageBackground
      blurRadius={5}
      style={background}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={logoContainer}>
        <Image
          style={logo}
          source={require("../../assets/images/logo-red.png")}
        />
        <Text style={tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: SIZES.padding * 2,
  },
  tagline: {
    fontSize: SIZES.h2 + 3,
    fontWeight: "600",
    paddingVertical: SIZES.padding * 2,
  },
});

export default WelcomeScreen;

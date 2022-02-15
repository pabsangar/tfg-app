import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcomeBackground.png")}
      style={styles.background}
    >
      <Image
        source={require("../assets/logo-lemonvil.png")}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <AppButton
          title="Entrar"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginBottom: 30,
    padding: 20,
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 70,
    width: 330,
    height: 100,
  },
});

export default WelcomeScreen;

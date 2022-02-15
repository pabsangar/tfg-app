import React from "react";
import LottieView from "lottie-react-native";

function WarningIndicator({ visible = true }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop={false}
      source={require("../assets/animations/warning.json")}
    />
  );
}

export default WarningIndicator;

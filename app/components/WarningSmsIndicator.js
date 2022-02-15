import React from "react";
import LottieView from "lottie-react-native";

function WarningSmsIndicator({ visible = true }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop={false}
      source={require("../assets/animations/warningSMS.json")}
    />
  );
}

export default WarningSmsIndicator;

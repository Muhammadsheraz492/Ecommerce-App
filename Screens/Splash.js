import React from "react";
import { View, Text } from "react-native";
import SplashComponents from "../Components/SplashComponents";
const Splash = props => {
  setTimeout(() => {
    props.navigation.replace("Onboarding");
  }, 2000);
  return (
    <View style={{ flex: 1 }}>
      <SplashComponents Name={"Jello"} />
    </View>
  );
};

export default Splash;

import React, { useState } from "react";
import { View, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
const Btn = props => {
  const Bg = props.Color;

  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../Assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          width: 155,
          height: 50,

          borderRadius: 20,
          backgroundColor: Bg,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "Roboto-Medium",
          }}
        >
          {props.Name}
        </Text>
      </View>
    );
  }
};

export default Btn;

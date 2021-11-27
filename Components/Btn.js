import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
const Btn = () => {
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
          backgroundColor: "#FFC33A",
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
          Sign In
        </Text>
      </View>
    );
  }
};

export default Btn;

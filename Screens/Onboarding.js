import React from "react";
import { View, Text, Touchable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Btn from "../Components/Btn";
import SwiperScreen from "../Components/SwiperScreen";
const Onboarding = props => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ width: "100%", height: "92%" }}>
        <SwiperScreen />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Btn Name={"Sign Up"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginScreen")}
        >
          <Btn Name={"Sign IN"} Color={"#FFC33A"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

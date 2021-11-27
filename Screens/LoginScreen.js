import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TxtInput from "../Components/TxtInput";
import { Title } from "react-native-paper";
const LoginScreen = props => {
  const [Email, setEmail] = useState("");

  const onChangeTextEmail = val => {
    setEmail(val);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "9%" }} />
        <View style={{ height: "80%", width: "85%", alignSelf: "center" }}>
          <Title>Welcome to Login</Title>
          <Text style={{ fontSize: 14 }}>
            Please fill E-mail & password to login your
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>app account. </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={{ color: "#B620E0" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: "9%" }} />
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "1.5%" }} />
              <Text>Email</Text>
            </View>
            <View style={{ height: "10%" }} />
            <TxtInput
              value={Email}
              placeholder={"productexperience@gmail.com"}
              onChangeText={() => onChangeTextEmail(val)}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

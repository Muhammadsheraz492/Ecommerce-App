import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TxtInput from "../Components/TxtInput";
import { Ionicons } from "@expo/vector-icons";
import { Title } from "react-native-paper";
import LargeBtn from "../Components/LargeBtn";
import Btn from "../Components/Btn";

const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [userName, setuserName] = useState();
  const onChangeTextEmail = val => {
    setEmail(val);
  };
  const onChangeTextpassword = val => {
    setPassword(val);
  };
  const onChangeTextUserName = val => {
    setuserName(val);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "85%", width: "85%", alignSelf: "center" }}>
          <Title>Create Your Account</Title>

          <View style={{ flexDirection: "row" }}>
            <Text>Do You have already account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("LoginScreen")}
            >
              <Text style={{ color: "#B620E0" }}> Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: "5%" }} />
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "1.5%" }} />
              <Text>UserName</Text>
            </View>
            <View style={{ height: "5%" }} />
            <TxtInput
              labelText={userName}
              placeholder={"Product Experience"}
              onChangeText={() => onChangeTextUserName(val)}
              multiline={true}
            />
          </View>

          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "1.5%" }} />
              <Text>Email</Text>
            </View>
            <View style={{ height: "8%" }} />
            <TxtInput
              labelText={Email}
              placeholder={"productexperience@gmail.com"}
              onChangeText={() => onChangeTextEmail(val)}
              multiline={true}
            />
          </View>
          {/* <View style={{ height: "1%" }} /> */}
          <View style={{}}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "1.5%" }} />
              <Text>Password</Text>
            </View>
            <View style={{ height: "10%", zIndex: 0 }} />
            <TxtInput
              style={{ zIndex: 1 }}
              labelText={Password}
              placeholder={"Password"}
              onChangeText={() => onChangeTextpassword(val)}
            />
          </View>
          {/* Under */}

          <TouchableOpacity>
            <View style={{ height: 800 }}>
              <LargeBtn backgroundColor={"#FFC33A"} Name={"Create account"} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: "6.5%" }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

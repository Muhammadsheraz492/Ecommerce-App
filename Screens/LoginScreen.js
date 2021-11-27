import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TxtInput from "../Components/TxtInput";
import { Ionicons } from "@expo/vector-icons";
import { Title } from "react-native-paper";
import LargeBtn from "../Components/LargeBtn";
import Btn from "../Components/Btn";
const LoginScreen = props => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckBox, setCheckBox] = useState(false);
  const onChangeTextEmail = val => {
    setEmail(val);
  };
  const onChangeTextpassword = val => {
    setPassword(val);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "5%" }} />
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
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setCheckBox(!CheckBox)}>
              <Ionicons
                name="checkbox"
                size={24}
                color={CheckBox ? "green" : "silver"}
              />
            </TouchableOpacity>
            <View style={{ width: "2%" }} />
            <Text style={{ fontSize: 12, marginTop: 5 }}>
              Remember {"  "}me
            </Text>
            <View style={{ width: "30%" }} />
            <TouchableOpacity>
              <Text style={{ fontSize: 12, marginTop: 5 }}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: "5%" }} />
          <TouchableOpacity>
            <View style={{ height: 800 }}>
              <LargeBtn backgroundColor={"#FFC33A"} Name={"Login"} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: "6.5%" }} />
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Btn Name={"Sign Up"} Color={"#E9421E"} Txt={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            <Btn Name={"Sign IN"} Color={"#3D66B8"} Txt={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

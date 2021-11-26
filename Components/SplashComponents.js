import React from "react";
import { View, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const width = Dimensions.get("window").width;
const SplashComponents = props => {
  return (
    <ScrollView>
      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#0063C6",
        }}
      >
        <View
          style={{
            height: 250,
            backgroundColor: "#025AB4",
            width: width - 150,
            alignSelf: "flex-end",
            justifyContent: "flex-end",
            borderBottomLeftRadius: 500,
          }}
        />
        <View style={{ height: "10%" }} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,

            borderWidth: 2,

            width: 150,
            borderTopEndRadius: 35,
            borderBottomLeftRadius: 35,
            // flex: 1,
            borderColor: "#FFC100",
            backgroundColor: "#FFC100",
          }}
        >
          <Text style={{ color: "#0E4FAA", fontSize: 22 }}>{props.Name}</Text>
        </View>

        <View style={{ height: 160 }} />
        <View
          style={{
            // flexDirection: ,

            height: 250,
            backgroundColor: "#025AB4",
            width: width - 150,
            //   alignSelf: "flex-end",
            //   justifyContent: "",
            //   borderBottomLeftRadius: 500,
            borderTopEndRadius: 500,
            justifyContent: "flex-end",
            alignSelf: "flex-start",
          }}
        />
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default SplashComponents;

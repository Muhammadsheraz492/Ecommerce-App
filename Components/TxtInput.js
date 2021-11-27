import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TxtInput = (props, labelText, SQ, ...rest) => {
  return (
    <View
      style={{
        width: 310,
        height: 55,

        borderWidth: 2,
        // alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center",
        borderColor: "#DCDCDC",
        borderRadius: 15,
      }}
    >
      <View
        style={{ flexDirection: "row", width: "98%", alignSelf: "flex-end" }}
      >
        {/* <View style={{ width: "5%", zIndex: 0 }} /> */}
        <TextInput
          style={{ zIndex: 1 }}
          keyboardType={"default"}
          placeholder={props.placeholder}
          value={labelText}
          secureTextEntry={props.placeholder == "Password" ? true : false}
          //   keyboardType={"non-password"}
          //   multiline={true}
        />
      </View>
    </View>
  );
};

export default TxtInput;

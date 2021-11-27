import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TxtInput = (props, ...rest) => {
  return (
    <View
      style={{
        width: 300,
        height: 55,

        borderWidth: 2,
        // alignSelf: "center",
        justifyContent: "center",
        // alignItems: "center",
        borderColor: "#DCDCDC",
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "5%" }} />
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          {...rest}
        />
      </View>
    </View>
  );
};

export default TxtInput;

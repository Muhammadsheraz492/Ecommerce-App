import React from "react";
import { View, Text } from "react-native";

const LargeBtn = (props, ...rest) => {
  return (
    <View
      style={{
        top: 50,
        width: "90%",
        alignSelf: "center",
        borderColor: "black",
        borderWidth: 2,
        height: "7%",
        alignItems: "center",
        justifyContent: "center",
        ...rest,
      }}
    >
      <Text>{props.Name}</Text>
    </View>
  );
};

export default LargeBtn;

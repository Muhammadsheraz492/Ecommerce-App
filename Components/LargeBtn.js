import React from "react";
import { View, Text } from "react-native";

const LargeBtn = (props, ...rest) => {
  const bg = props.backgroundColor;
  return (
    <View
      style={{
        top: 50,
        width: "100%",
        backgroundColor: bg,
        height: "100%",
        alignSelf: "center",
        // borderColor: "black",
        // borderWidth: 2,
        height: "7%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        ...rest,
      }}
    >
      <Text>{props.Name}</Text>
    </View>
  );
};

export default LargeBtn;

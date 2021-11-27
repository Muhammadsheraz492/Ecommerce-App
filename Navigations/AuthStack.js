import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screens/Splash";
import Onboarding from "../Screens/Onboarding";
import LoginScreen from "../Screens/LoginScreen";
import SignUp from "../Screens/SignUp";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: " " }}
      />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: " " }} />
    </Stack.Navigator>
  );
};

export default AuthStack;

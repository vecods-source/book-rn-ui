import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Register" }} />
    </Stack>
  );
};

export default _layout;

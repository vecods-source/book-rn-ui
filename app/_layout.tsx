import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeArea from "@/components/safe-area";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import COLORS from "@/constants/colors";
export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      setBackgroundColorAsync(COLORS.background);
      setButtonStyleAsync("dark");
    }

    // iOS Status Bar Configuration
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle("dark-content");
    }
  }, []);
  return (
    <SafeAreaProvider>
      <SafeArea>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(Auth)" options={{ title: "Auth" }} />
        </Stack>
      </SafeArea>
    </SafeAreaProvider>
  );
}

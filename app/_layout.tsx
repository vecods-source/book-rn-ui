import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeArea from "@/components/safe-area";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";
import COLORS from "@/constants/colors";
export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#ffffff"); // Status bar background color
      StatusBar.setBarStyle("dark-content"); // Status bar icons (dark/light)
      StatusBar.setTranslucent(false); // Optional: Make status bar non-translucent

      // Android Navigation Bar
      setBackgroundColorAsync(COLORS.background); // Navigation bar color
      setButtonStyleAsync("dark"); // Navigation bar icons (light/dark)
    }

    // iOS Status Bar Configuration
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle("dark-content");
    }
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeArea>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ title: "main" }} />
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="(Auth)" options={{ title: "Auth" }} />
          </Stack>
        </SafeArea>
      </SafeAreaProvider>
    </Provider>
  );
}

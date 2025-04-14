import { Link } from "expo-router";
import { Text, View } from "react-native";
import COLORS from "@/constants/colors";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: COLORS.primary }}>Hello</Text>
      <Link href={"./(Auth)"}>Login</Link>
      <Link href={"./(Auth)/register"}>Register</Link>
      <StatusBar style="dark" />
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "@/constants/colors";
const SafeArea = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default SafeArea;

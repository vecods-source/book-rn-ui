import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import COLORS from "@/constants/colors";

import { GestureResponderEvent } from "react-native";

const Btn = ({
  title,
  handlePress,
  isLoading,
}: {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  isLoading: boolean;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingVertical: 15,
        borderRadius: 16,
        marginTop: 20,
        opacity: isLoading ? 0.7 : 1,
      }}
      onPress={handlePress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Btn;

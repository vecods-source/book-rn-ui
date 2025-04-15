import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "@/constants/colors";

const Btn = ({ title }: { title: string }) => {
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
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

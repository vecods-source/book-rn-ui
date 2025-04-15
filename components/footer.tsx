import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Href } from "expo-router";
import COLORS from "@/constants/colors";
import { useRouter } from "expo-router";
const Footer = ({
  linktitle,
  title,
  hlink,
  isReg = false,
  setClear,
}: {
  linktitle: string;
  title: string;
  hlink: Href;
  isReg?: boolean;
  setClear: () => void;
}) => {
  const router = useRouter();
  const back = () => {
    setClear();
    {
      isReg ? router.back() : router.push(hlink);
    }
  };

  return (
    <View
      style={{
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 2 }}>
        <Text style={{ fontWeight: "300" }}>{title}</Text>
        {
          <Pressable onPress={back}>
            <Text style={{ color: COLORS.primary, fontWeight: "600" }}>
              {linktitle}
            </Text>
          </Pressable>
        }
      </View>
    </View>
  );
};

export default Footer;

import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import COLORS from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface InputFieldProps {
  title: string;
  usrValue: string;
  usrOnChange: (text: string) => void;
  usrplaceholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  isPass: boolean;
  showPass?: boolean;
  setShow?: (showPass: boolean) => void;
}

const InputField = ({
  title,
  usrValue,
  usrOnChange,
  usrplaceholder,
  icon,
  isPass,
  showPass = true,
  setShow,
}: InputFieldProps) => {
  return (
    <>
      <Text style={{ color: COLORS.textSecondary, marginTop: 10 }}>
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.inputBackground,
          width: "100%",
          borderRadius: 10,
          paddingHorizontal: 10,
          borderColor: COLORS.border,
          borderWidth: 1,
          marginTop: 10,
          position: "relative",
        }}
      >
        <Ionicons name={icon} size={20} color={COLORS.primary} />
        <TextInput
          value={usrValue}
          placeholder={usrplaceholder}
          onChangeText={(text) => usrOnChange(text)}
          placeholderTextColor={COLORS.placeholderText}
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
          secureTextEntry={!showPass}
        />
        {isPass && setShow ? (
          <Pressable
            onPress={() => {
              setShow(!showPass);
            }}
            style={{ position: "absolute", right: 10 }}
          >
            <Ionicons
              name={showPass ? `eye-outline` : `eye-off-outline`}
              size={20}
              color={COLORS.black}
            />
          </Pressable>
        ) : (
          ""
        )}
      </View>
    </>
  );
};

export default InputField;

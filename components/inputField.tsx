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
  rating?: boolean;
  ratingNum?: number;
  setRating?: (ratingNum: number) => void;
  caption?: boolean;
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
  rating = false,
  ratingNum,
  setRating,
  caption = false,
}: InputFieldProps) => {
  return (
    <>
      <Text style={{ color: COLORS.textSecondary, marginVertical: 10 }}>
        {title}
      </Text>
      {caption ? (
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.border,
            borderRadius: 10,
            padding: 5,
          }}
        >
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{
              width: "100%",
              height: 140,
              textAlignVertical: "top",
              lineHeight: 2,
            }}
          ></TextInput>
        </View>
      ) : (
        ""
      )}
      {!rating ? (
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
            position: "relative",
          }}
        >
          {!caption ? (
            <>
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
            </>
          ) : (
            ""
          )}

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
          ) : null}
        </View>
      ) : setRating && ratingNum !== undefined ? (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.inputBackground,
            width: "100%",
            borderRadius: 10,
            padding: 10,
            borderColor: COLORS.border,
            borderWidth: 1,
            gap: 10,
          }}
        >
          {[...Array(5)].map((_, index) => (
            <Pressable key={index} onPress={() => setRating(index + 1)}>
              <Ionicons
                name={index < ratingNum ? "star" : "star-outline"}
                size={40}
                style={{ color: "gold" }}
              />
            </Pressable>
          ))}
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

export default InputField;

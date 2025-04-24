import { View, Text } from "react-native";
import React from "react";
import COLORS from "@/constants/colors";
import { styles } from "@/styles/global-style";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

interface CardProps {
  title: string;
  rating: number;
  caption: string;
  date: string;
  image: string;
}

export const Card = ({ title, rating, caption, date, image }: CardProps) => {
  return (
    <>
      <View style={styles.Card}>
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/images/user.jpg")}
              contentFit="contain"
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
            <Text
              style={{
                fontWeight: "600",
                color: COLORS.textPrimary,
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              Moahmed
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Image
            source={image}
            contentFit="contain"
            style={{ width: 150, height: 150 }}
          />
        </View>
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: "500",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 1 }}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name={index < rating ? "star" : "star-outline"}
              size={20}
              style={{ color: "gold" }}
            />
          ))}
        </View>
        <Text
          style={{ color: COLORS.textSecondary, width: 220, marginTop: 10 }}
        >
          {caption}
        </Text>
        <Text style={{ fontSize: 11, color: "gray", marginTop: 10 }}>
          {date}
        </Text>
        <Link
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: COLORS.textPrimary,
            marginTop: 20,
            textAlign: "right",
          }}
          href={"/(Auth)"}
        >
          Login
        </Link>
      </View>
    </>
  );
};

export default Card;

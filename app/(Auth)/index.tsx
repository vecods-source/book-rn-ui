import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import COLORS from "@/constants/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Link } from "expo-router";
// entry file for the auth stack
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    illustrationImage: {
      width: width * 0.75,
      height: width * 0.75,
    },
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.illustrationImage}
        />
      </View>{" "}
      {/* below is the container for the form => the form container => the inputs div */}
      <View
        style={{
          borderRadius: 16,
          marginTop: 20,
          padding: 30,
          marginHorizontal: 30,
          backgroundColor: COLORS.cardBackground,
          shadowColor: COLORS.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
          width: "100%",
        }}
      >
        <Text style={{ color: COLORS.textSecondary, marginTop: 10 }}>
          Email
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
          }}
        >
          <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
          <TextInput
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={COLORS.placeholderText}
            style={{
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <Text style={{ color: COLORS.textSecondary, marginTop: 10 }}>
          Password
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
          }}
        >
          <Ionicons name="mail-outline" size={20} color={COLORS.primary} />
          <TextInput
            value={email}
            placeholder="Enter your email"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={COLORS.placeholderText}
            style={{
              width: "100%",
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>
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
            Login
          </Text>
        </TouchableOpacity>
        {/* Footer */}
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "300" }}>
            Don't have an account?
            <Link
              style={{ color: COLORS.primary, fontWeight: "600" }}
              href={"./register"}
            >
              Register
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Login;

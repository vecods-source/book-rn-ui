import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "@/styles/global-style";
import React, { useState } from "react";
import COLORS from "@/constants/colors";
import Btn from "../../components/button";
import { Link } from "expo-router";
import InputField from "@/components/inputField";
import Footer from "@/components/footer";
// entry file for the auth stack
const Login = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  function setClear() {
    setPassword("");
    setEmail("");
    setFullName("");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {/* below is the container for the form => the form container => the inputs div */}
        <View style={styles.formCont}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <Text
              style={{ fontWeight: "800", color: COLORS.primary, fontSize: 50 }}
            >
              BookWork
            </Text>
            <Text style={{ color: COLORS.textSecondary }}>
              Discover great reads from the community
            </Text>
          </View>
          <InputField
            title="Full Name"
            usrValue={fullName}
            usrOnChange={setFullName}
            usrplaceholder="Enter your name"
            icon="person-outline"
            isPass={false}
            showPass={true}
          />
          <InputField
            title="Login"
            usrValue={email}
            usrOnChange={setEmail}
            usrplaceholder="Enter your email"
            icon="mail-outline"
            isPass={false}
            showPass={true}
          />
          <InputField
            title="Password"
            usrValue={password}
            usrOnChange={setPassword}
            usrplaceholder="Enter your password"
            icon="lock-closed-outline"
            isPass={true}
            showPass={showPassword}
            setShow={setShowPassword}
          />
          <Btn title="Register" />
          {/* Footer */}
          <Footer
            linktitle="Login"
            title="Already have an account?"
            hlink={"/(Auth)"}
            isReg={true}
            setClear={setClear}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

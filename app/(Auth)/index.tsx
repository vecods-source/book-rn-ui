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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  function setClear() {
    setPassword("");
    setEmail("");
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
        <View>
          <Image
            source={require("../../assets/images/login.png")}
            style={styles.illustrationImage}
          />
        </View>
        {/* below is the container for the form => the form container => the inputs div */}
        <View style={styles.formCont}>
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
          <Btn title="Login" />
          {/* Footer */}
          <Footer
            linktitle="Register"
            title="Don't have an account?"
            hlink={"/register"}
            setClear={setClear}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

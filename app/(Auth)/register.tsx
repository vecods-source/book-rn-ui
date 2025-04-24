import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "@/styles/global-style";
import React, { useEffect, useState } from "react";
import COLORS from "@/constants/colors";
import Btn from "../../components/button";
import InputField from "@/components/inputField";
import Footer from "@/components/footer";
import { useSelector, useDispatch } from "react-redux";
import { rootState, AppDispatch, PS } from "@/store/store";
import { signup } from "@/store/AuthSlice";
import { Redirect, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
// entry file for the auth stack
const Register = () => {
  useEffect(() => {
    PS.purge();
  }, []);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  function setClear() {
    setPassword("");
    setEmail("");
    setUsername("");
  }
  const { isLoading, error, user, token } = useSelector(
    (state: rootState) => state.auth
  );
  console.log(user);
  async function handleRegister({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) {
    try {
      console.log("register");
      // Wait for the dispatch to resolve
      const result = await dispatch(signup(username, password, email));

      console.log("Registration Succeeded: ", result);
      router.push("../index");
    } catch (err) {
      console.log("Registration Failed: ", err);
      // Error is already handled in Redux store
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 190 : 0}
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
        <View style={styles.Card}>
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
            usrValue={username}
            usrOnChange={setUsername}
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
          {error && (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          )}

          <Btn
            title="Register"
            handlePress={() => handleRegister({ email, password, username })}
            isLoading={isLoading}
          />
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
export default Register;

import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { styles } from "@/styles/global-style";
import React, { useEffect, useState } from "react";
import COLORS from "@/constants/colors";
import Btn from "../../components/button";
import InputField from "@/components/inputField";
import Footer from "@/components/footer";
import { login } from "@/store/AuthSlice";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { AppDispatch, AppThunk, rootState } from "@/store/store";
import { PS } from "@/store/store";
// entry file for the auth stack
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { isLoading, user } = useSelector((state: rootState) => state.auth);
  const auth = useSelector((state: rootState) => state.auth);

  useEffect(() => {
    PS.purge();
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  function setClear() {
    setPassword("");
    setUsername("");
  }
  function handleLogin({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    console.log(username, password);
    dispatch(login(username, password));
    console.log(auth);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <View style={styles.Container}>
        <View>
          <Image
            source={require("../../assets/images/login.png")}
            style={styles.illustrationImage}
          />
        </View>
        {/* below is the container for the form => the form container => the inputs div */}
        <View style={styles.Card}>
          <InputField
            title="Login"
            usrValue={username}
            usrOnChange={setUsername}
            usrplaceholder="Enter your username"
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
          {/* {error && (
            <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
          )} */}
          <Btn
            title="Login"
            handlePress={() => {
              handleLogin({ username, password });
            }}
            isLoading={isLoading}
          />
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

import { Link, Redirect, useRouter } from "expo-router";
import { Text, View } from "react-native";
import COLORS from "@/constants/colors";
import { StatusBar } from "expo-status-bar";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
export default function Index() {
  const isLoggedIn = true;
  const [good, setGood] = useState(false);
  const user = useAuth();
  setTimeout(() => {
    setGood(true);
  }, 6000);
  useEffect(() => {
    console.log("user in the index: ", user);
  }, []);
  const router = useRouter();
  return (
    <>
      {user ? (
        <>
          <View>
            <Text>Welcome {user.username}</Text>
          </View>
          {good && router.push("./(tabs)")}
        </>
      ) : (
        <Redirect href="./(Auth)" />
      )}
    </>
  );
}

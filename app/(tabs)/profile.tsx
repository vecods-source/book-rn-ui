import { View, Text } from "react-native";
import React from "react";
import ColorList from "@/components/colors";

const Profile = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <ColorList color={"lightgreen"} />
    </View>
  );
};

export default Profile;

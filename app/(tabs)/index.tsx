import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "@/styles/global-style";
import COLORS from "@/constants/colors";
import { Card } from "@/components/card";
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          {/* The title */}
          <Text
            style={{ fontWeight: "800", color: COLORS.primary, fontSize: 50 }}
          >
            BookWork
          </Text>
          <Text style={{ color: COLORS.textSecondary }}>
            Discover great reads from the community
          </Text>
        </View>
        {/* The cards */}
        <Card
          title="Guardians of the Galaxy"
          rating={3}
          caption="a fantasy story about the galaxy guards and how to defeat the plant"
          date="3/9/2025"
          image={require("../../assets/images/react-logo.png")}
        />
        <Card
          title="Guardians of the Galaxy Vol. 2"
          rating={5}
          caption="a fantasy story about the galaxy guards and how to defeat the plant"
          date="3/9/2025"
          image={require("../../assets/images/react-logo.png")}
        />
        <Card
          title="Avengers: Rise of the Dead"
          rating={2}
          caption="The avengers come back with a new adventure how would they defeat against thanos"
          date="3/9/2025"
          image={require("../../assets/images/react-logo.png")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

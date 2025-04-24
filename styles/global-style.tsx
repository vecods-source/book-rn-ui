import { StyleSheet, Dimensions } from "react-native";
import COLORS from "@/constants/colors";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  illustrationImage: {
    width: width * 0.75,
    height: width * 0.75,
  },
  Card: {
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
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  Container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

const styles = StyleSheet.create({
    introText: {
      marginTop: SIZES.medium,
      marginHorizontal: 18,
      fontSize: SIZES.xLarge,
      color: COLORS.primary,
      fontFamily: "bold"
    },
    mainText: {
        marginHorizontal: 18,
        fontSize: SIZES.xLarge,
        color: COLORS.secondary,
        fontFamily: "bold"
    }
 });

 export default styles;
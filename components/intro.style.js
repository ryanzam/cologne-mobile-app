import { StyleSheet } from "react-native";
import { SIZES } from "../theme";

const styles = StyleSheet.create({
    introText: (clr, mt) => ({
      margin: mt - 5,
      marginHorizontal: 18,
      fontSize: SIZES.xLarge,
      color: clr,
      fontFamily: "bold"
    })
 });

 export default styles;
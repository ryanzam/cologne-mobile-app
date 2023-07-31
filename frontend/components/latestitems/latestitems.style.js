import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
    },
    featured: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: SIZES.large,
        fontFamily:"semibold",
        color: COLORS.primary
    }
 });

 export default styles;
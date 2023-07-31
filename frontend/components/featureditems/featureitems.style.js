import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        columnGap: SIZES.large
    },
    activityIndicator: {
        marginTop: "40%"
    },
    errorTxt: {
        marginTop: "40%",
        textAlign: "center",
        fontFamily: "semibold",
        color: COLORS.secondary
    }
 });

 export default styles;
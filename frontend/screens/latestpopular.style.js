import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

const styles = StyleSheet.create({
    container: {

    },
    topBar: {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        alignItems: "center",
        margin: SIZES.small
    },
    topBarText:{
        color: COLORS.white,
        fontFamily: "bold",
        fontSize: SIZES.large,
        paddingLeft: SIZES.small
    },
    itemlists: {
        marginHorizontal:SIZES.small
    },
    itemseparator: {
        height: SIZES.small
    }
});

export default styles;
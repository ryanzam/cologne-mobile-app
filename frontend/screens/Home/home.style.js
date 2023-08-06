import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../theme";

const styles = StyleSheet.create({
    topBarWrapper: {
        marginTop: SIZES.small,
        marginHorizontal: SIZES.small 
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cartWrapper: {
        alignItems: "flex-end"
    },
    cartItems: {
        position: "absolute",
        borderRadius: 8,
        backgroundColor: COLORS.accent,
        height:15,
        width: 15,
        zIndex:2,
        alignItems: "center"
    },
    itemNumber: {
        color:COLORS.white,
        fontSize: 12  
    }
});

export default styles;
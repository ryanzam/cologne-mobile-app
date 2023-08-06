import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
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
    itemWrapper: {
        flex: 1,
        padding: SIZES.medium,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        marginBottom: SIZES.xSmall,
        justifyContent: "space-between",
        alignItems: "center"
    },
    basketItem: {
        width: SIZES.medium * 3,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.white
    },
    img: {
        width: "100%",
        height: 60,
        borderRadius: SIZES.medium
    },
    name: {
        fontFamily: "bold",
        fontSize: SIZES.large,
        color: COLORS.primary
    },
    price: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.tertiary
    },
    totalWrapper: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    total: {
        textAlign: "right",
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        fontFamily: "bold"
    },
    checkoutBtn: {
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: 10
    },
    checkoutTxt: {
        color: COLORS.primary,
        fontSize: SIZES.medium,
        fontFamily: "bold",
        padding: 10
    }
})

export default styles;
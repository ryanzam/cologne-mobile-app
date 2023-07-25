import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.medium,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        marginBottom: SIZES.xSmall
    },
    searchedItem: {
        width: SIZES.medium * 3,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.white
    },
    img: {
        width: "100%",
        height: 60,
        borderRadius: SIZES.medium
    },
    textWrapper: {
        alignContent: "center",
        paddingLeft: SIZES.xSmall
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
    }
})

export default styles;
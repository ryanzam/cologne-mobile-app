import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

const styles = StyleSheet.create({
    signinImg: {
        width: SIZES.width-50,
        height: SIZES.height/3
    },
    controlsWrapper: {
        margin: 20
    },
    controlsTxt: {
        fontFamily: "regular",
        color: COLORS.primary,
        margin: 5
    },
    inputWrapper: (borderColor) => ({
        flexDirection: "row",
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 14,
        borderColor: borderColor
    }),
    txtInput: {
        marginLeft:10,
        height: "100%",
        flex: 1,
        fontFamily: "regular",
        color: COLORS.primary,
        borderColor: "green"
    },
    error: {
        fontFamily: "regular",
        color: "red",
        marginBottom: 15,
    },
    signup: {
        textAlign: "center",
        marginVertical: 20,
        fontSize: SIZES.large,
        fontFamily: "semibold",
        color: COLORS.secondary
    }
});

export default styles;
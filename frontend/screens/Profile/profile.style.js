import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    coverImg: {
        height: 250,
        width: "100%",
        resizeMode: "cover"
    },
    profileWrapper: {
        alignItems: "center",
    },
    profileImg: {
        height: 150,
        width: 150,
        marginTop: -75,
        borderWidth:3,
        borderColor: COLORS.secondary,
        resizeMode: "cover",
        borderRadius: 10
    },
    username: {
        fontSize: SIZES.large,
        fontFamily: "bold",
        paddingTop: 10,
        color: COLORS.primary
    },
    signin: {
        backgroundColor: COLORS.accent,
        marginTop: 10,
        borderRadius:10
    },
    signinTxt: {
        color: COLORS.white,
        fontFamily: "semibold",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    profileItemsWrapper: {
        marginTop: 40,
        paddingHorizontal:20
    },
    profileItems: {
        flexDirection: "row",
        color: COLORS.primary,
        alignItems: "center",
        borderBottomWidth: 0.3,
        paddingVertical: 10,
        borderColor: "lightgrey"
    },
    profileItemsTxt: {
        paddingHorizontal: 20,
        color: COLORS.primary,
        fontFamily: "semibold",
        fontSize: SIZES.medium
    }
 });

 export default styles;
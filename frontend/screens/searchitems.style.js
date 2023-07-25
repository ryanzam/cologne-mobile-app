import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height:SIZES.medium * 2,
        alignContent:"center",
        margin: SIZES.small
    },
    searchWrapper: {
        flex:1,
        borderTopLeftRadius: SIZES.small,
        borderBottomLeftRadius: SIZES.small,
        backgroundColor: COLORS.tertiary,
    },
    inputSearch: {
        width: "100%",
        paddingHorizontal: SIZES.small,
        height: "100%",
        width: "100%",
        color: COLORS.white
    },
    btnSearch: {
        width: 50,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: SIZES.small,
        borderBottomRightRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    searchicon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
 });

 export default styles;
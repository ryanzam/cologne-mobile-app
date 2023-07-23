import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height:50,
        alignContent:"center",
        margin: SIZES.small
    },
    searchWrapper: {
        flex:1,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.accent,
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
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
 });

 export default styles;
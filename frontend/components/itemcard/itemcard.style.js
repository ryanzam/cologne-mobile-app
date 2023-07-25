import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        marginTop:SIZES.medium,
        height:230,
        width: 150,
        backgroundColor: COLORS.tertiary,
        marginEnd: 20,
        borderRadius: SIZES.small
    },
    imgContainer: {
        width:140,
        flex: 1,
        overflow: "hidden",
        margin: SIZES.xSmall/2
    },
    img: {
        resizeMode: "cover",
        aspectRatio: 1
    },
    itemDetails: {
        padding: SIZES.small
    },
    itemTitle: {
        fontSize: SIZES.large,
        fontFamily: "bold",
        color: COLORS.white
    },
    itemPrice: {
        fontSize: SIZES.medium,
        fontFamily: "semibold",
        color: COLORS.white
    }
 });

 export default styles;
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme";

const styles = StyleSheet.create({
    container: {
        
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 18
    },
    img: {
        resizeMode: "cover",
        aspectRatio: 1
    },
    itemDetails: {
        borderTopLeftRadius: SIZES.medium,
        borderTopRightColor: SIZES.medium,
        marginTop: -SIZES.medium,
        padding: 18
    },
    itemTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 18
    },
    itemName: {
        fontSize: SIZES.large,
        fontFamily: "bold",
        color: COLORS.primary
    },
    itemPrice: {
        fontSize: SIZES.large,
        fontFamily: "semibold",
        color: COLORS.tertiary
    },
    ratings: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    stars: {
        flexDirection: "row",
        alignItems: "center"
    },
    rate: {
        flexDirection: "row",
        alignItems: "center"
    },
    rateNum: {
        fontSize: SIZES.large,
        paddingLeft: 6,
        paddingRight: 6,
    },
    desSection: {
        marginTop: 18
    },
    description: {
        textAlign: "justify",
        fontFamily: "regular"
    },
    buySection: {
        marginTop: 18,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    delivery: {
        flexDirection: "row",
        alignItems: "center"
    },
    deliveryBtn: {
        width: "40%",
        borderRadius: SIZES.medium
    },
    deliveryText : {
        paddingLeft: SIZES.xSmall,
        fontSize:SIZES.large,
        fontFamily: "regular",
        color: COLORS.tertiary
    }
});

export default styles;
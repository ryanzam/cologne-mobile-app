import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme";

export const BackButton = ({onPress, color}) => {
    return <TouchableOpacity onPress={onPress}>
            <Ionicons name="arrow-back-circle" size={32} color={color}/>
        </TouchableOpacity>
}

export const Button = ({onPress, text}) => {
    return <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        height: 50,
        width: "100%",
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    text: {
        fontSize: SIZES.large,
        fontFamily: "semibold",
        color: COLORS.white
    }
});
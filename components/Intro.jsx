import React from "react";
import { Text, View } from "react-native";
import styles from "./intro.style";
import { SIZES, COLORS } from "../theme";

const Intro = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.introText(COLORS.black, SIZES.small)}>Check Out Our</Text>
            <Text style={styles.introText(COLORS.primary, SIZES.medium)}>Best Colognes</Text>
        </View>
    )
}

export default Intro;
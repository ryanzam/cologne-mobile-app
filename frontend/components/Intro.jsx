import React from "react";
import { Text, View } from "react-native";
import styles from "./intro.style";

const Intro = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.introText}>Check Out Our</Text>
            <Text style={styles.mainText}>Best Colognes</Text>
        </View>
    )
}

export default Intro;
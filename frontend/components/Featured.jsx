import React from "react";
import { Text, View } from "react-native";
import styles from "./featured.style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme";

const Featured = () => {
    return(
        <View style={styles.container}>
           <View style={styles.featured}>
                <Text style={styles.title}>Featured Colognes</Text>
                <TouchableOpacity>
                    <Ionicons name="grid" size={22} color={COLORS.primary} />
                </TouchableOpacity>
           </View>
        </View>
    )
}

export default Featured;
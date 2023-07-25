import React from "react";
import { Text, View } from "react-native";
import styles from "./latestitems.style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const LatestItems = () => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
           <View style={styles.featured}>
                <Text style={styles.title}>Latest Popular Colognes</Text>
                <TouchableOpacity onPress={() => navigation.navigate("LatestItems")}>
                    <Ionicons name="grid" size={22} color={COLORS.primary} />
                </TouchableOpacity>
           </View>
        </View>
    )
}

export default LatestItems;
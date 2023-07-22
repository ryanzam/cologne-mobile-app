import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Ionicons, Entypo, Fontisto } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
    return(
        <SafeAreaView>
            <View style={styles.topBarWrapper}>
                <View style={styles.topBar}>
                    <Entypo name="colours" size={24}/>

                    <View style={styles.cartWrapper}>
                        <View style={styles.cartItems}>
                            <Text style={styles.itemNumber}>2</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-basket" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
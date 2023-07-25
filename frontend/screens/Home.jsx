import React from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import Intro from "../components/intro/Intro";
import Carousel from "../components/Carousel";
import FeaturedItems from "../components/featureditems/FeaturedItems";
import LatestItems from "../components/latestitems/LatestItems";

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
                <Intro />
                <Carousel />
                <LatestItems />
                <FeaturedItems />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
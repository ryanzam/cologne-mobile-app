import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import Intro from "../components/intro/Intro";
import Carousel from "../components/Carousel";
import FeaturedItems from "../components/featureditems/FeaturedItems";
import LatestItems from "../components/latestitems/LatestItems";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
    const [user, setUser] = useState(null);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        async function isSignIn() {
            const id = await AsyncStorage.getItem("id");
            const signedInUser = await AsyncStorage.getItem(id);
            if(signedInUser) {
                setUser(JSON.parse(signedInUser));
                setSignedIn(true);
            } 
        }
        isSignIn();
    }, [])

    return(
        <SafeAreaView edges={["top"]}>
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
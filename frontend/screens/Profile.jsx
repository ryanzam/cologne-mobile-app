import React, { useState } from "react";
import { Text, SafeAreaView, View, Image, TouchableOpacity, Alert, Platform } from "react-native";
import styles from "./profile.style";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../theme";
import { Entypo, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons'; 

const Profile = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [signedIn, setSignedIn] = useState(false);

    const deleteAccount = () => {
        if(Platform.OS !== "web") {
            Alert.alert("Delete Account.", 
            "Are you sure, you wanna delete your account?",
            [
                { text: "Cancel", onPress: () => console.log("cancel")},
                { text: "Sure, Delete.", onPress: () => console.log("delete")},
                { defaultIndex: 1 }
            ]);
        } else {
            const res = window.confirm("Are you sure, you wanna delete your account?");
            res ? console.log("delete") : console.log("no")
        }
    }

    const signOut = () => {
        if(Platform.OS !== "web") {
            Alert.alert("Signout", 
            "Are you sure, you wanna signout?",
            [
                { text: "Cancel", onPress: () => console.log("cancel")},
                { text: "Sign Out", onPress: () => console.log("signout")},
                { defaultIndex: 1 }
            ]);
        } else {
            const res = window.confirm("Are you sure, you wanna signout?");
            res ? console.log("yes") : console.log("no")
        }
    }

    return(
        <SafeAreaView edges={["top"]}>
            <View style={styles.container}>
                <View>
                    <StatusBar backgroundColor={COLORS.tertiary}/>
                    <View>
                        <Image style={styles.coverImg} source={require("../assets/images/abstract-colorful-splash.jpg")}/>
                    </View>
                    <View style={styles.profileWrapper}>
                        <Image style={styles.profileImg} source={require("../assets/images/profile.jpg")}/>
                        <Text style={styles.username}>
                            {signedIn ? user.name : "Sign in to your account."}
                        </Text>
                        {!signedIn &&
                                <TouchableOpacity onPress={() => navigation.navigate("SignI n")}>
                                    <View style={styles.signin }>
                                        <Text style={styles.signinTxt}>Sign in</Text>
                                    </View>
                                </TouchableOpacity>}
                        {!signedIn }
                    </View>

                    <View style={styles.profileItemsWrapper}>
                        <TouchableOpacity onPress={() => navigation.navigate("MyFavorites")}>
                            <View style={styles.profileItems}>
                                <Ionicons name="heart-circle-outline"
                                            size={SIZES.xLarge}
                                            color={COLORS.primary}/>
                                <Text style={styles.profileItemsTxt}>My Favorites</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("MyBasket")}>
                            <View style={styles.profileItems}>
                                <Ionicons name="basket"
                                            size={SIZES.xLarge}
                                            color={COLORS.primary}/>
                                <Text style={styles.profileItemsTxt}>My Basket</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("MyOrders")}>
                            <View style={styles.profileItems}>
                                <MaterialCommunityIcons name="truck-check"
                                            size={SIZES.xLarge}
                                            color={COLORS.primary}/>
                                <Text style={styles.profileItemsTxt}>My Orders</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteAccount()}>
                            <View style={styles.profileItems}>
                                <MaterialCommunityIcons name="delete-circle-outline"
                                            size={SIZES.xLarge}
                                            color={COLORS.primary}/>
                                <Text style={styles.profileItemsTxt}>Delete my Account</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => signOut()}>
                            <View style={styles.profileItems}>
                                <Entypo name="log-out"
                                            size={SIZES.xLarge}
                                            color={COLORS.primary}/>
                                <Text style={styles.profileItemsTxt}>Sign Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile;
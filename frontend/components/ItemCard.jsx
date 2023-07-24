import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./itemcard.style";
import { useNavigation } from "@react-navigation/native";

const ItemCard = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate("ItemDetails")}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image 
                        style={styles.img}
                        source={{uri: 'https://img.freepik.com/free-photo/front-view-elegant-perfume-colored-flowers-beige-ombre-background_140725-145231.jpg'}} 
                    />
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemTitle}>Item name</Text>
                    <Text style={styles.itemPrice}>Price</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard;
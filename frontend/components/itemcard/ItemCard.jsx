import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./itemcard.style";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ item }) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate("ItemDetail", {item})}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image 
                        style={styles.img}
                        source={{uri: item.imgUrl }} 
                    />
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemTitle} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.itemPrice} numberOfLines={1}>$ {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCard;
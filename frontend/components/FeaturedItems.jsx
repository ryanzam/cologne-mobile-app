import React from "react";
import { Text, View } from "react-native";
import styles from "./featureitems.style";
import { FlatList } from "react-native";
import ItemCard from "./ItemCard";

const FeaturedItems = () => {
    return(
        <View>
            <FlatList 
                data={["a", "b", "c"]}
                horizontal
                renderItem={({item}) => <ItemCard />}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
}

export default FeaturedItems;
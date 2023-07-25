import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./featureitems.style";
import { FlatList } from "react-native";
import ItemCard from "../itemcard/ItemCard";
import useFetch from "../../hooks/useFetch";

const FeaturedItems = () => {

    const { data, error, loading } = useFetch();

    if(error) {
        return <Text>Oops! Something went wrong.</Text>
    }

    return(
        <View>
            { loading ? 
                <ActivityIndicator /> : 
                <FlatList 
                    keyExtractor={(i) => i._id}
                    data={data}
                    horizontal
                    renderItem={({item}) => <ItemCard item={ item }/>}
                    contentContainerStyle={styles.contentContainer}
                />}
        </View>
    )
}

export default FeaturedItems;
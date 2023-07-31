import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import styles from "./featureitems.style";
import { FlatList } from "react-native";
import ItemCard from "../itemcard/ItemCard";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES } from "../../theme";

const FeaturedItems = () => {

    const { data, error, loading } = useFetch('http://localhost:3000/api/items');

    if(error) {
        return <Text style={styles.errorTxt}>Oops! Something went wrong.</Text>
    }

    return(
        <View>
            { loading ? 
                <ActivityIndicator style={styles.activityIndicator} size={SIZES.xLarge} color={COLORS.accent}/> : 
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
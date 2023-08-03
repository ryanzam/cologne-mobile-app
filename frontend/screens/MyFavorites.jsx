import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {FlatList, SafeAreaView, Text, View} from "react-native";
import { BackButton } from "../components/buttons/Buttons";
import { COLORS } from "../theme";
import ItemsRow from "../components/itemcard/ItemsRow";
import styles from "./latestpopular.style";

const MyFavorites = ({navigation}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function loadFavorites() {
            const favItems = await AsyncStorage.getItem("fav");
            setItems(JSON.parse(favItems));
        }
        loadFavorites();
    }, [])

    const renderFavItems = () => {
        if(items == null || items.length == 0) {
            return <View>
                    <Text>No favorite items.</Text>
                </View>
        }
        return <FlatList 
                keyExtractor={(item) => item._id}
                data={items}
                renderItem={({item}) => <ItemsRow item={item}/>}
            />
    }


    return <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.topBar}>
                <BackButton onPress={() => navigation.goBack()} color={COLORS.white}/>
                <Text style={styles.topBarText}>My Favorite Items</Text>
            </View>
            {renderFavItems()}
        </SafeAreaView>
}

export default MyFavorites;

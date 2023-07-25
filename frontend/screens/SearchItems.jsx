import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, {useState} from "react";
import { View, TextInput, TouchableOpacity, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../theme";
import styles from "./searchitems.style";
import SearchedItems from "../components/itemcard/SearchedItems";

const SearchItems = () => {

    const [searchText, setSearchText] = useState("");
    const [results, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:3000/api/items/search/${searchText}`)
            const data = await res.json();
            setResult(data);
            setLoading(false);
        } catch (error) {
            console.log("search failed: ", error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.inputSearch}
                        value={searchText}
                        placeholder="Search your favorite cologne"
                        onChangeText={setSearchText}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnSearch} onPress={() => handleSearch()}>
                        <Feather name="search" size={22} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
            { results.length === 0 ?
                        <View style={styles.searchicon}>
                           <MaterialCommunityIcons name="text-box-search-outline" size={200} color="lightgray" />
                        </View> :
                        <FlatList 
                            keyExtractor={(item) => item._id}
                            data={results}
                            renderItem={({item}) => <SearchedItems item={item}/>}
                        />
            }
        </SafeAreaView>
    )
}

export default SearchItems;
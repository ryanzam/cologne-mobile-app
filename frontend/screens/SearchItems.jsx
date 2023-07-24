import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../theme";
import styles from "./searchitems.style";

const SearchItems = () => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.searchWrapper}>
                    <TextInput 
                        style={styles.inputSearch}
                        value=""
                        placeholder="Search your favorite cologne"
                        onPressIn={() => {}}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnSearch}>
                        <Feather name="search" size={22} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchItems;
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./latestpopular.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../theme";
import useFetch from "../hooks/useFetch";
import ItemCard from "../components/itemcard/ItemCard";

const LatestPopularItems = ({ navigation }) => {

    const { data, loading, error } = useFetch('http://localhost:3000/api/items');
    
    const renderItems = () => {
        if(loading) {
            return (
                <View>
                    <ActivityIndicator size={SIZES.xLarge} color={COLORS.accent}/>
                </View>
            )
        }
        return <View style={styles.itemlists}>
            <FlatList 
                keyExtractor={(i) => i._id}
                data={data}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={styles.itemseparator}/>}
                renderItem={({item}) => <ItemCard item={ item }/>}
                contentContainerStyle={styles.contentContainer} 
            />
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={32} color={COLORS.white}/>
                </TouchableOpacity>
                <Text style={styles.topBarText}>Latest Colognes</Text>
            </View>
            {renderItems()}
        </SafeAreaView>
    )
}

export default LatestPopularItems;
import { Image, TouchableOpacity, View, Text } from "react-native"
import styles from "./searcheditems.style"
import { useNavigation } from "@react-navigation/native";

const ItemsRow = ({ item }) => {
    const navigation = useNavigation();

    return <View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ItemDetail", {item})}>
            <View style={styles.searchedItem}>
                <Image 
                    style={styles.img}
                    source={{uri: item.imgUrl }} 
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

export default ItemsRow;
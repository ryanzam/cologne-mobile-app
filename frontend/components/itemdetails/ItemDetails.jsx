import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, Image, Button } from "react-native";
import { COLORS } from "../../theme";
import styles from "./itemdetails.style";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../buttons/Buttons";

const ItemDetails = ({navigation}) => {
    const route = useRoute();
    const { item } = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BackButton onPress={() => navigation.goBack()} color={COLORS.primary}/>
                <TouchableOpacity>
                    <Ionicons name="heart" size={32} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.img}
                source={{uri: item.imgUrl}} 
            />
            <View style={styles.itemDetails}>
                <View style={styles.itemTitle}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                </View>

                <View style={styles.ratings}>
                    <View style={styles.stars}>
                    {[1,2,3,4].map((i) => (
                            <Ionicons
                                key={i}
                                name="star-sharp"
                                color="gold"
                                size={25} />
                        ))}
                        <Text> (4.0)</Text>
                    </View>
                    <View style={styles.rate}>
                        <TouchableOpacity>
                            <AntDesign name="plussquareo" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.rateNum}>5</Text>
                        <TouchableOpacity>
                            <AntDesign name="minussquareo" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.desSection}>
                    <Text style={styles.description}>{item.description}</Text>
                </View>

                <View style={styles.buySection}>
                    <View style={styles.delivery}>
                        <Feather name="truck" size={30} color={COLORS.tertiary}/>
                        <Text style={styles.deliveryText}>Free Delivery</Text>
                    </View>
                    <View style={styles.deliveryBtn}>
                        <Button title="Buy" color={COLORS.primary} OnPress={() => {}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemDetails;
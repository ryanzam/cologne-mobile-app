import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, Image, Button } from "react-native";
import { COLORS } from "../theme";
import styles from "./itemdetails.style";

const ItemDetails = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity OnPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={32} color={COLORS.primary}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart" size={32} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <Image 
                style={styles.img}
                source={{uri: 'https://img.freepik.com/free-photo/front-view-elegant-perfume-colored-flowers-beige-ombre-background_140725-145231.jpg'}} 
            />
            <View style={styles.itemDetails}>
                <View style={styles.itemTitle}>
                    <Text style={styles.itemName}>Armani Code</Text>
                    <View>
                        <Text style={styles.itemPrice}>$99.00</Text>
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
                    <Text style={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque corporis id, quis dolorum tempora ratione natus. Culpa quisquam quas illum maiores, voluptatum est error autem, sunt tempora expedita odit temporibus?</Text>
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
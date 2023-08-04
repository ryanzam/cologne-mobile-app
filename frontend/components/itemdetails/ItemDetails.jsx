import { Ionicons, AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { Text, View, Image, Button } from "react-native";
import { COLORS } from "../../theme";
import styles from "./itemdetails.style";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../buttons/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "react-hot-toast";

const ItemDetails = ({navigation}) => {

    const [addedAsFav, setAddedAsFav] = useState(false);
    const [signedIn, setSignedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(1);
    const [userId, setUserId] = useState(null);

    const route = useRoute();
    const { item } = route.params;

    useEffect(() => {
        async function getFavItem() {
            const id = await AsyncStorage.getItem("id");
            const signedInUser = await AsyncStorage.getItem(JSON.parse(id));
            if(signedInUser) {
                setSignedIn(true);
                setUserId(JSON.parse(id));
                const fav = await AsyncStorage.getItem("fav")
                if(fav) {
                    const parsedFav = JSON.parse(fav)
                    const alreadyAdded = parsedFav.filter(p => p._id == item._id);
                    if(alreadyAdded.length > 0) {
                        setAddedAsFav(true)
                    }
                }
            } 
        }
        getFavItem();
    }, [addedAsFav])

    const addToFavorite = async() => {
        const fav = await AsyncStorage.getItem("fav")
        let newArr = [];
        if(fav && addedAsFav) {
            const filteredItems = (JSON.parse(fav)).filter(p => p._id !== item._id);
            newArr = [...filteredItems];
            await AsyncStorage.setItem("fav", JSON.stringify(newArr));
            toast("Removed from favorites.")
            setAddedAsFav(false);
            return;
        }
        if(fav) {
            const parsedFav = JSON.parse(fav)
            setAddedAsFav(true)
            newArr = [item, ...parsedFav];
            toast.success("Added to favorites.");
        } else {
            setAddedAsFav(true)
            newArr.push(item);
        }
        await AsyncStorage.setItem("fav", JSON.stringify(newArr));
    }

    const handleAmount = (change) => {
        if(amount === 1 && change !== "plus") {
            return;
        }
        change == "plus" ? setAmount(amount + 1) : setAmount(amount - 1)
    }

    const handleAddToBasket = async () => {
        try {
            setLoading(true);
            const reqOpts = {
                method: "POST", 
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ "userId": userId, "basketItem": item._id, "amount": amount})
            };
            const res = await fetch(`http://localhost:3000/api/basket`, reqOpts);
            const data = await res.json();
            if(res.status === 200) {
                toast.success(data.message)
            }
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BackButton onPress={() => navigation.goBack()} color={COLORS.primary}/>
                {signedIn && <TouchableOpacity onPress={() => addToFavorite()}>
                    <Ionicons name={ addedAsFav ? "heart" : "heart-outline"} size={32} color={COLORS.primary}/>
                </TouchableOpacity>}
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
                        <TouchableOpacity onPress={() => handleAmount("plus")}>
                            <AntDesign name="plussquareo" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.rateNum}>{ amount }</Text>
                        <TouchableOpacity onPress={() => handleAmount("")}>
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
                        <TouchableOpacity onPress={() => handleAddToBasket()} disabled={loading}>
                          <Text style={styles.deliveryText}>Add to Basket</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemDetails;
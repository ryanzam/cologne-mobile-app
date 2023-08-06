import {Text, View, SafeAreaView, ActivityIndicator, Image, TouchableOpacity} from "react-native";
import styles from "../MyBasket/mybasket.style";
import { BackButton } from "../../components/buttons/Buttons";
import { COLORS, SIZES } from "../../theme";
import { useRoute } from "@react-navigation/native";
import useFetch from "../../hooks/useFetch";

const MyBasket = ({ navigation }) => {

    const route = useRoute();
    const {userId} = route.params;

    const { data, loading, error } = useFetch(`http://localhost:3000/api/basket/${userId}`);

    const renderItems = () => {
        if(error) return <Text>{error}</Text>

        if(data && data.length == 0) return <Text>Basket is empty.</Text>

        if(!data[0] || loading) {
            return (
                <View>
                    <ActivityIndicator size={SIZES.xLarge} color={COLORS.accent}/>
                </View>
            )
        }
        return <>
            {data[0].items.map(itm => {
                return (
                    <View key={itm._id} style={styles.itemWrapper}>
                        <View style={styles.basketItem}>
                            <Image 
                                style={styles.img}
                                source={{uri: itm.basketItem.imgUrl }} 
                            />
                        </View>
                        <View >
                            <Text style={styles.name}>{itm.basketItem.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.price}>{itm.basketItem.price}</Text>
                            <Text style={styles.price}>X {itm.amount}</Text>
                        </View>
                    </View>
                )
            })}
        </>
    }

    const renderCheckout = () => {
        if(data[0] == null) return

        let total =  data[0].items.reduce((acc, curr) => acc + (Number(curr.basketItem.price) * curr.amount), 0);

        return <View style={styles.totalWrapper}>
            <TouchableOpacity style={styles.checkoutBtn}>
                <Text style={styles.checkoutTxt}>Check out</Text>
            </TouchableOpacity>

            <Text style={styles.total}>Total: {total}</Text>
        </View>
    }

    return <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.topBar}>
            <BackButton onPress={() => navigation.goBack()} color={COLORS.white}/>
            <Text style={styles.topBarText}>My Basket</Text>
        </View>
        {renderItems()}
        {renderCheckout()}
    </SafeAreaView>
}

export default MyBasket;

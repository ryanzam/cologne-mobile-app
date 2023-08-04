import {Text, View, SafeAreaView} from "react-native";
import styles from "./latestpopular.style";
import { BackButton } from "../components/buttons/Buttons";
import { COLORS } from "../theme";

const MyBasket = ({ navigation }) => {
    return <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.topBar}>
            <BackButton onPress={() => navigation.goBack()} color={COLORS.white}/>
            <Text style={styles.topBarText}>My Basket</Text>
        </View>
        
    </SafeAreaView>
}

export default MyBasket;

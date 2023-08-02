import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./navigations/BottomNavigation";
import ItemDetails from "./components/itemdetails/ItemDetails";
import LatestPopularItems from "./screens/LatestPopularItems";
import SignIn from "./screens/SignIn";
import MyOrders from "./screens/MyOrders";
import MyFavorites from "./screens/MyFavorites";
import MyBasket from "./screens/MyBasket";
import SignUp from "./screens/SignUp";
import { Toaster } from 'react-hot-toast';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loadedFonts] = useFonts({
    light: require("./assets/fonts/MontserratAlternates-Light.ttf"),
    regular: require("./assets/fonts/MontserratAlternates-Regular.ttf"),
    bold: require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    semibold: require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
    medium: require("./assets/fonts/MontserratAlternates-Medium.ttf"),
    extrabold: require("./assets/fonts/MontserratAlternates-ExtraBold.ttf")
  });

  if(!loadedFonts) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Bottom Nav"
          component={BottomNavigation}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="ItemDetail"
          component={ItemDetails}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="LatestItems"
          component={LatestPopularItems}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="MyOrders"
          component={MyOrders}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="MyFavorites"
          component={MyFavorites}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="MyBasket"
          component={MyBasket}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </NavigationContainer>
  );
}
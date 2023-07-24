import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import  { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme.js";
import SearchItems from "../screens/SearchItems";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return(
        <Tab.Navigator screenOptions={screenOpts}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons name={focused ? "home" : "home-outline"} 
                            color={focused ? COLORS.primary: COLORS.secondary}
                            size={22}/>
                    }
                }}
                />
            <Tab.Screen 
            name="Search Item" 
            component={SearchItems}
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "search" : "search-outline"} 
                        color={focused ? COLORS.primary: COLORS.secondary}
                        size={22}/>
                }
            }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons name={focused ? "person" : "person-outline"} 
                            color={focused ? COLORS.primary: COLORS.secondary}
                            size={22}/>
                    }
                }}
                />
        </Tab.Navigator>
    )
}

const screenOpts = {
    headerShow: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60
    }
}

export default BottomNavigation;
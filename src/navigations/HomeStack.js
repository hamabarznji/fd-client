import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import HomeScreen from "../screens/home/HomeScreen";
import ProductScreen from "../screens/home/ProductScreen";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E4343E",
                tabBarInactiveTintColor: "black",
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Product" component={ProductScreen} />
        </HomeStack.Navigator>
    );
}

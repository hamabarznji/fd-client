import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BasketScreen from "../screens/BasketScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const BasketStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <BasketStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E4343E",
                tabBarInactiveTintColor: "black",
            }}
        >
            <BasketStack.Screen name="BasketS" component={BasketScreen} />
            <BasketStack.Group screenOptions={{ presentation: "modal" }}>
                <BasketStack.Screen
                    name="Checkout"
                    component={CheckoutScreen}
                />
            </BasketStack.Group>
        </BasketStack.Navigator>
    );
}

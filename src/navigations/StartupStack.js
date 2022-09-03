import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/UserScreen";
import LocationScreen from "../screens/LocationScreen";
const StartUpStack = createStackNavigator();

export default function StartupStack() {
    return (
        <StartUpStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E4343E",
                tabBarInactiveTintColor: "black",
            }}
        >
            <StartUpStack.Screen name="Login" component={UserScreen} />
            <StartUpStack.Screen name="Location" component={LocationScreen} />
        </StartUpStack.Navigator>
    );
}

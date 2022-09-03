/* import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreenStack from "./HomeStack";
import { useSelector } from "react-redux";
import UserScreen from "../screens/UserScreen";
const MainTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBarIcon = ({ focused, iconName }) => {
    return (
        <Ionicons
            name={iconName ? iconName : "home-outline"}
            size={24}
            color={focused ? "#E4343E" : "black"}
        />
    );
};

const AuthScreens = () => {
    return (
        <MainTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E4343E",
                tabBarInactiveTintColor: "black",
                headerStyle: {},
            }}
        >
            <MainTab.Screen
                name="HomeStack"
                component={HomeScreenStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <TabBarIcon focused={focused} />;
                    },
                    title: "Home",
                }}
            />
        </MainTab.Navigator>
    );
};

const RootScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#E4343E",
                tabBarInactiveTintColor: "black",
                headerStyle: {},
            }}
        >
            <Stack.Screen name="root" component={UserScreen} />
        </Stack.Navigator>
    );
};

export default function Navigation() {
    const isAuthenticated = useSelector(
        (state) => state.lezzoo.isAuthenticated
    );
    console.log(isAuthenticated);

    return <>{isAuthenticated ? <AuthScreens /> : <RootScreen />}</>;
}
 */

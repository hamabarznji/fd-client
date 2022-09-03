import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenStack from "./HomeStack";
import BasketScreenStack from "./BasketStack";
import SearchScreen from "../screens/SearchScreen";
import AccountScreen from "../screens/AccountScreen";
import LocationScreen from "../screens/LocationScreen";
import TabBarIcon from "../components/TabBarIcon";
const MainTab = createBottomTabNavigator();

export default function AuthenticatedScreens() {
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
            <MainTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarIcon focused={focused} iconName="search" />
                        );
                    },
                    title: "Search",
                }}
            />
            <MainTab.Screen
                name="Basket"
                component={BasketScreenStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarIcon focused={focused} iconName="basket" />
                        );
                    },
                }}
            />
            <MainTab.Screen
                name="location"
                component={LocationScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarIcon focused={focused} iconName="location" />
                        );
                    },
                    title: "Location",
                }}
            />
            <MainTab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabBarIcon focused={focused} iconName="person" />
                        );
                    },
                    title: "Account",
                }}
            />
        </MainTab.Navigator>
    );
}

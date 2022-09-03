import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabBarIcon({ focused, iconName }) {
    return (
        <Ionicons
            name={iconName ? iconName : "home"}
            size={24}
            color={focused ? "#E4343E" : "black"}
        />
    );
}

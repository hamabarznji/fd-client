import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    storeItemInfo: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});

export default function StoreInfo({ title, icon }) {
    return (
        <>
            <View style={styles.storeItemInfo}>
                <Ionicons name={icon} size={24} color="black" />
                <Text>{title}</Text>
            </View>
        </>
    );
}

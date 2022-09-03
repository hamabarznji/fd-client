import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    currentLocation: {
        flexDirection: "row",
    },
    location: {
        padding: 8,

        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#F5FCFF",
    },
});

export default function LocationTitle() {
    return (
        <View style={styles.location}>
            <Text style={{ color: "gray" }}>Deliver to</Text>

            <View style={styles.currentLocation}>
                <Text style={{ fontWeight: "bold" }}>Current Location</Text>
                <Ionicons name="chevron-down" size={18} color="black" />
            </View>
        </View>
    );
}

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    titleAndArrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default function CardItemTitleAndArrow({ length, categoryTitle }) {
    return (
        <View style={styles.titleAndArrow}>
            <View>
                <Text style={styles.categoryTitle}>{categoryTitle}</Text>
            </View>
            {length > 3 && (
                <View>
                    <Ionicons
                        name="arrow-forward-outline"
                        size={34}
                        color="black"
                    />
                </View>
            )}
        </View>
    );
}

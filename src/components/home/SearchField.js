import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    searchField: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 8,
    },
    textInput: {
        fontSize: 18,
        justifyContent: "center",
        alignItems: "center",
        width: 360,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        flexDirection: "row",
        padding: 8,
        marginLeft: 24,
    },
});

export default function SearchField({ setValue }) {
    return (
        <View style={styles.root}>
            <View style={styles.searchField}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => {
                        setValue(e);
                    }}
                ></TextInput>
                <View style={{ left: -40 }}>
                    <Ionicons name="search" size={24} color="gray" />
                </View>
            </View>
        </View>
    );
}

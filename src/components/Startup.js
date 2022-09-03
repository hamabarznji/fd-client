import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const logo = "https://lezzoo.com/assets/images/logo-icon.svg";
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#E4343E",
    },
});

export default function StartUp() {
    return (
        <View style={styles.root}>
            <Text>StartUp</Text>
        </View>
    );
}

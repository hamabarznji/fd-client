import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    line: {
        width: "100%",
        borderWidth: 1,
        margin: 4,
        borderColor: "#D3D3D3",
    },
});

export default function LineDvider() {
    return (
        <>
            <View style={styles.line}></View>
        </>
    );
}

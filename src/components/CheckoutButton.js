import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
});

export default function CheckoutButton({ bg, text, onPress }) {
    return (
        <>
            <TouchableOpacity
                style={[styles.btn, { backgroundColor: bg }]}
                onPress={onPress}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "white",
                    }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    );
}

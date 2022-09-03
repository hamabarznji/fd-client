import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    signin: {
        width: "90%",
        height: 50,
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 15,
        margin: 10,
        borderRadius: 25,
        borderWidth: 1,
    },
});

export default function SigninWithSocialMedia({ title, font, color }) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
            }}
        >
            <Ionicons
                name={font}
                size={24}
                color={color}
                style={{ left: 50 }}
            />
            <Text style={styles.signin}>{title}</Text>
        </View>
    );
}

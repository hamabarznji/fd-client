import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    checkoutSummary: {
        margin: 20,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
    },

    span: {
        fontWeight: "bold",
        color: "black",
    },
});

export default function ({ totalAmount }) {
    return (
        <>
            <View style={styles.checkoutSummary}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Summary
                </Text>
                <Text style={styles.text}>
                    Total Basket Amount:
                    <Text style={styles.span}> ${totalAmount}</Text>
                </Text>
                <Text style={styles.text}>
                    Delivery Fee : <Text style={styles.span}> ${2}</Text>
                </Text>
                <Text style={styles.text}>
                    Total Amount :{" "}
                    <Text style={styles.span}>${totalAmount + 2}</Text>
                </Text>
            </View>
        </>
    );
}

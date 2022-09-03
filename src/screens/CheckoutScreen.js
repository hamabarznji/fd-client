import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import CheckoutButton from "../components/CheckoutButton";
import LineDvider from "../components/LineDvider";

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "gray",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function CheckoutScreen({ navigation }) {
    return (
        <>
            <View style={styles.btnContainer}>
                <CheckoutButton text={"Confirm"} bg="#3897F0" />
                {/*   <CheckoutButton
                    text={"Close"}
                    bg="#e4343e"
                    onPress={() => navigation.goBack()}
                /> */}
            </View>
        </>
    );
}

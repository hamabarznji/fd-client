import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { lezzooActions } from "../../../store/lezzoo";
const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 50,
        backgroundColor: "#e4343e",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 18,
        top: -90,
    },
});

export default function LocationConfirmation() {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.btn}>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(lezzooActions.setAuth(true));

                        //navigation.navigate("Home");
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: "bold",
                            color: "white",
                        }}
                    >
                        Confirm Location
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

import React from "react";
import { View, Text, Button, StyleSheet, Image, TextInput } from "react-native";

import SigninWithSocialMedia from "../components/user/SigninWithSocialMedia";
import LoginForm from "../components/user/LoginForm";
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
    },

    signinContainer: {
        height: 200,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function () {
    return (
        <View style={styles.root}>
            <LoginForm />

            <Text
                style={{
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 30,
                    fontSize: 22,
                }}
            >
                Or
            </Text>

            <View style={styles.signinContainer}>
                <SigninWithSocialMedia
                    title="Signin With Facebook"
                    color={"blue"}
                    font="logo-facebook"
                />
                <SigninWithSocialMedia
                    title="Signin With Google"
                    color={"red"}
                    font="logo-google"
                />
            </View>
        </View>
    );
}

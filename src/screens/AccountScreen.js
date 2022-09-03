import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { lezzooActions } from "../../store/lezzoo";
const styles = StyleSheet.create({});

export default function AccountScreen() {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Button
                title="Logout"
                onPress={() => dispatch(lezzooActions.setAuth(false))}
            />
        </SafeAreaView>
    );
}

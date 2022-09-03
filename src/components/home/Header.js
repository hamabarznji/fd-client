import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LocationTitle from "./LocationTitle";
import SearchField from "./SearchField";

const styles = StyleSheet.create({});

export default function () {
    return (
        <>
            <LocationTitle />
            <View style={styles.searchField}>
                <SearchField />
            </View>
        </>
    );
}

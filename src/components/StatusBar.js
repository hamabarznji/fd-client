import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Constants from "expo-constants";

const CustomeStatusBar = () => {
    return (
        <View style={styles.StatusBar}>
            <StatusBar translucent barStyle="light-content" />
        </View>
    );
};

const styles = StyleSheet.create({
    StatusBar: {
        height: Constants.statusBarHeight,
        //   backgroundColor: "#E4343E",
        backgroundColor: "white",
    },
});
export default CustomeStatusBar;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({});

const TitleAndIcon = ({ title, icon }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Ionicons color="black" name={icon} />
            <Text>{title} </Text>
        </View>
    );
};
export default function StoreProductInfo({ location, storeName, rating }) {
    console.log(rating);
    return (
        <>
            <View style={{ marginLeft: 16 }}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        {storeName ? storeName : "KFC"}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TitleAndIcon title={rating} icon={"star-outline"} />
                    <TitleAndIcon
                        title={location ? location : "Erbil"}
                        icon={"location-outline"}
                    />
                </View>
            </View>
        </>
    );
}

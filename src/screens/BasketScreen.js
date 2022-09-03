import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import BasketItemCard from "../components/card/productCard/BasketItemCard";
import CheckoutSummary from "../components/card/checkout/CheckoutSummary";

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: "gray",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 4,
    },
});

export default function ({ navigation }) {
    const basket = useSelector((state) => state.lezzoo.basket);
    const totalAmount = basket.reduce((acc, item) => {
        return acc + item.price * item.ordereQty;
    }, 0);
    console.log(totalAmount);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {basket.length <= 0 && isNaN(totalAmount) ? (
                <Text
                    style={{
                        // flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >
                    Your Basket is Empty!
                </Text>
            ) : (
                <View style={{ height: "60%" }}>
                    <FlatList
                        data={basket}
                        renderItem={({ item }) => (
                            <BasketItemCard data={item} />
                        )}
                        keyExtractor={(item) => item?.id}
                    />
                </View>
            )}

            {basket.length > 0 && (
                <>
                    <CheckoutSummary totalAmount={totalAmount} />
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity
                            style={{
                                width: 300,
                                height: 50,
                                backgroundColor: "#e4343e",
                                justifyContent: "center",
                                alignSelf: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            }}
                            onPress={() => navigation.navigate("Checkout")}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productInfoContainer: {
        width: "60%",
        height: 110,
        padding: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 8,
    },
    description: {
        fontSize: 12,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
});

export default function ProductCardItemInfo({ data }) {
    return (
        <>
            <View>
                <View style={styles.card}>
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.title}>{data?.name}</Text>
                        <Text style={styles.description}>
                            {data?.description}
                        </Text>

                        <Text style={styles.price}>${data?.price}</Text>
                    </View>
                    <View>
                        <Image
                            source={{
                                uri: data?.imageSrc,
                                width: 150,
                                height: 110,
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    );
}
